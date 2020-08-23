<template>
  <div class="hello">
    <h1>Count : {{ counter }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BeforeCreate extends Vue {
  counter: any = 0;

  // Methods
  mthdCounter() {
    this.counter += 1;
  }

  // Hooks
  beforeCreate() {
    console.log(
      "%c Getting Ready - beforeCreated",
      "background: #222; color: #bada55"
    );

    // Below ex. for cant access the methods and data.
    try {
      this.mthdCounter();
    } catch (error) {
      console.log("%c " + error, "background: #222; color: #bada55");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
