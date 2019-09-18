<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png"
         @click="time=+new Date()">
    <HelloWorld :msg.sync="msg" />
    {{msg}}
    {{time}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data: () => {
    return {
      msg: `Welcome to Your Vue.js App`,
      time: +new Date()
    }
  },
  components: {
    HelloWorld
  }
}
</script>
