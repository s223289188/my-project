<template>
  <div class="contact-view">
    <h2>Contact Information</h2>
    <p>
      Address: Melbourne, Australia<br>
      Tel: 0468726537<br>
      Email: kishikagupta1303@gmail.com<br>
      LinkedIn: <a href="https://www.linkedin.com/in/kishika-gupta-524104260" target="_blank">https://www.linkedin.com/in/kishika-gupta-524104260</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
};
</script>

<style scoped>
.contact-view {
  padding: 20px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8); 
}

.contact-view h2 {
  font-size: 24px;
  color: #333; 
}

.contact-view p {
  font-size: 16px;
  line-height: 1.5;
  color: #555; }

.contact-view a {
  color: #007BFF;
  text-decoration: none;
}

.contact-view a:hover {
  text-decoration: underline;
}
</style>
