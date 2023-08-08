<template>
  <button class="lu-button"
    :class="[`lu-button-${type}`,{'is-plain':plain},{'is-round':round},{'is-circle':circle},{'is-disabled':disabled}]"
    @click="handleClick">
    <i v-if="icon" :class="`lu-icon-${icon}`"></i>
    <span v-if="useSlots().default">
      <slot ref="slot"></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref, useSlots, defineProps } from "vue";
const props = defineProps({
  type: String,
  disabled: Boolean,
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  icon: String,
});

const { slots } = useSlots();
const emit = defineEmits(["click"]);
const handleClick = () => {
  emit("click");
};
</script>
<script lang="ts">
export default {
  name: "LuButton",
};
</script>

<style lang="scss" scoped>
.lu-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  // transform: scale(1, 1.1);
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 6px;
  &:hover,
  &:focus {
    color: #9999fb;
    border-color: #d8d8ff;
    background-color: #eeeeff;
  }
}
.lu-button-primary {
  color: #fff;
  background-color: #9999fb;
  border-color: #9999fb;
  &:hover,
  &:focus {
    opacity: 0.6;
    background: #9999fb;
    background-color: #9999fb;
    color: #fff;
    border: 1px solid #9999fb;
  }
}
.lu-button-success {
  color: #fff;
  background-color: #6ed9d9;
  border-color: #6ed9d9;
  &:hover,
  &:focus {
    opacity: 0.6;
    color: #fff;
    background-color: #6ed9d9;
    border-color: #6ed9d9;
  }
}
.lu-button-info {
  color: #fff;
  background-color: #ccc8cd;
  border-color: #ccc8cd;
  &:hover,
  &:focus {
    opacity: 0.6;
    color: #fff;
    background-color: #ccc8cd;
    border-color: #ccc8cd;
  }
}
.lu-button-warning {
  color: #fff;
  background-color: #ffc14d;
  border-color: #ffc14d;
  &:hover,
  &:focus {
    opacity: 0.6;
    color: #fff;
    background-color: #ffc14d;
    border-color: #ffc14d;
  }
}
.lu-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    opacity: 0.6;
    color: #fff;
    background: #f56c6c;
    background-color: #f56c6c;
    border: 1px solid #f56c6c;
  }
}
// 朴素按钮样式
.lu-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #9999fb;
    color: #9999fb;
  }
}
.lu-button-primary.is-plain {
  color: #9999ff;
  background: #e7e7fe;
  &:hover,
  &:focus {
    background: #9999ff;
    border-color: #9999ff;
    color: #fff;
    opacity: 1;
  }
}
.lu-button-success.is-plain {
  color: #6ed9d9;
  background: #dbffff;
  &:hover,
  &:focus {
    background: #6ed9d9;
    border-color: #6ed9d9;
    color: #fff;
    opacity: 1;
  }
}
.lu-button-info.is-plain {
  color: #ccc8cd;
  background: #f1e9f5;
  &:hover,
  &:focus {
    background: #ccc8cd;
    border-color: #ccc8cd;
    color: #fff;
    opacity: 1;
  }
}
.lu-button-warning.is-plain {
  color: #ffc14d;
  background: #fff0d4;
  &:hover,
  &:focus {
    background: #ffc14d;
    border-color: #ffc14d;
    color: #fff;
    opacity: 1;
  }
}
.lu-button-danger.is-plain {
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
    opacity: 1;
  }
}
// round属性
.lu-button.is-round {
  border-radius: 18px;
}
// circle属性
.lu-button.is-circle {
  border-radius: 50%;
  padding: 10px;
}
// icon配套样式
.lu-button [class*="lu-icon-"] + span {
  margin-left: 5px;
}
// disabled属性
.lu-button.is-disabled {
  cursor: pointer;
  opacity: 0.6;
  pointer-events: none;
}
</style>
