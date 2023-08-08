<template>
  <div>
    <div class="button">
      <div>
        <lu-button @click="fn">普通</lu-button>
        <lu-button type="primary">primary</lu-button>
        <lu-button type="success">success</lu-button>
        <lu-button type="info">info</lu-button>
        <lu-button type="warning">warning</lu-button>
        <lu-button type="danger">danger</lu-button>
      </div>
      <div>
        <lu-button @click="fn" disabled>普通</lu-button>
        <lu-button type="primary" disabled>primary</lu-button>
        <lu-button type="success" disabled>success</lu-button>
        <lu-button type="info" disabled>info</lu-button>
        <lu-button type="warning" disabled>warning</lu-button>
        <lu-button type="danger" disabled>danger</lu-button>
      </div>
      <div>
        <lu-button plain>普通</lu-button>
        <lu-button type="primary" plain>primary</lu-button>
        <lu-button type="success" plain>success</lu-button>
        <lu-button type="info" plain>info</lu-button>
        <lu-button type="warning" plain>warning</lu-button>
        <lu-button type="danger" plain>danger</lu-button>
      </div>
      <div>
        <lu-button plain disabled>普通</lu-button>
        <lu-button type="primary" plain disabled>primary</lu-button>
        <lu-button type="success" plain disabled>success</lu-button>
        <lu-button type="info" plain disabled>info</lu-button>
        <lu-button type="warning" plain disabled>warning</lu-button>
        <lu-button type="danger" plain disabled>danger</lu-button>
      </div>
      <div>
        <lu-button plain round icon="check">普通</lu-button>
        <lu-button type="primary" plain round icon="check">Primary</lu-button>
        <lu-button type="success" plain round icon="check">Success</lu-button>
        <lu-button type="info" plain round icon="check">Info</lu-button>
        <lu-button type="warning" plain round icon="check">warning</lu-button>
        <lu-button type="danger" plain round icon="check">danger</lu-button>
      </div>
      <div>
        <lu-button plain circle>普</lu-button>
        <lu-button type="primary" plain circle>pri</lu-button>
        <lu-button type="success" plain circle>su</lu-button>
        <lu-button type="info" plain circle>inf</lu-button>
        <lu-button type="warning" plain circle>wa</lu-button>
        <lu-button type="danger" plain circle>da</lu-button>
      </div>
      <div>
        <lu-button plain circle icon="check"></lu-button>
        <lu-button type="primary" plain circle icon="delete"></lu-button>
        <lu-button type="success" plain circle icon="check"></lu-button>
        <lu-button type="info" plain circle icon="info"></lu-button>
        <lu-button type="warning" plain circle icon="check"></lu-button>
        <lu-button type="danger" plain circle icon="check"></lu-button>
      </div>
    </div>
    <!-- <div class="dialog">
      <lu-button @click="dialogVisible = true">dialog</lu-button>
      <lu-dialog :visible="dialogVisible" width="40%" title="111" top="20px" @close="handleClose">
        222
        <template #footer>
        </template>
      </lu-dialog>
    </div> -->
    <div class="input">
      <lu-input placeholder="请输入用户名" type="password" disabled></lu-input>
      <lu-input v-model="text" width="20%" clearable> </lu-input>{{text}}
      <lu-input v-model="pw" width="20%" type="password" show-password> </lu-input>{{pw}}
    </div>
    <div class="switch">
      <lu-switch v-model="active"></lu-switch>
      <lu-switch v-model="active" active-color="red" inactive-color="green"></lu-switch>
      <input type="text" v-model="active">
    </div>
    <div class="radio">
      <lu-radio label="1" v-model="gender">男</lu-radio>
      <lu-radio label="0" v-model="gender">女</lu-radio>
      <lu-radio label="1" v-model="gender">11</lu-radio>
      <lu-radio-group v-model="gender">
        <lu-radio label="1">男</lu-radio>
        <lu-radio label="0">女</lu-radio>
        <lu-radio label="1">11</lu-radio>
      </lu-radio-group>
    </div>
    <div class="checkbox">
      <lu-checkbox v-model="active">111</lu-checkbox>
      <br>
      <lu-checkbox-group v-model="hobby">
        <lu-checkbox label="1"></lu-checkbox>
        <lu-checkbox label="2"></lu-checkbox>
        <lu-checkbox label="3"></lu-checkbox>
      </lu-checkbox-group>
    </div>
    <div class="form">
      <lu-form :model="model" label-width="80px">
        <lu-form-item label="用户名1">
          <lu-input placeholder="请输入用户名"> </lu-input>
        </lu-form-item>
        <lu-form-item label="用户名2">
          <lu-checkbox-group v-model="hobby">
            <lu-checkbox label="1"></lu-checkbox>
            <lu-checkbox label="2"></lu-checkbox>
            <lu-checkbox label="3"></lu-checkbox>
          </lu-checkbox-group>
        </lu-form-item>
        <lu-form-item label="用户名3"> <lu-radio-group v-model="gender">
            <lu-radio label="1">男</lu-radio>
            <lu-radio label="0">女</lu-radio>
            <lu-radio label="1">11</lu-radio>
          </lu-radio-group></lu-form-item>
      </lu-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
