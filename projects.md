---
layout: default
title: "Projects"
permalink: /projects/
---

<h1>Projects</h1>
<ul>
    {% for project in site.projects %}
    <li>
        <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
        <span> - {{ project.date | date: "%B %d, %Y" }}</span>
    </li>
    {% endfor %}
</ul>