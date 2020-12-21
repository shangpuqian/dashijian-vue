<template>
  <div class="signIn">
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input
        placeholder="请输入用户名"
        prefix-icon="el-icon-user"
        v-model="form.username">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入密码" prefix-icon="el-icon-unlock" v-model="form.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="再次确认密码" prefix-icon="el-icon-unlock" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">注册</el-button>
      </el-form-item>
    </el-form>
    <el-link :underline="false" @click="input">去登录</el-link>
  </div>
</template>

<script>
export default {
  name: 'signIn',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  props: ['value'],
  methods: {
    input () {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="less" scoped>
.el-button {
  width: 100%;
}
.el-link {
  float: right;
}
</style>
