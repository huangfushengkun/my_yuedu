<template>
  <div class="user-center pull-right">
    <div class="row" v-if="!user">
      <router-link to="/login" class="register pull-left" >登陆</router-link>
      <router-link to="/login" class="pull-right">注册</router-link>
    </div>
    <div v-else>
      <ul @click.stop="isshow=!isshow">
        <li>
          <a href="javascript:;">{{user.nikiname}}</a>
        </li>
      </ul>
      <ul v-show="isshow">
        <li>
          <a href="#">个人中心</a>
        </li>
        <li>
          <router-link to="/setting">设置</router-link>
        </li>
        <li>
          <a href="javascript:;" @click="uaerOut">退出登陆</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isshow:false
    }
  },
  props: {
    user: [Object,String]
  },
  created () {
    // document绑定点击事件 设置隐藏的值 注意this 和冒泡
    const _this = this
    document.addEventListener('click', function () {
      if (_this.isshow) {
        _this.isshow = false
      }
    })
   
  },
  methods: {
    //退出登陆删除本地存储 告知父组件退出状态
    uaerOut () {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.$emit('user:out')
    }
  }
};
</script>

<style >
.user-center{
  margin-left: 20px;
  width: 80px;
}
.user-center ul li{
  height: 25px;
}

</style>
