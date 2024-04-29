<script setup lang="ts">
import Nav from '../components/Nav.vue';

</script>

<template>
  <main>
    <h1>About <span class='red'>Andy</span></h1>
    <p>I have been in the Web Development industry since May 2018.  At that time I was hired by a professor at IUPUI, which taught me the foundations of web dev, and kicked off my career.</p>
    <div class="divider"></div>
    <p>Since then I have had several roles on a handfull of different teams.  I have experience in small startup environments, government subsidaiaries, and large corporate companies.</p>
    <p>My passion for programming started in 2010, when I was 13.  At the time I was interested in the video game industry, so I started making small text based games in Ruby and Python for my family and friends.  Later, I got into Unreal Engine and their C++ framework and Unity with C#.</p>
    <p>In High School, I was a member of student government and used Python to do some basic data science on some statistics about our school events.</p>
    <p>I became a teaching assistant while studying computer science at IUPUI.  It was a great experience to teach others about the joy of programming.</p>
    <p>Since my first internship in 2018, I have been engulfed in web.  Making small Javascript apps for friends and integrating with social platforms and other systems.</p>
  </main>
  <Nav />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
