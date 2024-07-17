<template>
  <div id="app">
    <demo1></demo1>
    <demo2></demo2>
  </div>
</template>

<script>
import Demo1 from "./views/Demo1.vue";
import Demo2 from "./views/Demo2.vue";

export default {
  name: "App",
  components: {
    Demo1
  }
};
</script>
