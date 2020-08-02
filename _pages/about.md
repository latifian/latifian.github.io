---
permalink: /
title: "Homepage"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I'm a Ph.D. student at the University of Toronto, where I am fortunate to be advised by <a href="http://www.cs.toronto.edu/~nisarg/">Nisarg Shah</a>. Before joining here, I received my M.Sc. Degree in Computer Engineering from Sharif University of Technology where I had the honor to be advised by <a href="http://sharif.ir/~ghodsi/?page=home">Mohammad Ghodsi</a>.


**Research Intrests**

- Design and Analysis of Algorithms
- Algorithmic Game Theory
- Computational Social Choice

***Publications***
<h1> Publications </h1>
{% if author.googlescholar %}
  You can also find my articles on <a href="{{author.googlescholar}}">my Google Scholar profile</a>.
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
