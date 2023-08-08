<template>
  <div class="lu-checkbox-group">
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
  let arr = props.modelValue;
  props.modelValue.includes(val) ? arr.pop(val) : arr.push(val);
  emits("update:modelValue", arr);
};
provide("ChangeCheckbox", change);
</script>

<style >
</style>
<script lang="ts">
export default {
  name: "luCheckboxGroup",
  provide() {
    return {
      CheckboxGroup: this,
    };
  },
};
</script>
