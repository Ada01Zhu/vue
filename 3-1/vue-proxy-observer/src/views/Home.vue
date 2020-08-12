<template>
  <div class="home">
    <img alt="Vue logo" v-on:click="handleClick" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
console.log(1111);
export default {
  name: 'Home',
  components: {
    HelloWorld,
    
  },
  methods: {
      handleClick: () =>{
        alert(445655)
      }
    }
}
</script>
