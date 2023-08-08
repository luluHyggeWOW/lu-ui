<template>
  <div class="lu-form">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, useSlots, defineProps, provide } from "vue";
const props = defineProps({
  model: {
    type: Object,
    required: true,
  },
  labelWidth: {
    type: String,
    default: "80px",
  },
});
</script>
<script lang="ts">
export default {
  name: "LuForm",
  provide() {
    return {
      Form: this,
    };
  },
};
</script>
<style scoped>
</style>