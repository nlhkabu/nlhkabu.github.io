---
layout: post
colors:
  default: 006DAD
  dark: 005d92
  light: 669dbd

title: Accessibility on Warehouse (PyPI)
summary: On Global Accessibility Awareness Day it's a good time to reflect on how we approach accessibility on the Python Package Index.
comments: 'on'

---

This year [Global Accessibility Awareness Day](http://globalaccessibilityawarenessday.org/) is being marked on May 17th. The purpose of this day is to raise awareness about digital inclusion - and how people who work in the digital space can ensure their software works for the largest possible group of users.

Accessibility is an important subject; as a digital designer, it is my responsibility to do everything that I can to design solutions that include, rather than exclude, users.

On the Python Package Index, accessibility has been baked into the design from the beginning: from the selection of high-contrast colors, to the large default text size, to the way that our HTML markup is structured. However, like everything, meeting accessibility standards and including all users regardless of their impairments is an *ongoing* task that will never be complete.

To that end, earlier this year, I contacted [Axcess Lab](http://axesslab.com/) to ask if one of their team members would be interested in dedicating some of their awesome [open-source project time](https://axesslab.com/paying-open-source/) to the Python Package Index. Lucky for us, [Mattias](https://github.com/JazzBrotha) volunteered to assist, and has since completed an accessibility audit on [pypi.org](https://pypi.org) (thanks Mattias!!!).

You can [read the full audit here](https://drive.google.com/file/d/0B523GRwFhk7BMDNZUnJVQzJXZ1RpdjFfb1l0a3NMRnprX0Jr/view?usp=sharing), a few highlights:

## What we're doing well

Mattias noted font size, color contrast, outline design and the uncluttered UI as positive accessibility attributes.

Our form design is helpful for users using screen readers, while visually impaired users are able to zoom the interface without loss of function.

On mobile, the whitespace we provide between elements helps users with motor impairments scroll the page.

## Improvements

There are still a few things we can do to make the user experience better for all:

- Redesigning the line length of our text, for [optimal readability](https://baymard.com/blog/line-length-readability)
- Removing italic styles, as these can be difficult to read for people with reading impairments
- Reconsider our use of disabled buttons, [because they suck](https://axesslab.com/disabled-buttons-suck/).
- Underlining links
- Increasing the clickable areas of some elements
- Adding [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) where needed
- Improving the way some of our forms work, particularly for people using screen readers

## Next steps

I have started opening tickets on the [project issue tracker](https://github.com/pypa/warehouse/issues?q=is%3Aopen+is%3Aissue+label%3Aaccessibility) to address each of these issues, and will begin working through these in the coming months.

I will also be running a PyPI sprint at [EuroPython](https://ep2018.europython.eu/en/) this year, so hope that any remaining issues can be addressed at this time.

## How you can help

If you are a [PyPI](https://pypi.org) user and notice an accessibility issue on the site, please report it [via our issue tracker](https://github.com/pypa/warehouse/issues/new). We take these issues seriously, so will try our best to respond as soon as possible.

If you are a developer, and would like to help make the Python ecosystem a more friendly and welcoming place, we'd love you to make a PyPI PR addressing an [accessibility issue](https://github.com/pypa/warehouse/issues?q=is%3Aopen+is%3Aissue+label%3Aaccessibility). We do our best to support new contributors - just comment on the issue you'd like to work on, and let us know if you need any help

## Addendum - 21st July 2018

The [Python Packaging Working Group](https://wiki.python.org/psf/PackagingWG/Charter) continues to seek funding to improve PyPI. With more funding, the team aims to make the accessibility improvements highlighted by this audit, as well as identify and address other accessibility issues. To donate to the working group, visit [donate.pypi.org](http://donate.pypi.org/) - donations can be made on a single, or recurring basis. Every donation is appreciated!
