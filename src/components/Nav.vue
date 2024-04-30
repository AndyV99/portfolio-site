<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="navbox">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About Me</RouterLink>
    <RouterLink to="/experience">Work Experience</RouterLink>
    <RouterLink to="/demo-projects">Demo Projects</RouterLink>
    <RouterLink to="/site-info">Site Info</RouterLink>
  </div>
</template>

<style scoped>
.navbox {
  background-color: rgba(50, 50, 50, 0.3);
  padding: 12px;
  border-radius: 9px;
  display: grid;
  text-align: right;
  position: fixed;
  bottom: 48px;
  right: 64px;
  overflow: hidden;
}

.router-link-exact-active,
.router-link-active {
  color: white;
  border: 6px solid white;
  border-radius: 2px;
}

a {
  font-family: 'Josefin Sans';
  font-size: 2.5em;
  color: #8a8a8a;
  padding: 8px;
  width: fit-content;
  margin-left: auto;
  text-decoration: none;
}

@media (max-width: 1200px) {
  .router-link-exact-active {
    border-width: 2px;
  }
}
</style>
