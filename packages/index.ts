
import LuButton from './button.vue'
import LuDialog from './dialog.vue'
import LuInput from './input.vue'
import LuSwitch from './switch.vue'
import LuRadio from './radio.vue'
import LuRadioGroup from './radio-group.vue'
import LuCheckbox from './checkbox.vue'
import LuCheckboxGroup from './checkbox-group.vue'
import LuForm from './form.vue'
import LuFormItem from './form-item.vue'
import './assets/fonts/iconfont.css'
const components = [
  LuButton,
  LuDialog,
  LuInput,
  LuSwitch,
  LuRadio,
  LuRadioGroup,
  LuCheckbox,
  LuCheckboxGroup,
  LuForm,
  LuFormItem
]
const install = function (Vue: any) {
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}
export default {
  install
}
