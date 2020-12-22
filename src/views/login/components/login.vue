<template>
  <div class="onLogin">
    <el-form ref="form" :rules="rules" :model="form">
      <el-form-item prop="username">
        <el-input
        placeholder="请输入用户名"
        prefix-icon="el-icon-user"
        v-model="form.username">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="请输入密码" prefix-icon="el-icon-unlock" v-model="form.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
    <el-link :underline="false" @click="input">去注册</el-link>
  </div>
</template>

<script>
export default {
  name: 'onlogin',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: ['blur', 'change'] },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  props: ['value'],
  methods: {
    input () {
      this.$emit('input', !this.value)
    },
    login () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
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
