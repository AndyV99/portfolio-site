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
    color: white;
    border: 6px solid white;
    border-radius: 2px;
}

.navbox {
    display: grid;
    text-align: right;
    position: absolute;
    bottom: 48px;
    right: 64px;
    overflow: hidden;
}

a {
    font-family: 'Josefin Sans';
    font-size: 3vw;
    color: #8a8a8a;
    padding: 8px;
    width: fit-content;
    margin-left: auto;
    text-decoration: none;
}
</style>