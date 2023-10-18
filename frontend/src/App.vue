<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { onMounted, ref } from "vue";
import axios from 'axios'


const fetchedData = ref({})

async function fetchData() {
  const {data} = await axios.get("http://localhost:3000/users/", {params: {
    foo: "bar"
  }})
  fetchedData.value = data;
}

</script>

<template>
  <button @click="fetchData">Fetch Data</button>
  <h1>{{ fetchedData.text }}</h1>
</template>

<style scoped>
</style>
