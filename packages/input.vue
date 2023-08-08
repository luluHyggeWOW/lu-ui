<template>
  <div class="lu-input lu-input_suffix" :class="{'lu-input_suffix':showSuffix}" :style="{width:width}">
    <form>
      <input :type="showPassword?(passwordVisible?'text':'password'):type" :placeholder="placeholder"
        :disabled="disabled" :name="name" class="lu-input_inner" :modelValue="modelValue" @input="handleInput($event)"
        :class="[{'is-disabled':disabled}]" :autocomplete="passwordVisible?'':'new-password'">
    </form>
    <span class="lu-input_suffix" v-if="showSuffix">
      <i class="on-input_icon lu-icon-cancel" v-if="clearable && modelValue" @click.stop="clear($event)"></i>
      <i class="on-input_icon lu-icon-visible" v-if="showPassword && type=='password'" @click="handlePassword"></i>
    </span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps, defineEmits } from "vue";
let visible = ref<boolean>(false);
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "95%",
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["update:modelValue"]);
let inputText = ref();
let passwordVisible = ref(false);
const handleInput = (e: any) => {
  inputText.value = e;
  emits("update:modelValue", e.target.value);
};
const showSuffix = () => {
  return props.clearable || props.showPassword;
};
const clear = (e: any) => {
  inputText.value.target.value = "";
  emits("update:modelValue", "");
};
const handlePassword = () => {
  // props.type = "text";
  passwordVisible.value = !passwordVisible.value;
};
</script>
<script lang="ts">
export default {
  name: "LuInput",
};
</script>

<style lang="scss" scoped>
.lu-input {
  width: 90%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .lu-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #9999fb;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.lu-input_suffix {
  .lu-input_inner {
    padding-right: 30px;
  }
  .lu-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
