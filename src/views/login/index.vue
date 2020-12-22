<template>
  <div class="login">
    <div class="w">
      <div class="header">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="main">
        <div class="login_card">
          <div class="top">
            <img src="@/assets/login_title.png" alt="">
          </div>
          <!-- 登录 -->
          <!-- 通过 v-model 项 子组件 传递信息 -->
            <on-login v-if="jump" v-model="jump"></on-login>
          <!-- 注册 -->
            <signIn v-if="!jump" v-model="jump"></signIn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import onLogin from './components/login'
import signIn from './components/signin'
export default {
  name: 'login',
  data () {
    return {
      jump: true // 显示与隐藏
    }
  },
  components: {
    onLogin,
    signIn
  },
  methods: {
  }
}
</script>

<style scoped lang='less'>
.login {
  width: 100%;
  height: 100vh;
  background: url('~@/assets/login_bg.jpg') no-repeat;
  background-size: cover;
  .w {
    width: 1200px;
    margin: 0 auto;
    .header {
      padding-top: 20px;
    }
    .main {
      .login_card {
        width: 400px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px 30px;
        .top {
          width: 100%;
          height: 50px;
          text-align: center;
        }
      }
    }
  }

}

</style>
