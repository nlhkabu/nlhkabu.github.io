---
layout: post
colors:
    default: 69b754
    dark: 52a93b
    light: aed2a4

title: 2014&#58; My Year of Python
summary: At the end of 2013, I decided that 2014 would be my year of Python.  It's been a difficult but rewarding journey.
---

At the end of 2013 (and after much convincing from [ojh](https://github.com/ojh)), I decided to make 2014 my 'year of Python'.  I chose a year because I felt that would be enough time to get involved to see if I liked the work and the community - and make a decision as to whether Python (and web development in general) is for me.

Here's what I did, what I've learnt and where I'm going:

## Community

### PyLadies

I was disappointed that there wasn't an active Pyladies Australia - so (with some encouragement from the Pyladies mothership) I decided to form one myself.  I set up a [website](http://australia.pyladies.com/) and mailing list to which 30+ women have registered, which is a great starting point.  I had hoped that I would find a whole heap of other women interested in helping out (running workshops, etc.), but people are busy (!) so at this stage things are fairly dormant.  Being in Bendigo, I can't personally run local workshops (I just don't think there would be any interest here), so that's been a bit of a sticking point.  Circumstances also meant that I couldn't attend PyCon Australia, which was a missed opportunity to meet people and get stuff happening.

At this stage I feel that the only way PyLadies Australia is going to move forward is if I put in a huge amount of personal time and energy - something I have to weigh up the benefits of.

### Pycon Australia

This year I also volunteered to design the PyCon Australia 2014 logo and website.   This was to be my first significant contribution what I thought would be an open-source project - though, unfortunately, the software the site is built upon is private.

#### What Worked

The process of putting together the logo was fairly straightforward as I had total creative freedom in this respect.  The website itself was first designed in HTML, CSS & JS and then integrated into the CMS - a system that worked really well.

#### What I'd Do Differently

In the end the branding was a bit all-over-the-place, as I didn't have oversight on all visual materials.  It would have been nice to have a list of *all* of the places the logo would be used to make sure everything was visually coherant.  For example the logo on the slide templates really should have sat on a white background.

New pages to the website were published without being checked first, which sometimes meant we had non-responsive elements thrown into the page content.  Some kind of design-review-before-publish mechanism may have been helpful.

I would have also liked some more time to put together a better layout for the conference schedule as this didn't work on mobile at all.

Finally, as mentioned earlier, personal circumstances meant that I didn't actually get to attend PyCon, which was a real let down - next time I'd definitely like to be there!

Overall, I'd say that my interactions with the Python community have been positive and I am keen to continue to meet people and share my skills.

## Code

My main project for the year was [Connect](/connect) -  a web application written in Django that helps people connect with each other based on interests and location.

My inspiration for the project was PyLadies Australia - as the women who expressed an interest in participating were located all across the country.  Quickly though, I realised that Connect could be used internationally and for a number of different community groups and organisations.

On a professional front, our business also completed two projects for [BPCLEtool](/bpcletool), for which I was able to contribute small amounts of Python code.

Working with Django has been an absolute delight and I am really starting to appreciate the 'Pythonic' way of doing things.  Having a community consensus on what constitutes good code is *immensely* helpful. Much of the syntax seems naturally logical and I like the way that Django encourages modular, structured code.

## Learning How I Learn

I am well aware that learning Python via Django is a bad idea - but I've learnt that coding exercises like Katas don't really do it for me.  Fundamentally, my reason for learning Python is not to just learn Python - it's to build stuff!  For myself, or for other people.

I think I've always known this, but this year has really put that into focus for me.  I learn best by trying things - breaking things - then fixing things.  On several occasions I tried *really* hard to do tutorials, read books, or follow videos - but unless they were really engaging, well written (I'm looking at you official Django tutorial), or REALLY pertinent to the issue at hand, I often petered out.  Fundamentally, my motivation wanes if I don't have some kind of creative input into what I'm doing.  Also - I *like* problem solving.  I *like* searching for the answers.  And I *like* reading about different perspectives on the same problem.

So, in searching for answers, here are some of the resources I've found most valuable:

### [The Official Django Tutorial](https://docs.djangoproject.com/en/1.7/intro/tutorial01/)

This seems pretty obvious, right? Apparently not. The number of people on IRC asking basic questions in #django without having done the official tutorial is pretty surprising. I suppose that might be because other frameworks and resources are not nearly as well documented as Django. I think the tutorial is great - it finds a good balance between not too complex and not too simple. Also - (unlike many other tutorials) I found once I had finished, I could actually go and BUILD something. In fact, when I was first starting out, I'd often refer to the tutorial instead of the docs, because I knew where the information I was looking for was located.

### [Test-Driven Development with Python](http://chimera.labs.oreilly.com/books/1234000000754)

Even though I've found that tutorial-books aren't my ideal learning tool, there is enough helpful content here to make following along worthwhile.  There are lots of code examples (which I love) and the author does a really good job of selling the benefits of TDD.

### Two Scoops of Django

We've had this floating around the house for a while and though it was a bit much to take in when I first started, it is a great resource to come back to.  I'm quite keen to get into good habits, so am constantly trying to learn about best-practices.  It's hard to find this kind of information online (because everybody has their own opinion), so it's nice to have it bundled up and presented from well respected members of the Django community.

### [Secrets of the Testing Masters](http://pyvideo.org/video/2244/secrets-of-the-testing-masters)

The first half of this talk was a real revelation for me - as I was stuck on how to test [Connect](/connect) without getting lost in fixtures.  Hello [FactoryBoy](https://factoryboy.readthedocs.org/)! :D

This is just my favourite of *many* videos I have watched on [pyvideo](http://pyvideo.org/) which is an AMAZING resource.

## The Future

I'm certainly keen to keep learning and engaging with the Python community.  I'd like to see more mentoring going on, which I hope [Connect](/connect) can help with.  Personally, I'd like to offer my skills and knowledge to help others - not only because I feel this is a great way of giving back, but also because this will help me to cement my knowledge.

On a technical front, I'm currently exploring all manners of techniques and strategies for testing - at the moment that means BDD with [behave](http://pythonhosted.org/behave/).  I'm excited and optimistic about my future with Python.
