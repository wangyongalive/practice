<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: 'Form',
    provide() {
      return {
        mForm: this   // 组件实例
      }
    },
    props: {
      model: {
        type: Object,
        required: true
      },
      rules: {
        type: Object
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
