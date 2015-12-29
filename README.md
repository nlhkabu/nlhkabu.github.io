# Source for WhoIsNicoleHarris.com

<img src="https://travis-ci.org/nlhkabu/nlhkabu.github.io.svg?branch=master" alt="CI status"/>

This website is built with [Jekyll](http://jekyllrb.com) and hosted on Github Pages.

## Writing Style

A few rules to keep things consistent:

1. All titles should be in [Title Case](http://www.grammar-monster.com/lessons/capital_letters_title_case.htm). If you are not sure, use [this website](http://titlecapitalization.com/) selecting 'Chicago Manual of Style'.

2. Always use an ampersand (`&`) instead of 'and' in titles

3. Unless a list item contains a full sentence, do not add a full stop at the end, i.e.:

```
# OK
- Posting data directly to the view. This allows us to check for errors using `assertFormsetError`.

# Bad
- My list item.
 ```

## Adding New Projects

New projects should be added to the `_projects` folder, named as `<slug>.md`.  Available front matter:

```yaml
---
layout: project
colors:
  default: <hex code for banner - do not include a hash symbol>
  dark: <hex code for nav - do not include a hash symbol>
  light: <hex code for borders - do not include a hash symbol>
title: <page title>
skills: [<skill 1>, <skill 2>] # e.g. HTML, UI, Django, etc.
summary: <descriptive text used for project introduction and meta description>
feature_image:
    small: /assets/<image name>.png # For screens smaller than 400px
    medium: /assets/<image name>.png # For screens smaller than 700px
    large: /assets/<image name>.png # For screens larger than 700px
site_url: <absolute path to live site url>
github_url: <absolute path to source code url>
priority: <Integer between 1 and 5> # 1 == important.  Determines ordering of projects on Homepage
sections: # Each section is separated by horizontal padding and borders - use these instead of content
- |
  ## <title of a section>
  <markdown of a section>
- |
  ## <title of the next section>
  <markdown of the next section>
---
```

## Adding Blog Posts

New posts should be added in the `_posts` folder, named as `<publish year>-<publish month>-<publish date>-<slug>.md` Available front matter:

```yaml
---
layout: post
colors:
  default: <hex code for banner - do not include a hash symbol>
  dark: <hex code for nav - do not include a hash symbol>
  light: <hex code for borders - do not include a hash symbol>
title: <post title>
summary: <descriptive text used for post introduction and meta description>
comments: <status> # Set to 'on' to enable disqus comments.  Otherwise omit.
---

<markdown content here>
```

## Editing the Homepage
`index.html` can be edited directly.  Available front matter:

```yaml
---
layout: default
title: <post title>
summary: <descriptive text used meta description>
learning: <description of what I'm currently learning> # e.g. Behavior Driven Development with <a href="http://pythonhosted.org/behave/">behave</a>
---
```
## Special Layouts

To add a note, use:

```html
<div class="note-header">
    <i class="fa fa-exclamation-circle"></i>
    Note
</div>
<div class="note">
    <p>Note content goes here.</p>
</div>
```

To add an image figure:

```html
<figure class="img-figure">
    <img here/>
    <figcaption>Caption here.</figcaption>
</figure>
```

To add a code block, inside a figure:

```html
<figure>
    <figcaption>filename</figcaption>
    {% highlight python linenos %}
      Your code here - be sure to check the indentation!
    {% endhighlight%}
</figure>
```

## Adding New Decorative Images

New (randomly selected) images can be added to the banner by:

* Adding the image to `/assets/banner-images` in svg format
* Adding the image name to the `images` array in `js/main.js`
* Adding image specific styling in `_sass/_banner_images.scss`

## Serving Locally

```bash
$ bundle exec jekyll serve
$ bundle exec jekyll serve --drafts # Serve articles in drafts folder
```
