---
permalink: /
title:
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a third year Ph.D. student in <a href="https://web.cs.toronto.edu">Department of Computer Science</a> at the <a href="https://www.utoronto.ca">University of Toronto</a>. I am fortunate to be advised by <a href="http://www.cs.toronto.edu/~nisarg/">Nisarg Shah</a> and <a href="http://www.cs.toronto.edu/~bor/"> Allan Borodin</a>. Before joining here, I completed my undergraduate and master's studies in the <a href="http://ce.sharif.edu"> Department of Computer Engineering</a> at <a href="http://sharif.edu"> Sharif University of Technology </a> where I had the honor to be advised by <a href="http://sharif.ir/~ghodsi/?page=home">Mohammad Ghodsi</a>.


**Research Intrests**

- Computational Social Choice
- Algorithmic Game Theory
- Mechanism Design

**News**

{% for post in site.news reversed %}
  {% include archive-single.html %}
{% endfor %}
