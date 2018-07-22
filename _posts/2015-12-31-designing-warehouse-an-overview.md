---
layout: post
colors:
  default: 006DAD
  dark: 005d92
  light: 669dbd

title: Designing Warehouse - An Overview
summary: This is the first in a series of posts exploring the redesign of Warehouse - the replacement codebase for the Python Package Index (PyPI).
comments: 'on'

---
For the last six months, I have been working with the Python Packaging Authority (PyPA) to design [Warehouse](https://warehouse.python.org/) - the new [codebase](https://github.com/pypa/warehouse) that will soon replace the [Python Package Index](https://pypi.python.org/pypi) (PyPI).

This article is an attempt to explore our objectives and challenges, provide an overview of our activities so far, and engage the wider Python community to help us move forward.

## Our Goals

When [Donald](https://github.com/dstufft) (our lead developer) and I first talked about the project, he had some very clear objectives for the redesign:

- To update the visual identity
- To make packages more discoverable; and
- To look after *both* kinds of users, namely, users *and* package maintainers

To this list, I added a two of my own objectives:

First; to give the project the same level of professionalism as a commercial project of the same scale.

Second; to ensure that the user experience reflect the Python community that I know - a community that is welcoming, helpful and inclusive.

## What We've Done

So now you see our goals, let's take a look at the solution we've come up with so far.

### Making the UI Welcoming

Python is used by many community and educational organisations to introduce newcomers to programming.  By extension, PyPI might be the first package manager that some of our users have ever seen.  This is a big responsibility, but also an opportunity to make a small part of the learning journey easier.

In designing the user interface, I tried to make no assumptions about prior knowledge. Don't know what pip is?  That's ok - we'll link you to the appropriate help section.  Not sure what to do with an MD5 hash?  No worries - there's a help popover for that.

The colours, fonts, text sizes and spacing were also designed to be large, friendly and accessible (we'll talk more about accessibility later) - all in an attempt to make new coders comfortable with the tool at hand.

Now - you might be thinking - "but most PyPI users are *not* beginners, so why design for them?"  The answer is simple: a site designed for beginners can be used by everyone; a site designed for experts may alienate and confuse beginners. Of course, getting this right is a challenge, so we'll be usability testing the design to find a balance that works for users of all experience levels.

### Helping Users Overcome Obstacles

To ensure that *all* of our users are getting the most out of PyPI, it's not enough just to design an interface - I needed to look at the whole user experience. This meant thinking about an individual's experience moving through the site, and asking myself:

- Where could our users be getting 'stuck'?
- How can I help them on their way?

Not only did this mode of thinking influence a lot of my *interface* design decisions, it also led me to explore the documentation resources that are currently available.

Currently, the [Python Packaging User Guide](https://packaging.python.org/en/latest/) is the authoritative resource on Python packaging.  Unfortunately, it is not linked to from PyPI itself; and while the content is of very high quality, the tutorials are written through the lens of a more experienced Pythonista. I wanted something with a much lower threshold... something that would really hold the user's hand when they got stuck.

In October I put out a call for help writing two new tutorials to help beginners; one for users who have never installed a package, and one for users who want to upload their first package to PyPI. My hope was that I'd attract a couple of technical writers to the project, but after an incredible response from the Python community (and consulting with [Marcus](https://github.com/qwcode) and the PyPA team) we've settled on something more ambitious: to edit the current packaging guide to include new tutorials, while improving and extending the documentation in general.

Our goal is to complete this work by early 2016 to coincide with the launch of the new Warehouse codebase. This will facilitate extensive linking between the two resources,  and dramatically improve the overall user experience.

## Ensuring the Site Is Inclusive

The final piece of the puzzle is ensuring that the site is usable and accessible for *all* of our community members, whether they are using a phone, screen reader or an old, unpopular browser.

This has resulted in a number of technical decisions; the first (and most obvious) is that the design supports a range of devices via responsive media queries.  We're also going to (at least in the short term) continue support for Internet Explorer <strike>8</strike> 9, as we have a number of users, primarily in China, still using this browser. See [this issue](https://github.com/pypa/warehouse/issues/979) for more information.

On the accessibility side, the project has already benefited from one audit from [Xavier Dutreilh](http://xavier.dutreilh.com/) and we are looking forward to another before the site launches. Planned improvements include the addition of ARIA roles to the HTML, a 'skip to content' link, as well as better labeling of form fields for screen readers.

Lastly, Donald is introducing both localisation and internationalisation to the codebase. Currently PyPI is very US centric - supporting US English and US formats only. We're very excited to be updating the user experience to better support Python users from all over the world, and will be calling for volunteers in early 2016 to assist us in this activity.

## How You Can Help
So what's next?  And importantly - how can you help?

### Contributing Code

We have a huge amount of work to complete before launching Warehouse, and would love to see some new faces working on the project. If you have skills in Python, HTML, SCSS, or JavaScript, then please check out the [open issues](https://github.com/pypa/warehouse/issues) on the issue tracker.  Thanks to Donald's hard work, the project itself is [easy to set up](https://warehouse.readthedocs.org/development/getting-started/) and [extensively documented](https://warehouse.readthedocs.org/).  If you've never contributed to an open-source project before, or are new to web development, we'd love to accept your first pull request! We have labelled a number of issues on the issue tracker as ['easy'](https://github.com/pypa/warehouse/issues?q=is%3Aopen+is%3Aissue+label%3Aeasy) - start here!

### Participating in Usability Testing

As already mentioned, I am planning on running a number of usability testing sessions. The objectives of these sessions is to ask:

- Are the design decisions *really* helping new learners?
- Have I got the balance right for more experienced Pythonistas?
- Is it clear what each page does?
- Can users find help when they need it?

Since making a call for volunteers, over 150 Pythonistas have come forward to participate.  From these, I will ask a variety of users to participate in the tests - the objective being to test with users from different backgrounds and with different levels of Python experience.  If you think that you have a new perspective to bring to this process, please [volunteer here](https://docs.google.com/forms/d/14YJvKOVIzFjXkhUq5y0GnD3FYq4xUuW-oIGypSuvJhQ/viewform).

### Helping Rewrite PyPUG

I'm very excited to report that the work on rewriting the Python Packaging User Guide has already begun, with [Daniel Beck](http://danieldbeck.com/) leading a team of volunteer writers. If you'd like to get involved in this project, please start by visiting [this ticket](https://github.com/pypa/python-packaging-user-guide/issues/194) on the [issue tracker](https://github.com/pypa/python-packaging-user-guide/issues) - Daniel and the team would be excited for your contribution!

### Providing Feedback

Finally, we're planning on installing a widget on the site to gather community feedback.  Perhaps there is something small that is bothering you, but it doesn't justify opening an issue on the issue tracker. Perhaps there is something big, but you don't like issue trackers, or find them difficult or intimidating to use. Perhaps you just want to put an opinion forward.  In all of these cases, please use our widget - we can only better serve the community if we hear from the community!

## Wrapping Up

Warehouse is an exciting, interesting and challenging project to work on, and I'm very pleased to have been able to make a large impact on such an important project for the Python community.

There is still lots to do and many challenges ahead, but I am confident that the final site will deliver significant improvements to the user experience for Python users across the globe.

Stay tuned for my next article which will explore the new design in more depth.

## Update (27th Feb, 2018)

My intention to write a series of posts on this subject was never realised - so instead, here an update on the project (and this article):

- Last year, the PSF's Packaging Working Group applied for and recived a Mozilla Open Source Support grant to focus on Warehouse ([more detail here](https://pyfound.blogspot.com/2017/11/the-psf-awarded-moss-grant-pypi.html)). I'm amongst the group of developers who can now dedicate paid time to focus on getting the new PyPI up to standard and fully replacing legacy PyPI.
- Warehouse is now available to try at [the pre-production site](https://pypi.org).
- There has been lots of great work completed on the [Python Packaging User Guide](https://packaging.python.org/en/latest/) - Warehouse is taking full advantage of this by liberally linking to relevant documentation.
- Instead of installing a feedback widget on the site, we decided to go with prominent links to open new GitHub issues, at least for now.
- There has been a big focus on making it easier to dive into the Warehouse codebase, with [several "good first issue" items](https://github.com/pypa/warehouse/labels/good%20first%20issue) and an [improved "Getting Started" guide](https://warehouse.readthedocs.io/development/getting-started/). Maintainer Ernest W. Durbin III will even [help you with a one-on-one session and give you stickers](https://twitter.com/EWDurbin/status/955415184339849217)!
- After [much discussion](https://github.com/pypa/warehouse/issues/402) we removed localisation and internationalisation functionality from the codebase, but [are working on bringing it back in a sustainable way](https://github.com/pypa/warehouse/issues/1453).
- You can follow [the Warehouse development roadmap](https://wiki.python.org/psf/WarehouseRoadmap) or watch [our rollout board on GitHub](https://github.com/pypa/warehouse/projects/1) to see as we progress towards launch.
