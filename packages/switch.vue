<template>
  <label class="lu-switch" @click="handleClick" :class="{'is-checked':modelValue}">
    <span class="lu-switch_core" ref="core">
      <span class="lu-switch_button"></span>
    </span>
  </label>
</template>

<script setup lang="ts">
import { onMounted, ref, useSlots, defineProps, watch } from "vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  activeColor: {
    type: String,
    default: "",
  },
  inactiveColor: {
    type: String,
    default: "",
  },
});
let active = ref(false);
let core = ref();
const emits = defineEmits(["update:modelValue"]);

const handleClick = (e: any) => {
  active.value = !active.value;
  emits("update:modelValue", active.value);
};

onMounted(() => {
  watch(
    () => active.value,
    () => {
      if (props.activeColor || props.inactiveColor) {
        let color = active.value ? props.activeColor : props.inactiveColor;
        core.value.style.borderColor = color;
        core.value.style.backgroundColor = color;
      }
    },
    { immediate: true }
  );
});
</script>
<script lang="ts">
export default {
  name: "LuSwitch",
};
</script>

<style lang="scss" scoped>
.lu-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .lu-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .lu-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
// 选中样式
.is-checked {
  .lu-switch_core {
    border-color: #9999fb;
    background-color: #9999fb;
    .lu-switch_button {
      transform: translateX(20px);
    }
  }
}
// 隐藏input标签
.lu-switch_input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>
