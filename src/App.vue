<template>
  <div id="app">
    <HeaderApp />
    
    <!-- Including the ResponsiveButtons component -->
    <ResponsiveButtons />

    <router-view />
    
    <FooterApp />
  </div>
</template>

<script>
import HeaderApp from '@/components/Header-app.vue';
import FooterApp from '@/components/footer-app.vue';
import ResponsiveButtons from '@/components/responsivebuttons-app.vue'; // Add the component ResponsiveButtons.


export default {
  components: {
    HeaderApp,
    FooterApp,
    ResponsiveButtons, // Include the ResponsiveButtons component in the area for components.
  },
};
</script>


<style scoped>
/* global styles */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0; 
  background-image: url('https://wallpaperaccess.com/full/5652030.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh; 
}


</style>

