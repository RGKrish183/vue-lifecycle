<template>
  <div class="hello">
    <h1>Count : {{ counter }}</h1>
    <h3>Order Log : {{ orderlog }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Created extends Vue {
  counter: any = 0;
  orderlog = "";

  // Methods
  mthdCounter() {
    this.counter += this.counter;
  }

  // Hooks
  beforeCreate() {
    const logger = "Getting Ready - beforeCreated \n\r";
    console.log(logger);

    // Below ex. is you cant access the methods and data.
    try {
      this.orderlog += logger;
      this.mthdCounter();
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
