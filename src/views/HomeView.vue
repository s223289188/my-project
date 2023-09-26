<template>
  <div class="home-view">
    <h2 style="color: white;">Welcome to My Portfolio</h2>
    <p style="color: white;">
      This is the home page of my portfolio website. You can add your content and customize it as needed.
    </p>
    <router-link to="/about" style="color: white;">Learn more about me</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  
}
</script>

<style scoped>

.home-view {
  text-align: center;
  padding: 20px;
}
</style>

