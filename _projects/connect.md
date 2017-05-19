---
layout: project
colors:
    default: e11738
    dark: d4082a
    light: ed8995

title: Connect
skills: [Django, TDD, BDD, HTML, CSS/SCSS, UI, Visual Design]
summary: Connect is a moderated web application that helps people connect with each other based on skills, interests and location.  Connect is currently in development and due for a full-feature release in 2018.
feature_image:
    small: /assets/img/connect-small.png
    medium: /assets/img/connect-medium.png
    large: /assets/img/connect-large.png

links:
-   url: https://github.com/nlhkabu/connect
    text: View source on GitHub

priority: 3

sections:
-   |
    ## The Problem
    On the relaunch of PyLadies Australia, I received enquiries from all over Australia; of women wanting to join, and men wanting to help.

    There were a few clusters of interest in Sydney and Melbourne, but otherwise, interested parties were spread across Australia's other capital cities and rural locations.

    So I started thinking:

    * How can I foster a sense of community across geographical boundaries?
    * How can I help PyLadies members form professional relationships?
    * How can I ensure a safe and welcoming space?

-   |
    ## The Solution

    Connect is a web application developed in Django and designed to be a friendly, accessible space for members to meet.  Each member has:

    * A public profile displaying a biography, professional links, a list of relevant skills
    * The ability to nominate how they prefer to interact with other members (for example, by selecting 'mentor')
    * The capacity to filter Connect members by skill and location *(location feature in development)*
    * The ability to contact other members *(in development)*

    Safety and security is at the heart of Connect with:

    *  Membership by invitation or approval only
    *  Built-in abuse reporting and adjudication system
    *  Dedicated moderator dashboard, including moderation logs (allowing moderators to review each other's actions)


    Though initially devised for the PyLadies Australia community, Connect has been built so that other communities or organisations can modify the system to suit their needs.
    For example, skills and interests are added via the Django administration - allowing customisation for a particular audience.

---
