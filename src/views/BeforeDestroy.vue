<template>
  <div class="hello">
    <h1>Count : {{ counter }}</h1>
    <button @click="mthdCounter">Click for BeforeUpdate and Updated</button>
    <h3>Order Log :</h3>
    <p v-for="(item, index) in orderlog" :key="index">
      {{ item }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BeforeDestroy extends Vue {
  counter: any = 0;
  orderlog: Array<string> = [];
  coolMethods = "Lifecycle methods are awesome!";
  coolStatus = false;

  // Methods
  mthdCounter() {
    this.counter += 1;
    this.coolStatus = !this.coolStatus;
  }

  mthdLogger(msg: any) {
    console.log("%c " + msg, "background: #f1aa0b; color: #000");
    this.orderlog.push(msg);
  }

  // Hooks #1
  beforeCreate() {
    console.log(
      "%c Getting Ready - beforeCreated",
      "background: #f1aa0b; color: #000"
    );
    console.log(
      "%c Preapring Methods and data",
      "background: #f1aa0b; color: #000"
    );
  }

  // Hooks #2
  created() {
    this.mthdLogger("Methods and data Ready to access - Created");
  }

  // Hooks #3
  beforeMount() {
    this.mthdLogger("Compiling Templates and styles - beforeMount");
  }

  // Hooks #4
  mounted() {
    this.mthdLogger("DOM Element Replacement - mounted");
  }

  // Hooks #5
  beforeUpdate() {
    this.mthdLogger("Data changes, event updation work happend - beforeUpdate");
  }

  // Hooks #6
  updated() {
    console.log(
      "%c DOM related operations can be performed - updated",
      "background: #f1aa0b; color: #000"
    );
  }

  // Hooks #7
  beforeDestroy() {
    this.mthdLogger("Cleanup process- beforeDestroy");
  }

  // Hooks #8
  destroy() {
    this.mthdLogger("Cleanup process- destroy");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
