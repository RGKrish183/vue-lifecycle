<template>
  <div class="home">
    <BeforeCreate />
  </div>
</template>

<script>
// @ is an alias to /src
import BeforeCreate from "@/components/BeforeCreate.vue";
import Created from "@/components/Created.vue";

export default {
  name: "Home",
  components: {
    BeforeCreate,
    Created
  }
};
</script>
