---
layout: post
colors:
  default: 006DAD
  dark: 005d92
  light: 669dbd

title: User Testing Warehouse
summary: Warehouse is the the next generation Python Package Index. I recently conducted a series of user tests on the management user interface. This article explores what user testing is, how we applied it and what I'm hoping to do next.
comments: 'on'

---

User testing is a user experience methodology that places the user at the center of design decisions. UX professionals conduct user tests to challenge their design concepts and validate that the UI works as they intended.

User tests typically involve asking a target user to carry out a series of real world tasks on the UI. Testers can then identify problems in the UI - where the user gets lost or confused, or can't work out how to complete the assigned task.

Any identified problems can then be raised as design issues for the team to fix.

## User Testing Warehouse

It [had always been my intention](http://whoisnicoleharris.com/2015/12/31/designing-warehouse-an-overview.html) to run user tests on the [Warehouse project](https://pypi.org/), but it wasn't until the project [received MOSS funding](http://pyfound.blogspot.co.uk/2017/11/the-psf-awarded-moss-grant-pypi.html) that I was able to dedicate the amount of time required to set up and conduct these tests.

Having recently completed the pages for logged in users (account settings, manage projects, etc.) these pages seemed like the best candidates for our initial round of testing.

The test I constructed was simple: asking users about their current use of PyPI, then requesting them to complete a series of tasks on the new management pages. For the test, I recruited users who were package owners or maintainers - i.e. people who had experienced the old user interface and who would understand my instructions.

Over three weeks, I ran tests with six different users, with each test taking between 25 minutes and one hour, the duration depending on how much the test subject had to say.

As expected, the tests highlighted a number of problems in the UI, which in turn prompted me to open or tag [20 issues](https://github.com/pypa/warehouse/issues?q=is%3Aissue+label%3A%22user+testing%22) in our issue tracker. The vast majority of these tickets are simple changes that have been tagged as [good first issues](https://github.com/pypa/warehouse/issues?q=is%3Aissue+label%3A%22good+first+issue%22) - which should in turn help with our efforts to reach out to new contributors.

Several of the test participants also raised new ideas, for which I will open new tickets soon.

In total, this round of testing took 15 hours - encompassing writing the testing script, recruiting users, running the tests, and opening related tickets.

A big thanks to Ee W. Durbin III, Nicolas Dubois, Łukasz Langa, Russell Keith-Magee, Alex Chan and Eliot Berriot for participating in these tests.

## Next Steps

From this intial program it is clear that user testing can bring value to the Warehouse project. The challenge is to continue to conduct such tests once our MOSS funding is depleted.

Fortunately, the Python community is engaged with the project, and, so far, we've had no problems recruiting test participants. Usability experts [recommend a minumum of 5 users per test](https://www.nngroup.com/articles/how-many-test-users/), so as long as this goodwill continues, I don't anticipate running out of test subjects.

On the other hand, setting up and running user tests takes time; and it would be nice to have some help with this to lighten the workload (and increase our testing bus factor). For this reason, today I've put out a call to [train up to three people on how to conduct and run user tests](https://gist.github.com/nlhkabu/a0b1ae0016a2641f6b79d9ace9110403). My hope is that this opportunity will be taken by students (or UX enthusiasts) as a way to build their experience by working on a live, widely used application.

Should this program be successful, I'd like to start group testing the [project detail page](https://pypi.org/project/Flask/) in the coming weeks. This page is the most important on the site, and coincidentally, the page we've also received the most feedback about.

With more funding, it would be possible to extend our testing further to encompass testing the UI for accessibility and internationalisation.

## Get Involved

So, how can you help?

Firstly, if you are a developer, please consider contributing to [Warehouse](https://github.com/pypa/warehouse). Right now, we have lots of tickets marked as [good first issues](https://github.com/pypa/warehouse/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) in our [issue tracker](https://github.com/pypa/warehouse/issues). Because of our MOSS funding, we are also able to be more responsive to your questions and provide you with more support to [get started](https://warehouse.readthedocs.io/development/getting-started/). If you're planning on attending PyCon North America, or EuroPython, our team is planning on running [conference sprints](https://wiki.python.org/psf/PackagingSprints) - this is a great opportunity to hack with members of the team and work with others on the project.

**If you are interested in learning how to _conduct_ user tests**, please [fill out this form](https://goo.gl/forms/vdqr14IzHwIQLfAc2). If you have any questions about what's involved, you can also email me directly at n.harris[at]kabucreative.com.

Finally, **if you'd like to volunteer to be a test _participant_**, please [fill out this form](https://goo.gl/forms/KsgCZKWRHPS572gp2).
