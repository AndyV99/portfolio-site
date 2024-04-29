<template>
    <div class="navbox">
        <RouterLink to='/'>Home</RouterLink>
        <RouterLink to='/about'>About Me</RouterLink>
        <RouterLink to='/experience'>Work Experience</RouterLink>
        <RouterLink to='/demo-projects'>Demo Projects</RouterLink>
        <RouterLink to='/site-info'>Site Info</RouterLink>
    </div>
</template>

<style>


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
</style>