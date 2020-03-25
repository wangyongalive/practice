<template>
  <div>
    <label>{{label}}</label>
    <div>
      <!--此时的input还是一个槽-->
      <slot></slot>
      <p v-if="errStatus">{{errorMsg}}</p>
    </div>
  </div>
</template>

<script>
  import Schema from 'async-validator';

  export default {
    name: 'FormItem',
    inject: ["mForm"], // 注入
    props: ["label", 'prop'],
    data() {
      return {
        errorMsg: "",
        errStatus: false
      }
    },
    mounted() {
      // FormItem上的监听事件
      this.$on("validate", this.validator);
    },
    methods: {
      validator() {
        const rules = this.mForm.rules[this.prop];
        const value = this.mForm.model[this.prop];

        // 校验对象
        let descriptor = {
          [this.prop]: rules
        };

        // 校验器
        let schema = new Schema(descriptor);
        // 动态计算
        schema.validate({[this.prop]: value}, errors => {
          if (errors) {
            this.errorMsg = errors[0].message;
            this.errStatus = true;
          } else {
            this.errorMsg = "";
            this.errStatus = false;
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
