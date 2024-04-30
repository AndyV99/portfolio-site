<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Nav from '../components/Nav.vue'
</script>

<template>
  <main>
    <h1 id="intro">Hi, I'm <span class="red">Andy</span></h1>
    <div class="textscrollbox"><h1 class="dev-text">Web Developer</h1></div>
    <div class="textscrollbox"><h1 class="eng-text">Software Engineer</h1></div>
  </main>
  <Nav />
</template>

<style scoped>
#intro {
  opacity: 0;
  animation: fadein 2s;
  animation-fill-mode: forwards;
  padding-bottom: 4px;
  border-bottom: 3px solid white;
  margin-bottom: 0.5em;
}

.textscrollbox {
  overflow: hidden;
  margin: 0.2em;
}

.dev-text {
  margin-left: -2000px;
  animation: scrollin 3s;
  animation-fill-mode: forwards;
}

.eng-text {
  margin-left: -2000px;
  animation: scrollin 3.5s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes scrollin {
  0% {
    margin-left: -2000px;
  }
  100% {
    margin-left: 0px;
  }
}
</style>
