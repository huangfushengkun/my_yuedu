<template>
  <div class="pull-right">
    <div class="side-sponsor">
      <img src="http://yuedu.fm/static/website/images/yueduwx_2.jpg" alt="">
    </div>
    <div class="channel-top10">
      <h3>{{top10List.type}}频道 TOP10</h3>
      <ul class="article-list">
        <router-link tag="li" class="article-item" 
        v-for="article in top10List.articles"
        :key="article.id"
        :to="`/article/${article.id}`">{{article.title}}</router-link>
      </ul>
    </div>
    <div class="side-sponsor">
      <a href="#"><img src="http://qingwenyi.com/smedia/upload/1526.jpg" alt=""></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    top10List: Object
  }
}
</script>

<style>
.side-sponsor{
  margin-bottom: 30px;
  width: 360px;
}
.side-sponsor img{
  width: 360px;
}
.channel-top10{
  width: 360px;
  padding: 30px;
  margin-bottom: 30px;
}
.article-list{
  padding-top: 30px;
}
.article-item{
  margin-left: 20px;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
</style>
