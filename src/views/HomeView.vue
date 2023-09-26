<template>
  <div class="home-view">
    <h2 style="color: white;">Welcome to My Portfolio</h2>
    <p style="color: white;">
      welcome to my portfolio homepage.
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

