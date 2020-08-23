<template>
  <div class="hello">
    <h1>Count : {{ counter }}</h1>
    <h3>Order Log :</h3>
    <p v-for="(item, index) in orderlog" :key="index">
      {{ item }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Created extends Vue {
  counter: any = 0;
  orderlog: Array<string> = [];

  // Methods
  mthdCounter() {
    this.counter += 1;
  }

  mthdLogger(msg: any) {
    console.log("%c " + msg, "background: #1d1ae6; color: #bada55");
    this.orderlog.push(msg);
  }

  // Hooks #1
  beforeCreate() {
    console.log(
      "%c Getting Ready - beforeCreated",
      "background: #1d1ae6; color: #bada55"
    );
    console.log(
      "%c Preapring Methods and data",
      "background: #1d1ae6; color: #bada55"
    );
  }

  // Hooks #2
  created() {
    this.mthdLogger("Methods and data Ready to access - Created");
    this.mthdCounter();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
