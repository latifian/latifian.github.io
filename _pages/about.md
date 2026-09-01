---
permalink: /
title:
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<div class="homepage">
<section class="homepage__section">
  <h2>About Me</h2>
  <p>I am a postdoctoral research associate (PDRA) in the <a href="https://informatics.ed.ac.uk">School of Informatics</a> at the <a href="https://www.ed.ac.uk/">University of Edinburgh</a>. Before that I was a Ph.D. student in the <a href="https://web.cs.toronto.edu">Department of Computer Science</a> at the <a href="https://www.utoronto.ca">University of Toronto</a>, where I was fortunate to have <a href="http://www.cs.toronto.edu/~nisarg/">Nisarg Shah</a> and <a href="http://www.cs.toronto.edu/~bor/">Allan Borodin</a> as my supervisors. Before that, I completed my undergraduate and master's studies in the <a href="http://ce.sharif.edu">Department of Computer Engineering</a> at <a href="http://sharif.edu">Sharif University of Technology</a>, where I had the honor to be advised by <a href="http://sharif.ir/~ghodsi/?page=home">Mohammad Ghodsi</a>.</p>
</section>

<section class="homepage__section">
  <h2>Research Interests</h2>
  <p>My research lies at the intersection of theoretical computer science, artificial intelligence, and economics, with an emphasis on algorithms and computational complexity. In particular, I am quite interested in problems related to social choice theory, fair division, algorithmic game theory, and mechanism design.</p>
</section>

<section class="homepage__section homepage__section--news">
<h2>News</h2>
<ul class="news-list" id="news-list" data-news-list>
{% for post in site.news reversed %}
  {% include archive-single.html %}
{% endfor %}
</ul>
{% if site.news.size > 5 %}
<button class="news-list__more" type="button" aria-expanded="false" aria-controls="news-list" data-news-more hidden>
  <span data-news-more-label>More news</span>
  <svg class="news-list__more-icon" viewBox="0 0 12 8" aria-hidden="true" focusable="false">
    <path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>
{% endif %}
</section>
</div>
