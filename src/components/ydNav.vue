<template>
  <div class="header">
    <div class="nav-bar center-bar clearfix">
      <div class="logo">悦读 FM</div>
      <div class="nav">
        <router-link
          exact
          active-class="active"
          v-for="type in types"
          :key="type.id"
          :to="`/channel/${type.id}`"
        >{{type.type}}</router-link>
      </div>
      <div class="nav-right clearfix">
        <div class="search">
          <button class="search-right"></button>
          <input type="text" class="search-box">
          <div class="search-list">
            <ul class="search-ul"></ul>
          </div>
        </div>
        <!-- 用户组件标签 -->
        <yd-user :user="user" @user:out="user=''"></yd-user>  
      </div>
    </div>
  </div>
</template>

<script>
import ydUser from "./ydUser"
import { getTypes } from "@/service/getData";
import bus from "@/bus.js"
export default {
  components: {
    ydUser
  },
  data() {
    return {
      types: [],
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : ''
    };
  },
  created() {
    // 获取导航列表
    getTypes().then(res => {
      this.types = res.data.res;
    });
     //监听登陆成功时发送过来的user数据
    bus.$on('send:user', (user) => {
      this.user = user
    })
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 100px;
  background-color: #ffffff;
}
ui,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #707070;
}
div {
  color: #707070;
}
.center-bar {
  width: 1010px;

  margin: 0 auto;
}
.nav-bar {
  height: 30px;
  padding: 35px 0;
  line-height: 30px;
}
.logo,
.nav {
  float: left;
}
.nav-right {
  float: right;
  height: 30px;
  line-height: 30px;
}
.nav-right > span {
  margin-left: 20px;
}
.nav-right .userPic {
  position: relative;
}
.nav-right .userPic img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  cursor: pointer;
}
.userPic span {
  display: inline-block;
  position: absolute;
  width: 56px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  color: green;
  top: 25px;
  left: 0;
  /* display: none; */
}
.userPic span a {
  padding-left: 0;
  display: inline;
}
.nav-right .userPic:hover span {
  display: inline-block;
}
.search {
  display: inline-block;
  position: relative;
  top: 0;
}
.search-right {
  width: 20px;
  height: 20px;
  margin-top: 6px;
  float: right;
  outline: none;
  background-color: #fff;
  cursor: pointer;
  outline: none;
  border: none;
}
.search-right:before {
  content: "";
  display: block;
  width: 7px;
  height: 7px;
  border: solid 2px #999;
  border-radius: 7px;
  margin-left: 0px;
}
.search-right:after {
  content: " ";
  display: block;
  width: 7px;
  border-bottom: 2px solid #999;
  margin-left: 7px;
  margin-top: -1px;
  transform: rotate(45deg);
}
.search-box {
  width: 85%;
}
/* 搜索列表 */
.search-list {
  position: absolute;
  width: 85%;
}
.search-list ul {
  /* border: 1px solid #999; */
  width: 100%;
}
/* 添加的新类 */
.search-right.change:before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  border: solid 4px #ff6700;
  border-radius: 20px;
  margin-left: 0px;
  margin-top: -10px;
}
.search-right.change:after {
  content: " ";
  display: block;
  width: 14px;
  border-bottom: 4px solid #ff6700;
  margin-left: 20px;
  margin-top: -2px;
  transform: rotate(45deg);
}
.search-box {
  border: 1px solid #eeeeee;
}
.nav-right a {
  font-size: 12px;
  display: inline-block;
  padding-left: 20px;
}
.logo {
  width: 210px;
}
.nav a {
  display: inline-block;
  font-size: 14px;
  padding: 0 20px;
}
.border {
  background-color: #f5f5f5;
  height: 1500px;
}
/* .nav{
    width: 1010px;
    height: 106px;
    line-height: 106px;
    background-color: #fff;
    margin: 0 auto;
  }
  .nav a{
    margin: 0 20px;
  }*/
.active {
  color: #f30;
}
</style>
