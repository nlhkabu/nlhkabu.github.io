---
layout: post
colors:
  default: 085784
  dark: 024f7b
  light: 4395c4

title: "EuroPython Keynote - PyPI: Past, Present and Future"
summary: Slides, notes and resources from my 2018 EuroPython keynote.
comments: 'off'

---

Earlier this year, the organisers of [EuroPython](https://europython.eu/) asked me if I'd like to present a keynote about the [Python Package Index (PyPI)](http://pypi.org). I, of course, jumped at the opportunity - these are the slides, links, resources and statistics resulting from my presentation.

I will upload the video here once it becomes available. Enjoy!

## Slides
<div class="embed-container" style="padding-bottom: 66.4%;">
  <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRw88JQz20Um5wOZhhHVWSSK-LhHUmwm6Ux2IiqFMwg98pZye3NNr8Y62eSsXAmn-EWOYi6pF2gKjQC/embed?start=false&loop=false&delayms=60000"
  frameborder="0" width="750" height="591" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</div>

## Links and Resources

### On Python Packaging
- [Python Packaging Working Group](https://wiki.python.org/psf/PackagingWG/Charter): a sub-body of the PSF dedicated to raise funds to advance the state of Python packaging. You can [donate to this group here](https://donate.pypi.org).
- [Python Packaging Authority](https://www.pypa.io/): a group of developers who maintain major Python packaging projects (including PyPI). This group also maintains the [Python Packaging User Guide](https://packaging.python.org/) which is the authoritative guide to Python Packaging. PyPA projects [can be found on GitHub](https://github.com/pypa/). There is also a really interesting [history of Python Packaging](https://www.pypa.io/en/latest/history/) in the PyPA documentation.

### On PyPI / Warehouse
- [pypi.org](https://pypi.org): the web interface for the Python Package Index
- [Warehouse](https://github.com/pypa/warehouse): the codebase currently powering PyPI. If you'd like to contribute, please visit our [issue tracker](https://github.com/pypa/warehouse/issues). Issues set aside for new contributors [are found here](https://github.com/pypa/warehouse/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22).
- [PSF announcement of MOSS award](http://pyfound.blogspot.com/2017/11/the-psf-awarded-moss-grant-pypi.html): Details of the award from Mozilla that funded Warehouse development between Dec 2017 and May 2018.
- [Powering the Python Package Index](https://caremad.io/posts/2016/05/powering-pypi/): an article from Donald Stufft (PyPI / Warehouse maintainer) that discusses what it takes to power PyPI. This article is now slightly out of date, as the figures have grown over the past two years.
- ["A new package index for Python"](https://lwn.net/Articles/751458/): LWN.net article from Sumana Harihareswara (Warehouse project manager) covering the past, present and future of PyPI.
- ["Markdown Descriptions on PyPI"](https://dustingram.com/articles/2018/03/16/markdown-descriptions-on-pypi): article from Dustin Ingram (PyPI / Warehoue maintainer) on the steps to enable Markdown on your PyPI project descriptions
- I have also published a number of articles about the design and build of Warehouse on this blog. [Visit the homepage](https://whoisnicoleharris.com/#writing) for a list of all articles.


## Statistics

I used [infogram](https://infogram.com) to generate the graphs for my presentation. Happily, these can also be embedded:

<div class="infogram-embed" data-id="4e7b0b39-4b7c-4cdf-81c6-6c425be6f1a1" data-type="interactive" data-title="Bar Chart"></div><script>!function(e,t,n,s){var i="InfogramEmbeds",o=e.getElementsByTagName(t)[0],d=/^http:/.test(e.location)?"http:":"https:";if(/^\/{2}/.test(s)&&(s=d+s),window[i]&&window[i].initialized)window[i].process&&window[i].process();else if(!e.getElementById(n)){var a=e.createElement(t);a.async=1,a.id=n,a.src=s,o.parentNode.insertBefore(a,o)}}(document,"script","infogram-async","https://e.infogram.com/js/dist/embed-loader-min.js");</script><div style="padding:8px 0;font-family:Arial!important;font-size:13px!important;line-height:15px!important;text-align:center;border-top:1px solid #dadada;margin:0 30px"><a href="https://infogram.com/4e7b0b39-4b7c-4cdf-81c6-6c425be6f1a1" style="color:#989898!important;text-decoration:none!important;" target="_blank">Bar Chart</a><br><a href="https://infogram.com" style="color:#989898!important;text-decoration:none!important;" target="_blank" rel="nofollow">Infogram</a></div>

## Thanks!

I'd like to extend a big thank you to the following people:

- The EuroPython organising team for giving me the opportunity to present
- [Ernest W. Durbin III](https://twitter.com/EWDurbin), [Dustin Ingram](https://twitter.com/di_codes), [Donald Stufft](https://twitter.com/dstufft) and [Sumana Harihareswara](https://twitter.com/brainwane) for digging up facts and figures for my presentation and for being create co-contributors on the Warehouse project
- [Aina Requena Lafuente](https://twitter.com/ainarela) for the lovely illustrations
- My colleagues at PeopleDoc for reviewing my presentation - your feedback was really valuable
- All packaging contributors - past and present :)
