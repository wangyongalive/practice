<template>
  <div id="app">
    <m-form :model="model" :rules="rules">
      <m-form-item label="用户名" prop="userName">
        <!--<m-input v-model="model.userName"/>-->
        <!--v-model其实是语法糖 等价于下面-->
        <m-input :value="model.userName" @input="model.userName = arguments[0]"/>
      </m-form-item>
      <m-form-item label="密码" prop="passWord">
        <!--<m-input v-model="model.passWord" type="password"/>-->
        <!--v-model其实是语法糖 等价于下面-->
        <m-input :value="model.passWord" @input="model.passWord =  arguments[0]" type="password"/>
      </m-form-item>
    </m-form>
  </div>
</template>

<script>
  import MInput from './components/MInput';
  import MFormItem from './components/FormItem';
  import MForm from './components/Form';


  export default {
    name: 'App',
    components: {
      MInput,
      MFormItem,
      MForm
    },
    data() {
      return {
        model: {userName: "", passWord: ""},
        rules: {
          userName: [{required: true, message: "请输入用户名"},
            {min: 6, max: 10, message: '请输入6~10的用户名'}],
          passWord: [{required: true, message: "请输入密码"}]
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
