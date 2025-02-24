<template>
  <nav class="flex items-center gap-18">
    <router-link to="/">About Me</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/contacts">Contacts</router-link>
  </nav>
</template>

<style scoped>
nav {
  padding: 0 1rem;
  position: sticky;
  top: 10px;
  height: 100px;
}

nav a {
  margin: 0 0.5rem;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

nav a.router-link-active {
  color: #42b883;
}
</style> 