---
layout: project
colors:
    default: 006DAD
    dark: 005d92
    light: 669dbd

title: Warehouse - The Future of PyPI
skills: [UI, Visual Design, CSS/SCSS]
summary: Warehouse is the next generation Python Package Repository, designed to replace the legacy code base that currently powers PyPI.
feature_image:
    small: /assets/img/warehouse-small.png
    medium: /assets/img/warehouse-medium.png
    large: /assets/img/warehouse-large.png

links:
-   url: http://pypi.org
    text: Visit Site
-   url: https://github.com/pypa/warehouse
    text: View source on GitHub

priority: 1

sections:
-   |
    ## The Problem
    In mid-2015, I took on a new role within the Python community - redesigning [Warehouse](https://warehouse.python.org/) (the new PyPI), a project due for public release in 2018.

    It's an exciting project, with lots of questions to address, including:

    - How should we update PyPI's visual identity?
    - How can we ensure the UI is accessible for all Python community members?
    - What devices and browsers should we support?
    - How should we challenge and validate design decisions?

-   |
    ## The Solution

    There has been a huge amount of work done so far, and there is still [lots more to do](https://github.com/pypa/warehouse/issues).  Here's what we have come up with so far:

    #### Designing the Visual Identity

    PyPI's visual identity has been overhauled to reflect a modern, clean, minimalist aesthetic. [Olivier](https://ojh.github.io/) designed a [new logo](https://warehouse.python.org/static/images/logo-small.png) to represent the Warehouse project and capture the spirit of the redesign. The result is a much stronger brand identity that has pushed the project into the 21st century.

    #### Making the UI Accessible

    I've paid a lot of attention to making sure that the UI works for every Python community member who visits the site. For users with poor eyesight, I've chosen clear, high contrast colours and large font sizes. I also wanted to make sure that the site worked well for users who use screen readers. For this, I contacted [Xavier Dutreilh](http://xavier.dutreilh.com/), who presented a great talk about accessibility at [DjangoCon Europe](http://whoisnicoleharris.com/2015/06/15/my-first-djangocon.html). Xavier generously agreed to audit the site, resulting in a clear set of [planned accessibility improvements](https://github.com/pypa/warehouse/labels/accessibility).

    #### Device &amp; Browser Support

    Of course, accessibility in 2018 also means supporting users on a huge variety of devices and browsers. At the moment, very few PyPI users browse the site on their phones or tablets - but we expect this may change now that the new design has full device support via responsive CSS break points. We're also going to (at least in the short term) continue support for Internet Explorer <strike>8</strike> 9, as we have a number of users, primarily in China, still using this browser. See [this issue](https://github.com/pypa/warehouse/issues/979) for more information.

    #### Validating Design Decisions

    Feedback from the Python community has been overwhelmingly positive and many users are very excited about the new design. That said, validating design is not just about public opinion; it's about *testing* the design with a range of users and use cases.  For this reason, we're planning on conducting a series of usability tests with a range of Python users; from complete beginners to long time users. So stay tuned in 2018!

-   |
    ## Addendum: Warehouse Launched April 2018

    After almost 3 years working on the Warehouse project, I am pleased to write that the new codebase was launched to the public on April 16, 2018, after a short beta period. The legacy codebase powering PyPI was shutdown shortly thereafter.

    I continue to contribute to the project as often as I can. Articles (and presentations) on my more recent activity can be found [on my blog](https://whoisnicoleharris.com/#writing).
---
