---
layout: post
colors:
    default: 18a4a2
    dark: 129a98
    light: 8fd7d6

title: Beginning BDD with Django - Part Two
summary: Part two of a two-part tutorial on Behaviour Driven Development with Django. In this part we use [Behave](http://pythonhosted.org/behave/) to write and run our tests.
comments: 'on'
---

This is the second in a two part series attempting to answer the questions:

1. Why should I consider using BDD?
1. What are the key concepts?
1. How can I use it to test my Django project?

In the [first half of this series](http://whoisnicoleharris.com/2015/03/16/bdd-part-one.html) we outlined the benefits of BDD and scoped and wrote a Gherkin feature file for our `Filter Users` feature.  In this part we'll use [Behave](http://pythonhosted.org/behave/) to hook up our feature file to an automated test suite.

This guide has been tested to work with the following stack:

* Python 3.3
* Django 1.7
* Factory Boy 2.4.1
* Splinter 0.7.0
* Selenium 2.44.0
* Django Behave 0.1.2
* Phantom JS 1.9.8

## Contents
{:.no_toc}

* -
{:toc}

## Revisiting Our Feature File

For reference, let's take a quick look at the `Filter Users` feature we wrote in [the first part](http://whoisnicoleharris.com/2015/03/16/bdd-part-one.html) of this series:

<p class="code-heading">filter_users.feature</p>
{% highlight gherkin %}
Feature: Filter users by interest
As a standard user
I want to filter users by their listed interests
So I can find users who have similar interests to my own

Background: There are interests and users in the system
    Given there are a number of interests:
        |    interest           |
        |    Django             |
        |    Testing            |
        |    Public Speaking    |
        |    DevOps             |
        |    PHP                |

    And there are many users, each with different interests:
        |    name           |   interests                  |
        |    Billie Jean    |   Django, Testing            |
        |    Rocky Raccoon  |   Django, Public Speaking    |
        |    Major Tom      |   Testing, Devops            |
        |    Bobbie McGee   |   Public Speaking, DevOps    |

Scenario Outline: Filter users
    Given I am a logged in user
    When I filter the list of users by <filter>
    Then I see <num> users

    Examples:
        |    filter             |    num    |
        |    Django             |    2      |
        |    Django, Testing    |    3      |
        |    PHP                |    0      |
{% endhighlight %}

Remember that?  Great! Let's get started.

## Dependencies

First off, we'll need to install our dependencies:

* [Behave](http://pythonhosted.org/behave/) will run our BDD tests.
* [Django Behave](https://github.com/django-behave/django-behave) will let us run our Behave tests via the Django test runner.
* [PhantomJS](http://phantomjs.org/) will drive our interactions with the browser.
* [Splinter](https://github.com/cobrateam/splinter) sits on top of PhantomJS (and others) and will help us write simpler, more elegant test code.
* [Factory Boy](https://factoryboy.readthedocs.org/en/latest/) will allow us to generate Users and Interests to use in our tests.

After installing all of the above, update `settings.py`:

1. Add `django-behave` to `INSTALLED_APPS`
2. Set `TEST_RUNNER = 'django_behave.runner.DjangoBehaveTestSuiteRunner'`

<div class="note-header">
    <i class="fa fa-exclamation-circle"></i>
    Note
</div>
<div class="note">
    <p>We'll be using Django's built in test runner throughout this tutorial.  But if you prefer to use PyTest, then you should check out <a href="https://github.com/pytest-dev/pytest-django">pytest-django</a> and <a href="https://github.com/pytest-dev/pytest-bdd">pytest-bdd</a>.</p>
</div>


## Folder Structure

Next we'll need to create a new `bdd` app where we can save our existing feature file as `filter_users.feature`:

{% highlight text %}
project_root/
  bdd/
    init.py
    features/
      filter_users.feature
      environment.py
      steps/
        filter_users.py
{% endhighlight %}

<div class="note-header">
    <i class="fa fa-exclamation-circle"></i>
    Note
</div>
<div class="note">
    <p>We <em>could</em> instead include feature folders inside individual existing Django applications.  However, utilising one central bdd application allows us to share the same environment for all of our tests, whilst accounting for situations where individual tests cases span multiple Django applications.</p>
</div>

Remember to add `bdd` to your `INSTALLED_APPS` in your `settings.py` file.

## Setting Up Our Test Environment

### Creating Factories

Because we've already written our feature file, we know that we'll need `Users` and `Interests` in the database to run our test scenarios.  To create these, we'll use [Factory Boy](https://factoryboy.readthedocs.org/en/latest/) - a features replacement tool.

We'll setup our factories in the same application that our `User` and `Interest` models are defined:

{% highlight text %}
project_root/
    accounts/
        models.py # Our User and Interest models live here
        factories.py # This is where we'll create our Factory Boy factories
{% endhighlight %}

<p class="code-heading">factories.py</p>
{% highlight python %}
import factory
from django.contrib.auth.hashers import make_password
from .models import Interest, User

class UserFactory(factory.django.DjangoModelFactory):
    """
    Creates a standard active user.
    """
    class Meta:
        model = User

    first_name = 'Standard'
    last_name = 'User'
    # Emails must be unique - so use a sequence here:
    email = factory.Sequence(lambda n: 'user.{}@test.test'.format(n))
    password = make_password('pass')
    is_active = True

    @factory.post_generation
    def interests(self, create, extracted, **kwargs):
        """
        Where 'interests' are defined, add them to this user.
        """
        if not create:
            return

        if extracted:
            for interest in extracted:
                self.interest.add(interest)

class InterestFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Interest

    name = factory.Sequence(lambda n: 'interest{}'.format(n))
{% endhighlight %}

Let's go over whats going on here:

First, we define the model we want to instantiate by setting the `model` inside the `class Meta` block.

Next, we define defaults for the corresponding model fields.  In our example, all of our users will have the first name of 'Standard' unless we specify otherwise.

For the email field (in our UserFactory) and name field (in our InterestFactory), we can use a [factory sequence](https://factoryboy.readthedocs.org/en/latest/introduction.html?highlight=sequence#sequences), so that each object in our factory is unique.  If we now create two instances of `InterestFactory`, they will each have a unique name - the first will be `interest1`, the second `interest2`.

Finally, to define the many-to-many relationship between `User` and `Interest`, we need to setup our interests as a method using the [post_generation](https://factoryboy.readthedocs.org/en/latest/reference.html#factory.post_generation) hook.

Voila!  Now we're all set to create objects in our tests.  For example, we can:

{% highlight python %}
# Create a User with the default settings
user = UserFactory() # Will generate a user with the name 'Standard User'

# Create a User with a custom name
major_tom = UserFactory(first_name='Major', last_name='Tom')

# Create a User with Interests
django = InterestFactory(name='Django')
public_speaking = InterestFactory(name='Public Speaking')
lucy_diamond = UserFactory(first_name='Lucy', last_name='Diamond',
                           interests=(django, public_speaking))
{% endhighlight %}

### Configuring environment.py

We can use our environment.py file to define what should happen before and after certain points in our tests.  There are [several hooks](http://pythonhosted.org/behave/api.html#environment-file-functions) we can utilise, but for our example, we're going to focus on:

* `before_all` Code defined here will run before all of our tests begin.  We'll use this hook to set up our browser.
* `after_all` Code defined here will run after all of our tests finish.  We'll use this hook to quit our browser.
* `before_scenario` Code defined here runs before each individual scenario.  We'll use this to setup (and teardown) our database.  This will help us keep our data clean between each scenario.

Our example:

<p class="code-heading">environment.py</p>
{% highlight python %}
from behave import *
from splinter.browser import Browser
from django.core import management

def before_all(context):
    # Unless we tell our test runner otherwise, set our default browser to PhantomJS
    if context.config.browser:
        context.browser = Browser(context.config.browser)
    else:
        context.browser = Browser('phantomjs')

    # When we're running with PhantomJS we need to specify the window size.
    # This is a workaround for an issue where PhantomJS cannot find elements
    # by text - see: https://github.com/angular/protractor/issues/585
    if context.browser.driver_name == 'PhantomJS':
        context.browser.driver.set_window_size(1280, 1024)

def before_scenario(context, scenario):
    # Reset the database before each scenario
    # This means we can create, delete and edit objects within an
    # individual scenerio without these changes affecting our
    # other scenarios
    management.call_command('flush', verbosity=0, interactive=False)

    # At this stage we can (optionally) generate additional data to setup in the database.
    # For example, if we know that all of our tests require a 'SiteConfig' object,
    # we could create it here.

def after_all(context):
    # Quit our browser once we're done!
    context.browser.quit()
    context.browser = None
{% endhighlight %}

The `context` variable is an instance of [behave.runner.Context](http://pythonhosted.org/behave/api.html#behave.runner.Context).
This variable holds additional contextual information during the running of tests, so we could also pass it additional information and retreive that value later.

## Running Our Tests

Now, we've setup our environment, we're ready to run our tests!
In your terminal run:

{% highlight text %}
python manage.py test bdd
{% endhighlight %}

You'll see:

{% highlight text %}
Failing scenarios:
  bdd/features/filter_users.feature:22  Filter users
  bdd/features/filter_users.feature:22  Filter users
  bdd/features/filter_users.feature:22  Filter users

0 features passed, 1 failed, 0 skipped
0 scenarios passed, 3 failed, 0 skipped
0 steps passed, 0 failed, 0 skipped, 15 undefined
Took 0m0.000s
{% endhighlight %}

Why?  Because Behave can't find any instructions (known as steps) for each of our scenarios.  Conveniently, Behave provides us with some default snippets.  Copy these from your terminal and paste them into the `filter_users.py` file - grouping common steps together:

{% highlight python %}
from behave import * # We'll need to import all from behave first

# Then we can copy the snippets into our file
@given('there are a number of interests')
def impl(context):
    assert False

@given('there are many users, each with different interests')
def impl(context):
    assert False

@given('I am a logged in user')
def impl(context):
    assert False

@when('I filter the list of users by Django')
def impl(context):
    assert False

@when('I filter the list of users by Django, Testing')
def impl(context):
    assert False

@when('I filter the list of users by PHP')
def impl(context):
    assert False

@then('I see 3 users')
def impl(context):
    assert False

@then('I see 2 users')
def impl(context):
    assert False

@then('I see 0 users')
def impl(context):
    assert False
{% endhighlight %}

Step functions are defined using step decorators, here shown as `@given`, `@then` and `@when`.  These are universally imported when you import Behave; you do not need to import them individually.

Step decorators use a string to match your Gherkin feature file step - this must be an exact match for the test to run correctly.

The decorated function (in this case `def impl()`) can be named anything - It doesn't matter.  The only thing you must do is pass it the `context` that we mentioned earlier.


## Writing Test Code

Let's go through each of our steps and write our test code.

### 1. Given there are a number of interests

For this step, we'll need to use our `InterestFactory` to create the interests listed in our feature file.  We can access the name of our interests by looping over each row in our `context.table` using the `interest` column heading as a key.

<p class="code-heading">filter_users.py</p>
{% highlight python %}
from behave import *
from accounts.factories import InterestFactory

@given('there are a number of interests')
def impl(context):
    interests = [InterestFactory(name=row['interest']) for row in context.table]
{% endhighlight %}

### 2. And there are many users, each with different interests

In this step we create our users by:

1.  Splitting the items listed under our 'interest' heading into list items
2.  Fetching the interests (that we created in our last step) from the database
3.  Creating a new user with our `UserFactory`, passing in the the interest objects

<p class="code-heading">filter_users.py</p>
{% highlight python %}
from accounts.factories import UserFactory
from accounts.models import Interest

@given('there are many users, each with different interests')
def impl(context):
    for row in context.table:
        interest_names = row['interests'].split(', ')
        interests = Interest.objects.filter(name__in=interest_names)
        UserFactory(email=row['email'], interests=interests)
{% endhighlight %}

### 3. Given I am a logged in user

To log in a user, we navigate to the login page and interact with the login form.  Here we can start to appreciate the power of [Splinter](https://splinter.readthedocs.org/en/latest/index.html) for browsing, finding and filling in form fields.

<p class="code-heading">filter_users.py</p>
{% highlight python %}
from accounts.factories import UserFactory

@given('I am a logged in user')
def impl(context):
    # First we need to create the user to login.
    user_to_login = UserFactory(email='log.me.in@test.test')
    # All properties (other than email) will be inherited from our UserFactory.
    # Therefore our password for this user will be 'pass'.

    # We visit the login page
    # context.config.server_url is by default set to http://localhost:8081
    # (Thanks to Cynthia Kiser for pointing this out.)
    # In this example we're visiting http://localhost:8081/accounts/login/
    context.browser.visit(context.config.server_url + 'accounts/login/')

    # Next, we log in our user by interacting with the login form
    # Splinter has a handy fill function that helps us fill form fields based
    # on their name.  We'll use it to fill in the username and password fields.
    context.browser.fill('username', user_to_login.email)
    context.browser.fill('password', 'pass')

    # Finally we find the submit button (by its CSS attribute) and click on it!
    context.browser.find_by_css('form input[type=submit]').first.click()
{% endhighlight %}

At this point it might be helpful to see our tests running in a 'real' browser.  To do this, we need to install [Selenium](http://docs.seleniumhq.org/).

Now we can tell Splinter to run our tests using Firefox (rather than the default PhantomJS):

{% highlight text %}
$ python ./manage.py test bdd --behave_browser firefox
{% endhighlight %}

<div class="note-header">
    <i class="fa fa-exclamation-circle"></i>
    Note
</div>
<div class="note">
    <p>Running with Firefox is significantly slower than with PhantomJS, so unless I'm debugging, I tend to stick with running PhantomJS locally and test with other, heavier browsers on my continuous integration server.</p>
</div>

### 4. When I filter the list of users by ...

We can combine each of our filter steps into one single step by using Behave's [step parameters](http://pythonhosted.org/behave/tutorial.html?highlight=context#step-parameters).

First, we need to change our feature file, wrapping our `filter` variable in string formatting:

<p class="code-heading">filter_users.feature</p>
{% highlight gherkin %}
Scenario Outline: Filter users
    ...
    When I filter the list of users by "<filter>"
    ...
{% endhighlight %}

This allows us to write one (and only one) step for each filter step:

<p class="code-heading">filter_users.py</p>
{% highlight python %}
@when('I filter the list of users by "{checked}"')
def impl(context, checked):

    # First we visit the page where we see all the users.
    # In our example, this happens to be the root domain.
    context.browser.visit(context.context.config.server_url)

    # Then we get the list of interests
    checked = checked.split(', ');
    for check in checked:
        # And click on each label.
        # This code assumes we have a form where each interest is listed as a
        # label containing a checkbox.
        path = "//label[contains(.,'{}')]/input".format(check)
        context.browser.find_by_xpath(path).click()

    # Finally, we submit the form
    context.browser.find_by_css('form input[type=submit]').first.click()
{% endhighlight %}

### 5. Then I see ... users

Finally, we can use the same pattern to count the number of users in our results.

<p class="code-heading">filter_users.feature</p>
{% highlight gherkin %}
Scenario Outline: Filter users
    ...
    ...
    Then I see "<num>" users
{% endhighlight %}

And in our python file:
<p class="code-heading">filter_users.py</p>
{% highlight python %}
@then('I see "{count}" users')
def impl(context, count):
    # Assuming there is a <div class="user-card"></div> for each user
    users = context.browser.find_by_css('.user-card')

    # We can now assert that the number of users on the page
    # is equal to the number we expect
    assert len(users) == int(count)
{% endhighlight %}


## Wrapping Up

That's it for our test code!  Now it's over to you to write application code to make these failing scenarios pass.

I hope you've enjoyed reading these articles as much as I've enjoyed writing them.  If you have any questions or comments, don't hesitate to leave them below.
