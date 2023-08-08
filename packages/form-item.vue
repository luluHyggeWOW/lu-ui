<template>
  <div class="lu-form-item">
    <label :style="{width:formValue.labelWidth}" class="lu-form-item_label">{{label}}</label>
    <div class="lu-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps, computed, inject } from "vue";
const props = defineProps({
  label: {
    type: String,
    default: false,
  },
});
const formValue = inject("Form", {});
console.log(formValue.labelWidth);
</script>
<script lang="ts">
export default {
  name: "LuFormItem",
};
</script>
<style lang="scss" scoped>
.lu-form-item {
  margin-bottom: 25px;
  .lu-form-item_label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .lu-form-item_content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidde;
  }
}
</style>
