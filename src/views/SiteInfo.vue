<script setup lang="ts">
import Nav from '@/components/Nav.vue'
import { AkGithubOutlineFill } from '@kalimahapps/vue-icons'
</script>

<template>
  <main>
    <h1>Site Info</h1>
    <p>
      This site was created with Vue3 and Vite. It is hosted in GCP App Engine with automated builds
      and deployments. The source is public on github.
    </p>
    <div class="link-icon-container">
      <AkGithubOutlineFill class="icon" />
      <a href="https://github.com/AndyV99/portfolio-site"
        >https://github.com/AndyV99/portfolio-site</a
      >
    </div>
  </main>
  <Nav />
</template>

<style scoped>
a {
  color: white;
  text-decoration: none;
  width: unset;
}

.link-icon-container {
  margin: 12px;
  display: flex;
}

.icon {
  color: white;
  font-size: 2em;
  margin-right: 0.5em;
}
</style>
