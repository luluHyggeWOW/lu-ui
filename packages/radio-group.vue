<template>
  <div class="lu-radio-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
const props = defineProps({
  modelValue: null,
});
const emits = defineEmits(["update:modelValue"]);
const change = (val: any) => {
  emits("update:modelValue", val);
};
provide("ChangeRadio", change);
</script>

<style >
</style>
<script lang="ts">
export default {
  name: "luRadioGroup",
  provide() {
    return {
      RadioGroup: this,
    };
  },
};
</script>
