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
.router-link-exact-active {
    color: green;
}

.navbox {
    display: grid;
    text-align: right;
    position: absolute;
    bottom: 64px;
    right: 64px;
    overflow: hidden;
}

a {
    font-family: 'Josefin Sans';
    font-size: 3vw;
}
</style>