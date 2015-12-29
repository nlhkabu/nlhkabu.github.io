---
layout: project
colors:
    default: 006DAD
    dark: 005d92
    light: 669dbd

title: Warehouse - The Future of PyPI
skills: [UI, Visual Design, CSS/SCSS]
summary: Warehouse is a next generation Python Package Repository designed to replace the legacy code base that currently powers PyPI. Warehouse is due for public release in early 2016.
feature_image:
    small: /assets/img/warehouse-small.png
    medium: /assets/img/warehouse-medium.png
    large: /assets/img/warehouse-large.png

site_url: http://warehouse.python.org
github_url: https://github.com/pypa/warehouse
priority: 1

sections:
-   |
    ## The Problem
    In mid 2015, I took on a new role within the Python community - redesigning [Warehouse](https://warehouse.python.org/) (the new PyPI), a project due for public release in 2016.

    It's an exciting project, with lots of challenges, including:

    - How should we update PyPI's visual identity?
    - How can we ensure the UI is accessible for all Python community members?
    - What devices and browsers should we support?
    - How should we challenge and validate design decisions?

-   |
    ## The Solution

    There has been a huge amount of work done so far, and there is still [lots more to do](https://github.com/pypa/warehouse/issues).  Here's what I have come up with so far:

    #### Designing the Visual Identity

    PyPI's visual identity has been overhauled to reflect a modern, clean, minimalist aesthetic. A [new logo](https://warehouse.python.org/static/images/logo-small.png) has been designed to represent the Warehouse project and capture the spirit of the redesign. The result is a much stronger brand identity that has pushed the project into the 21st century.

    #### Making the UI Accessible

    I've paid a lot of attention to making sure that the UI works for every Python community member who visits the site. For users with poor eyesight, I've chosen clear, high contrast colours and large font sizes. I also wanted to make sure that the site worked well for users who use screen readers. For this, I contacted [Xavier Dutreilh](http://xavier.dutreilh.com/), who presented a great talk about accessibility at [DjangoCon Europe](whoisnicoleharris.com/2015/06/15/my-first-djangocon.html). Xavier generously agreed to audit the site, from which we have plans for [a number of accessibility improvements](https://github.com/pypa/warehouse/labels/accessibility).

    #### Device &amp; Browser Support

    Of course, accessibility in 2016 also means supporting users on a huge variety of devices and browsers. At the moment, very few PyPI users browse the site on their mobile - but we expect this to change, so the new design has full mobile support via responsive CSS break points. We're also going to be supporting all the way back to Internet Explorer 8, as we still have a number of users (primarily in China) using this browser.

    #### Validating Design Decisions

    Feedback from the Python community has been overwhelmingly positive and many users are very excited about the new design. That said, validating design is not just about public opinion; it's about *testing* the design with a range of users and use cases.  For this reason, I'm planning on conducting a series of usability tests with a range of Python users; from complete beginners to long time users. So stay tuned in 2016!
---
