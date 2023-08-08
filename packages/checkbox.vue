<template>
  <label class="lu-checkbox" :class="{'is-checked':isCheck()}">
    <span class="lu-checkbox_input">
      <span class="lu-checkbox_inner"></span>
      <input type="checkbox" class="lu-checkbox_original" :name="name" v-model="model" :modelValue="label">
    </span>
    <span class="lu-checkbox_label">
      <slot></slot>
      <template v-if="!$slots.default">
        {{label}}
      </template>
    </span>
  </label>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps, computed, inject } from "vue";
const props = defineProps({
  label: {
    type: [String, Number, Boolean],
    default: "",
  },
  modelValue: null,
  name: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["update:modelValue"]);
const model = computed({
  get() {
    return isGroup() ? checkboxGroupValue.modelValue : props.modelValue;
  },
  set() {
    isGroup()
      ? changecheckboxGroupValue(props.label)
      : emits("update:modelValue", !props.modelValue);
  },
});

const checkboxGroupValue: { modelValue: any } = inject("CheckboxGroup", {
  modelValue: "",
});
const changecheckboxGroupValue: any = inject("ChangeCheckbox");
const isGroup = () => {
  return checkboxGroupValue.modelValue instanceof Array;
};
const isCheck = () => {
  return isGroup() ? model.value.includes(props.label) : model.value;
};
</script>
<script lang="ts">
export default {
  name: "LuCheckbox",
};
</script>
<style lang="scss" scoped>
.lu-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: nlu;
  margin-right: 30px;
  .lu-checkbox_input {
    white-space: nowrap;
    cursor: pointer;
    outline: nlu;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .lu-checkbox_inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s, cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #ffffff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .lu-checkbox_original {
      opacity: 0;
      outline: nlu;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .lu-checkbox_label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
// 选中的样式
.lu-checkbox.is-checked {
  .lu-checkbox_input {
    .lu-checkbox_inner {
      background-color: #9999fb;
      border-color: #9999fb;
    }
    &:after {
      transform: rotate(45deg) scaleY(1);
    }
  }
  .lu-checkbox_label {
    color: #9999fb;
  }
}
</style>
