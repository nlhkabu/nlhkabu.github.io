---
layout: post
colors:
  default: 006DAD
  dark: 005d92
  light: 669dbd

title: "EuroPython Keynote - PyPI: Past, Present and Future"
summary: Slides, notes and resources from my 2018 EuroPython keynote.
comments: 'off'

---

In July 2018, I was honoured to keynote at [EuroPython](https://europython.eu/) - the largest European conference for the Python programming language, with over 1,100 attendees.

My talk explored the past, present and future of the [Python Package Index](http://pypi.org) (PyPI), a project [I have been working on](https://whoisnicoleharris.com/warehouse/) for approximately 3 years. This post documents the video, slides, links, resources and statistics resulting from that presentation.

I would like to thank the organisers for the opportunity to present, and the audience for their warm response.

## Video

<figure class="img-figure centered">
    <div class='embed-container' style="padding-bottom: 56.25%">
      <iframe src="https://www.youtube.com/embed/scum5a_mqBc?rel=0" frameborder="0" allowfullscreen></iframe>
    </div>
    <figcaption>Or watch on <a href="https://www.youtube.com/watch?v=scum5a_mqBc">YouTube</a></figcaption>
</figure>

## Slides

<div class="embed-container" style="padding-bottom: 66.4%;">
  <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRw88JQz20Um5wOZhhHVWSSK-LhHUmwm6Ux2IiqFMwg98pZye3NNr8Y62eSsXAmn-EWOYi6pF2gKjQC/embed?start=false&loop=false&delayms=60000"
  frameborder="0" width="750" height="591" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</div>

## Links and Resources

### On Python Packaging

- [Python Packaging Working Group](https://wiki.python.org/psf/PackagingWG/Charter): a sub-body of the PSF dedicated to raising funds to advance the state of Python packaging. You can [donate to this group here](https://donate.pypi.org).
- [Python Packaging Authority](https://www.pypa.io/): a group of developers who maintain major Python packaging projects (including PyPI). This group also maintains the [Python Packaging User Guide](https://packaging.python.org/) which is the authoritative guide to Python Packaging. PyPA projects [can be found on GitHub](https://github.com/pypa/). There is also a really interesting [history of Python Packaging](https://www.pypa.io/en/latest/history/) in the PyPA documentation.

### On PyPI / Warehouse

- [pypi.org](https://pypi.org): the web interface for the Python Package Index
- [Warehouse](https://github.com/pypa/warehouse): the codebase currently powering PyPI. If you'd like to contribute, please visit our [issue tracker](https://github.com/pypa/warehouse/issues). Issues set aside for new contributors [are found here](https://github.com/pypa/warehouse/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22).
- [PSF announcement of MOSS award](http://pyfound.blogspot.com/2017/11/the-psf-awarded-moss-grant-pypi.html): Details of the award from Mozilla that funded Warehouse development between Dec 2017 and May 2018.
- [Powering the Python Package Index](https://caremad.io/posts/2016/05/powering-pypi/): an article from Donald Stufft (PyPI / Warehouse maintainer) that discusses what it takes to power PyPI. This article is now slightly out of date (as the figures have grown over the past two years), but is still a very interesting read.
- ["A new package index for Python"](https://lwn.net/Articles/751458/): LWN.net article from Sumana Harihareswara (Warehouse project manager) covering the past, present and future of PyPI.
- ["Markdown Descriptions on PyPI"](https://dustingram.com/articles/2018/03/16/markdown-descriptions-on-pypi): article from Dustin Ingram (PyPI / Warehouse maintainer) on the steps required to enable Markdown on your PyPI project descriptions
- I have also published a number of articles about the Warehouse project, covering [design objectives](https://whoisnicoleharris.com/2015/12/31/designing-warehouse-an-overview.html), [user testing](https://whoisnicoleharris.com/2018/03/13/user-testing-warehouse.html), [accessibility](https://whoisnicoleharris.com/2018/05/17/warehouse-accessibility.html) and [user research](https://whoisnicoleharris.com/2018/07/22/pypi-user-research.html)


## Statistics

I used [infogram](https://infogram.com) to generate the graphs for my presentation. Happily, these can also be embedded:

<div class="infogram-embed" data-id="4e7b0b39-4b7c-4cdf-81c6-6c425be6f1a1" data-type="interactive" data-title="Bar Chart"></div><script>!function(e,t,n,s){var i="InfogramEmbeds",o=e.getElementsByTagName(t)[0],d=/^http:/.test(e.location)?"http:":"https:";if(/^\/{2}/.test(s)&&(s=d+s),window[i]&&window[i].initialized)window[i].process&&window[i].process();else if(!e.getElementById(n)){var a=e.createElement(t);a.async=1,a.id=n,a.src=s,o.parentNode.insertBefore(a,o)}}(document,"script","infogram-async","https://e.infogram.com/js/dist/embed-loader-min.js");</script><div style="padding:8px 0;font-family:Arial!important;font-size:13px!important;line-height:15px!important;text-align:center;border-top:1px solid #dadada;margin:0 30px"><a href="https://infogram.com/4e7b0b39-4b7c-4cdf-81c6-6c425be6f1a1" style="color:#989898!important;text-decoration:none!important;" target="_blank">Bar Chart</a><br><a href="https://infogram.com" style="color:#989898!important;text-decoration:none!important;" target="_blank" rel="nofollow">Infogram</a></div>

## Images

Thanks to [Alina Cristea](http://alinacristea.daportfolio.com/), the official conference photographer, for taking the following images:

<figure class="img-figure">
    <img src="/assets/img/europython1.jpg" alt="On stage, presenting"/>
    <figcaption>Image by Alina Cristea. <a href="https://www.flickr.com/photos/alina-cristea/42945163604/in/album-72157697856140041/">View on Flickr</a></figcaption>
</figure>

<figure class="img-figure">
    <img src="/assets/img/europython2.jpg" alt="On stage, presenting"/>
    <figcaption>Image by Alina Cristea.</figcaption>
</figure>


## Thanks!

I'd like to extend a big thank you to the following people:

- The EuroPython organising team for giving me the opportunity to present
- [Ee W. Durbin III](https://twitter.com/EWDurbin), [Dustin Ingram](https://twitter.com/di_codes), [Donald Stufft](https://twitter.com/dstufft) and [Sumana Harihareswara](https://twitter.com/brainwane) for digging up facts and figures for my presentation and for being great co-contributors on the Warehouse project
- [Aina Requena Lafuente](https://twitter.com/ainarela) for the lovely illustrations
- My colleagues at PeopleDoc for reviewing my presentation
- All packaging contributors - past, present and future :)

## Addendum (6th Aug, 2018)

Since presenting my keynote, [Ee](https://twitter.com/EWDurbin) has dug up some more information on PyPI's history, so I thought I'd share it here:

1. The original Python Package Index was born on Friday, the 1st of November 2002, with both the original commit and first package uploaded on that day. The first upload was for the [roundup](https://pypi.org/project/roundup/) project - the codebase that still powers [bugs.python.org](http://bugs.python.org/)
2. The Index was moved from the "Dinsdale" server in Holland to the Oregon State University Open Source Lab on the 14th of August, 2012

Thanks Ee!
