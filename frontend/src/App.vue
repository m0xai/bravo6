<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { onMounted, ref } from "vue";


const fetchedData = ref({})

async function fetchData() {
  return await fetch("http://localhost:3000/users")
      .then((resp) => resp.json())
      .then((data) => fetchedData.value =  data)
}

</script>

<template>
  <button @click="fetchData">Fetch Data</button>
  <h1>{{ fetchedData.text }}</h1>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
