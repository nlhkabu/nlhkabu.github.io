---
layout: post
colors:
    default: 18a4a2
    dark: 129a98
    light: 8fd7d6

title: Beginning BDD with Django - Part One
summary: Part one of a two-part tutorial on Behaviour Driven Development.  In this part we scope and write a Gherkin feature file.
comments: 'on'
---

For the last year I've been learning Django by building [Connect](/connect/).  Part of this journey has been to explore various automated testing methods and tools.  Behaviour Driven Development (BDD) is one technique that really spoke to me and was surprisingly simple to integrate into my application.

This article is the first of two parts that aim to pass on what I have learnt so far. It is not an in-depth exploration of the philosophy or best-practice application of BDD, but rather a highly practical example to get you started.

By the end of both articles, I hope you will be able to answer the following questions:

1. Why should I consider using BDD?
1. What are the key concepts?
1. How can I use it to test my app?

Let's do it!

## Contents
{:.no_toc}

* -
{:toc}

## Why BDD

I'm not going to go into why you should test your application.  I assume that by reading this article you're already sold on the benefits of testing.  Instead I'm going to focus on why you should specifically consider *BDD* for your next app.

To do this, we need to step back and ask ourselves *why* are we building software in the first place and *how* we can assess the success of our application.

In a great talk titled <a href="http://businessofsoftware.org/2013/02/kathy-sierra-building-the-minimum-badass-user-business-of-software-a-masterclass-in-thinking-about-software-product-development/" data-proofer-ignore>building the minimum badass user</a>, Kathy Sierra argues that a successful application is one that people *want to use* and *tell their friends about*.  The key to delivering this?  Making our **user** awesome:

> "People aren't using the app because they like the app or they like you. They're doing it because they like themselves."

Kathy argues that users will endure less than perfect design, or technical implementation *if the app makes them more awesome* at the task at hand.

For developers, the key take-away is that we need to be constantly thinking about how we can empower our users.

## How BDD Can Help

BDD sits at the cusp of user experience and development, as it forces us to frame the software we're developing in the context of the user.

It helps us step back from the technical implementation and focus on these questions:

1. Who am I?
1. What can I do?
1. What benefits can I derive from my action?

A common template for defining this is:

{% highlight text %}
As a <role>
I want <feature>
So that <value>
{% endhighlight %}

This template also accounts for scenarios where the role is not a user, but rather a system or process (for example, an API).

## An Example

To illustrate how we can transition from user-centered design thinking to writing test code and developing our application, we're going to walk through an example from [Connect](/connect/); a social application that helps users connect with each other based on common interests and location.

Let's imagine that we've built most of the app, but are yet to develop one of the most important features: filtering users by interests.

Using the pattern defined earlier, we might describe this feature as:

{% highlight text %}
As a standard user
I want to filter users by their listed interests
So I can find users who have similar interests to my own
{% endhighlight %}

### Feature Files

BDD can be segmented into two parts: the feature file, where we describe the behaviour we are going to build, and the code (in our case Python) where we test our application.

First we'll need to write our feature file.  Feature files use the [Gherkin syntax](http://pythonhosted.org/behave/gherkin.html#gherkin-feature-testing-language) and are saved as `<featurename>.feature`:

<p class="code-heading">example.feature</p>
{% highlight gherkin %}
Feature: feature name
  description
  further description

  Background: some requirement of this test
    Given some setup condition
      And some other setup action

  Scenario: some scenario
      Given some condition
       When some action is taken
       Then some result is expected
{% endhighlight %}


#### Lines 1-3: Defining the Feature

Technically, only the feature name is required here.
However, I also like to describe the feature using the `As a, I want, So that` pattern established earlier.
This keeps our user's needs front of mind.

#### Lines 5-7: [Setting Up the Background](http://pythonhosted.org/behave/gherkin.html#background)

A feature's `Background` outlines the contextual information we need for the scenarios that follow.
For our example, we're going to need `Interests` and `Users` in the database so we can filter our users.

Not all features will require a background, so this section is entirely optional.

#### Lines 9-12: [Writing Scenarios](http://pythonhosted.org/behave/gherkin.html#features)

Finally, we outline the different scenarios our users might face.

For our example, we need to consider what will happen when the user filters by one, or multiple interests.  We also need to account for when there are no users that match the request.

Each Scenario contains three types of steps:

* `Given`: Defines the state of the system
* `When`: Defines the action the user or system wants to take
* `Then`: Defines the outcome of the action

More complex scenarios can also include `And` or `But` keywords.  _For example_:

<p class="code-heading">activate_account.feature</p>
{% highlight gherkin %}
Scenario: Activate account
    Given I am a standard user
    But I have not yet activated my account
    When I visit my account activation page
    And I fill out the form
    But I forget to confirm my password
    And I submit the form
    Then I see an error
{% endhighlight %}

### Putting It All Together

Here's our `filter users` feature written as a Gherkin feature file:

<p class="code-heading">filter_users.feature</p>
{% highlight gherkin %}
Feature: Filter users by interest
As a standard user
I want to filter users by their listed interests
So that I can find users who share my interests

Background: There are interests and users in the system
    Given there are a number of interests in the database
    And there are many users in the database, each with different interests

Scenario: Filter users by one interest
    Given I am a logged in user
    When I filter the list of users by a single interest
    Then I only see the users with that interest

Scenario: Filter users by multiple interests
    Given I am a logged in user
    When I filter the list of users by multiple interests
    Then I see the users with those interests

Scenario: No result
    Given I am a logged in user
    When I filter the list of users by an interest that no-one has listed
    Then I see no users
{% endhighlight %}

#### Refactoring

You've probably noticed that our scenarios use a common pattern.  They're also a little vague.
To fix this we can include more context in our `Background` and refactor our three scenarios into one `Scenario Outline`:

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

First we define the interests and users in the background using tables.  This makes our data easy to read, whilst providing hooks that we'll use later in our Python code.

Next, we compile our scenarios into one `Scenario Outline`, specifying the skills and number of users based on the information defined in our new `Background`.
When we run our tests, a `Scenario` will be created out of each (non heading) line in the example table.  So, the first line would become...

{% highlight gherkin %}
Given I am a logged in user
When I filter the list of users by Django
Then I see 2 users
{% endhighlight %}

... and so on.

## Conclusion

That's it!  We've defined our feature and written our feature file!

In the [next post](http://whoisnicoleharris.com/2015/03/19/bdd-part-two.html) we'll explore how we can write Python code to utilise our feature file and run it as an automated test.
