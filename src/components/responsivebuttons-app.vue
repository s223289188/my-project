<template>
  <div class="responsive-buttons">
    <!-- An instance of looping through an array using v-for -->
    <div v-for="(item, index) in items" :key="index" class="btn" @click="handleItemClick(index)">
      {{ item }}
    </div>

    <!-- An example of dynamically rendering something using v-if -->
    <div v-if="showElement" class="btn" @click="toggleShowElement">
      Conditional Element
    </div>

    <!-- An example of binding inputs to a data attribute using the V-model -->
    <input v-model="inputValue" class="btn" />

    <!-- implementing into account user input in a technique -->
    <button class="btn" @click="handleButtonClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'ResponsiveButtons',
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3'],
      showElement: true,
      inputValue: '',
    };
  },
  methods: {
    handleItemClick(index) {
    
      alert(`Item ${index + 1} clicked!`);
    },
    toggleShowElement() {
      //  Change the conditional element's visibility.
      this.showElement = !this.showElement;
    },
    handleButtonClick() {
     
      alert('Button clicked!');
    },
  },
};
</script>

<style scoped>
.responsive-buttons {
  display: flex;
  justify-content: space-around; 
  align-items: center;
  padding: 20px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color:black;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease;
}


.btn.pop {
  transform: scale(1.1);
}

/* for displays smaller than 768 pixels */
@media screen and (max-width: 768px) {
  .btn {
    padding: 8px 16px;
    font-size: 14px;
  }
}

/* media queries*/
@media screen and (max-width: 480px) {
  .btn {
    padding: 6px 12px;
    font-size: 12px;
  }
}
</style>
