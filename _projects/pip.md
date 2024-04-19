---
layout: project
colors:
  default: 006DAD
  dark: 005d92
  light: 669dbd

title: Python Packaging (pip) UX Research
skills: [UX research, documentation]
summary: pip is a de facto standard command line tool used to install and manage Python packages. Most distributions of Python come with pip preinstalled.
feature_image:
  small: /assets/img/pip-small.png
  medium: /assets/img/pip-medium.png
  large: /assets/img/pip-large.png

links:
  - url: https://pip--10745.org.readthedocs.build/en/10745/ux-research-design/
    text: Read the pip Docs

priority: 2

sections:
  - |
    ## The Problem
    In 2020, the pip team [received funding](https://wiki.python.org/psf/Pip2020DonorFundedRoadmap) to improve pip's user experience, with a particular focus on pip's [dependency resolver](https://pip.pypa.io/en/stable/topics/dependency-resolution/).

    As part of the project, it was neccessary to develop a deeper understanding of:
    * who uses pip
    * how pip compares to other package managers, and supports other Python packaging tools
    * how pip’s functionality is used (and could be improved), and
    * how pip’s documentation is used (and could be improved)

    Given my [previous work in Python packaging](warehouse.md), I was asked to join the [Simply Secure](https://simplysecure.org) UX research team to assist with this work.

  - |
    ## The Solution

    Working as part of the [Simply Secure](https://simplysecure.org) team, I: 

    * Conducted a series of user interviews
    * Designed and published several user surveys, to collect feedback on pip's functionality
    * Published [UX documentation](https://pip--10745.org.readthedocs.build/en/10745/ux-research-design/) to share research outputs and guide future pip contributors

    Recommendations that resulted from my work included:

    * Implementing an `--ignore-conflicts` option when pip experiences dependencies conflicts. [See report](https://pip--10745.org.readthedocs.build/en/10745/ux-research-design/research-results/override-conflicting-dependencies/#recommendations).
    * Deprecating or improving pip's `--force-reinstall` option. [See report](https://pip--10745.org.readthedocs.build/en/10745/ux-research-design/research-results/pip-force-reinstall/#recommendations).
    * Improve pip's `upgrade` functionality to include warnings when conflicts are introduced. [See report](https://pip--10745.org.readthedocs.build/en/10745/ux-research-design/research-results/pip-upgrade-conflict/#recommendations).
    * Improve pip's documentation to better serve pip's users. [See report](https://pip--10745.org.readthedocs.build/en/10745/ux-research-design/research-results/improving-pips-documentation/).
---
