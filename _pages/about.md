---
permalink: /
title:
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
**About Me**

I am a postdoctoral research associate (PDRA) in the <a href="https://informatics.ed.ac.uk">School of Informatics</a> at the <a href="ed.ac.uk">University of Edinburgh</a>. Before that I was a Ph.D. student in <a href="https://web.cs.toronto.edu">Department of Computer Science</a> at the <a href="https://www.utoronto.ca">University of Toronto</a>, where I was fortunate to have <a href="http://www.cs.toronto.edu/~nisarg/">Nisarg Shah</a> and <a href="http://www.cs.toronto.edu/~bor/"> Allan Borodin</a> as my supervisors. Before that, I completed my undergraduate and master's studies in the <a href="http://ce.sharif.edu"> Department of Computer Engineering</a> at <a href="http://sharif.edu"> Sharif University of Technology </a> where I had the honor to be advised by <a href="http://sharif.ir/~ghodsi/?page=home">Mohammad Ghodsi</a>.

<br>
**Research Intrests**
My research lies at the intersection of theoretical computer science, artificial intelligence, and economics, with an emphasis on algorithms and computational complexity. In particular, I am quite interested in problems related to social choice theory, fair division, algorithmic game theory and mechanism design. 

<br>

**News**
<ul>
{% for post in site.news reversed %}
  {% include archive-single.html %}
{% endfor %}
</ul>
