<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderView',
};
</script>

<style scoped>
/* adding styles in the hearder component */
header {
  background-color: #333;
  color: white;
  padding: 10px;
}

nav {
  display: flex;
  justify-content: space-around;
}

a {
  color: white;
  text-decoration: none;
}
</style>
