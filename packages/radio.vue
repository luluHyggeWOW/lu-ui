<template>
  <label class="lu-radio" :class="{'is-checked': label == model}">
    <span class="lu-radio_input">
      <span class="lu-radio_inner"></span>
      <input type="radio" class="lu-radio_original" :name="name" :modelValue="label" v-model="model">
    </span>
    <span class="lu-radio_label">
      <slot></slot>
      <!-- 如果没有传值，就把label作为文本显示 -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script setup lang="ts">
import { onMounted, ref, useSlots, defineProps, computed, inject } from "vue";
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
    return isGroup() ? radioGroupValue.modelValue : props.modelValue;
  },
  set() {
    isGroup()
      ? changeradioGroupValue(props.label)
      : emits("update:modelValue", props.label);
  },
});

const radioGroupValue = inject("RadioGroup", {
  modelValue: "",
});
const changeradioGroupValue: any = inject("ChangeRadio");
const isGroup = () => {
  return radioGroupValue.modelValue != "";
};
</script>
<script lang="ts">
export default {
  name: "LuRadio",
};
</script>

<style lang="scss" scoped>
.lu-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: nlu;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: nlu;
  -webkit-user-select: nlu;
  -moz-user-select: nlu;
  .lu-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: nlu;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .lu-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .lu-radio_original {
      opacity: 0;
      outline: nlu;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .lu-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.lu-radio.is-checked {
  .lu-radio_input {
    .lu-radio_inner {
      border-color: #9999fb;
      background-color: #9999fb;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .lu-radio_label {
    color: #9999fb;
  }
}
</style>
