<script setup lang="ts">
import Nav from '../components/Nav.vue';
</script>

<template>
    <main class="container">
        <h1 id="intro">Hi, I'm <span class='red'>Andy</span></h1>
        <div class="textscrollbox"><h1 class="dev-text">Web Developer</h1></div>
        <div class="textscrollbox"><h1 class="eng-text">Software Engineer</h1></div>
    </main>
    <Nav />
</template>

<style scoped>
.v-leave-active {
    transition: scroll-up 0.5s ease;
}

.v-leave-from {
    margin-bottom: 0;
}

.v-leave-to {
    margin-bottom: 1200px;
}

@keyframes scroll-up {
    0% {margin-bottom:0;}
    100% {margin-bottom:1200px;}
}

.red {
    color: red;
}

main {
    margin: 16px;
    margin-top: 32px;
}

#intro {
    font-size: 8vw;
    line-height: 8vw;
    opacity: 0;
    animation: fadein 2s;
    animation-fill-mode: forwards;
    padding-bottom: 4px;
    border-bottom: 3px solid white;
    margin-bottom: 16px;
}

h1 {
    font-size: 6vw;
    font-family: 'Josefin Sans';
    display: inline-block;
    line-height: 6.5vw;
}

.textscrollbox {
    overflow: hidden;
    height: 7vw;
    margin: 16px;
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
    0% {opacity:0;}
    100% {opacity:1;}
}

@keyframes scrollin {
    0% {margin-left: -2000px;}
    100% {margin-left: 0px;}
}
</style>