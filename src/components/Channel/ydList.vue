<template>
  <div class="pull-left">
    <ul class="channels">
      <li class="row channel" 
      v-for="article in articles"
      :key="article.id">
        <div class="info-img pull-left">
          <img :src="article.img_url" alt="">
        </div>
        <div class="info-body pull-right">
          <div class="title">
            <router-link :to="`/article/${article.id}`">{{article.title}}</router-link>
          </div>
          <div class="meat">
            <span>{{article.author}}</span>
            <span>{{article.podcast}}</span>
            <span>{{article.duration}}</span>
            <span>{{article.play_time}}</span>
          </div>
          <div class="desc">{{article.content | formateInfo}}</div>
        </div>
      </li>
    </ul>
    <yd-page 
    :currentPage="currentPage"
    :count="count"
    @send:page="getPage"></yd-page>
  </div>
</template>

<script>
import ydPage from "./ydPage.vue"
export default {
  components: {
    ydPage
  },
  props: {
    articles:Array,
    currentPage:Number,
    count:Number
  },
  filters: {
    formateInfo (value) {
      return value.slice(0,95) + "..."
    }
  },
  methods: {
    //接收子组件发送的页码page
    getPage(page) {
      // console.log(page)
      this.$emit('sendPage:channel',page)
    }
  }
}
</script>

<style>
  .channels{
    width: 620px;
  }
  .channel{
    width: 100%;
    height: 210px;
    margin-bottom: 30px;
    background-color: #fff;
  }
  .info-img{
    overflow: hidden;
    width: 210px;
    height: 210px;
  }
  .info-img img{
    height: 210px;
  }
  .info-body{
    width: 410px;
    height: 210px;
    padding: 30px;
    color: #707070;
  }
  .info-body .title{
    margin-bottom: 10px;
  }
  .info-body .title a{
    font-size: 18px;
  }
  .info-body .meat{
    height: 18px;
    margin-bottom: 25px;
  }
  .info-body .meat span{
    font-size: 12px;
    margin-right: 20px;
    color: #999999;
  }
  .info-body .desc{
    letter-spacing: 1px;
    font-size: 12px;
    line-height: 22px;
  }
</style>
