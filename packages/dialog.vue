<template>
  <transition name="dialog-fade">
    <div class="lu-dialog_wrapper" v-show="props.visible" @click.self="handleClose">
      <div class="lu-dialog" :style="{width:width,marginTop:top}">
        <div class=" lu-dialog_header">
          <slot name="title">
            <span class="lu-dialog_title">{{title}}</span>
          </slot>
          <button class="lu-dialog_headerbtn" @click="handleClose">
            <i class="lu-icon-close"></i>
          </button>
        </div>
        <div class="lu-dialog_body">
          <slot><span></span></slot>
        </div>
        <div class="lu-dialog_footer">
          <slot name="footer" v-if="$slots.footer">
            <lu-button @click="handleClose">取消</lu-button>
            <lu-button type="primary" @click="handleClose">确定</lu-button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps, defineEmits } from "vue";
let visible = ref<boolean>(false);
const props = defineProps({
  title: {
    type: String, // 修改为对象类型
    default: "提示",
  },
  width: {
    type: String,
    default: "35%",
  },
  top: {
    type: String,
    default: "15vh",
  },
  visible: {
    type: Boolean,
    default: "false",
  },
});
const emits = defineEmits(["close"]);

const handleClose = () => {
  emits("close", false);
};
</script>
<script lang="ts">
export default {
  name: "LuDialog",
};
</script>
<style scoped lang="scss">
.lu-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .lu-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .lu-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .lu-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: nlu;
        outline: nlu;
        cursor: pointer;
        border-radius: 30%;
        // border: #fff;
        // border: #303133;
        // font-size: 16px;
        .lu-icon-close {
          color: 909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .lu-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>