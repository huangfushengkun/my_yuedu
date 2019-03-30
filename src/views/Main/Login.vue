<template>
<div class="masking">
  <div class="login-bar">
      <i class="close">x</i>
      <div class="pop-title">登陆</div>
      <form action="" id="loginForm">
          <div class="account-form">
              <input type="text" v-model="user.email" class="account-input " placeholder="账号" autocomplete="off">
              <div class="account-line">
                  <span class="errorUser">用户名格式不正确！</span>
              </div>
              <input type="text" v-model="user.password" class="account-input" placeholder="密码" autocomplete="off">
              <div class="account-line">
                  <span class="errorPw">密码错误！</span>
              </div>
          </div>
          <div class="account-other">
              <p><input type="checkbox">记住密码</p>
          </div>
          <button class="account-btn" @click="userLogin">登陆</button>
      </form>
  </div>
</div>
  
</template>

<script>
import {login} from "@/service/getData.js"
import bus from "@/bus.js"
export default {
  data () {
    return {
      user:{
        email: '',
        password: ''
      }
    }
  },
  methods: {
    userLogin () {
      login(this.user).then(res => {
        if(res.data.res_code === 200){
          // console.log(res.data)
          localStorage.setItem('token',res.data.res.token)
          localStorage.setItem('user',JSON.stringify(res.data.res.user))
          this.user.password = ''
          this.$router.replace('./')
          bus.$emit('send:user',res.data.res.user)  //非父子 告诉ydUser组件登陆成功了
        }else{
          alert('用户名或密码错误！')
        }
        
      })
    },
  },
  created () {
      if(localStorage.getItem('token') && localStorage.getItem('user')){
          this.$router.replace('./')
      }
  }
}
</script>

<style scoped>
.masking{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    /* display: none; */
}
  .login-bar , .register-bar{
    width: 380px;
    height: 300px;
    padding: 30px 50px 50px 50px;
    background: #fff;
    position: absolute;
    top: 220px;
    left: 50%;
    margin-left: -200px;
}
.register-bar{
    height: 302px;
}
.close{
    width: 20px;
    height: 20px;
    background-color: #000;
    color: #fff;
    cursor:pointer;
    border-radius: 50%;
    line-height: 18px;
    font-style: normal;
    position: absolute;
    top: -10px;
    right: -10px;
    text-align: center;
}
.login-bar .pop-title, .register-bar .pop-title{
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 20px;
    color: #666;
}
#loginForm .account-form{
    width: 280px;
    height: 83px;
    padding: 0 15px;
    border: 1px solid #dcdcdc;
}
#registerForm .account-form{
    width: 280;
    height: 163px;
    padding: 0 15px;
    border: 1px solid #dcdcdc;
}
.account-line{
    width: 100%;
    height: 1px;
    background-color: #dcdcdc;
    /* overflow: hidden; */
    position: relative;
}
.account-form .account-line span{
    position: absolute;
    /* top: -5px; */
    left: 0;
    font-size: 12px;
    padding: 2px 8px;
    background: rgba(238,80,68,.8);
    color: #FFF;
    border-radius: 3px;
    display: none;
}
.account-form .account-line .errorUser{
    top: -5px;
}
.account-form .account-line span::before{
    position: absolute;
    top: -5px;
    left: 8px;
    display: inline-block;
    border-right: 5px solid transparent;
    border-bottom: 5px solid rgba(238,80,69,.8);
    border-left: 5px solid transparent;
    content: '';
}

.account-form .account-input{
    width: 100%;
    height: 20px;
    margin: 10px 0;
    display: block;
    border: none;
    /* font-size: 12px; */
    outline: none;
    padding: 0;
}
.account-form .bgc{
    /* background: url(../images/reg_icons.png) no-repeat 152px 3px ; */

}
.account-other{
    width: 280px;
    height: 48px;
    padding: 15px 5px; 
    position: relative;
}
.account-btn{
    width: 280px;
    height: 45px;
    background-color: #eb4235;
    text-align: center;
    font-size: 14px;
    border: none;
}
.in-for:before{
    position: absolute;
    top: -5px;
    left: 8px;
    display: inline-block;
    border-right: 5px solid transparent;
    border-bottom: 5px solid rgba(238,80,69,.8);
    border-left: 5px solid transparent;
    content: '';
}
.in-for{
    position: absolute;
    top: 35px;
    left: 0;
    padding: 2px 8px;
    font-size: 12px;
    background: rgba(238,80,68,.8);
    color: #FFF;
    border-radius: 3px;
    display: none;
}
label{
    font-size: 12px;
}
label a{
    color:#ff4500;
}
</style>
