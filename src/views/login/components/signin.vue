<template>
  <div class="signIn">
    <el-form ref="form" :rules="rules" :model="form" status-icon>
      <el-form-item prop="username">
        <el-input
        placeholder="请输入用户名"
        prefix-icon="el-icon-user"
        v-model="form.username">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="请输入密码" prefix-icon="el-icon-unlock" type="password" v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input placeholder="再次确认密码" prefix-icon="el-icon-unlock" type="password" v-model="form.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="signin">注册</el-button>
      </el-form-item>
    </el-form>
    <el-link :underline="false" @click="input">去登录</el-link>
  </div>
</template>

<script>
export default {
  name: 'signIn',
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: '',
        password: '',
        checkPass: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: ['blur', 'change'] },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: ['blur', 'change'] }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  props: ['value'],
  methods: {
    input () {
      this.$emit('input', !this.value)
    },
    signin () {
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
