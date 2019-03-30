<template>
  <div class="row article-body">
    <!-- 左侧 -->
    <div class="pull-left">
      <ydArticleLeft :article="article"></ydArticleLeft>
      <yd-Content></yd-Content>
    </div>
    <div class="pull-right">
        <banner :relatedList="relatedList"></banner>
        <other :type_id="article.type_id"></other>
    </div>
  </div>
</template>

<script>
import {getArticleData,getBannerData} from '@/service/getData.js'
import ydArticleLeft from '@/components/article/ydArticleLeft.vue'
// import bus from "@/bus.js"
import banner from '@/components/article/banner.vue'
import other from '@/components/article/other.vue'
import ydContent from '@/components/article/ydContent.vue'
export default {
  components:{
    ydArticleLeft,banner,other,ydContent
  } ,
  data () {
    return {
      article: {},
      relatedList:[]
    }
  },
  created () {
    const id = this.$route.params.id
    getArticleData(id).then(res => {
      if(res.data.res_code === 200){
        this.article = res.data.res
      }
    })
    getBannerData().then(res => {
      if(res.data.res_code === 200){
        // console.log(res.data)
        this.relatedList = res.data.res
      }
    })
     
  }
}
</script>

<style>
.article-body{
  width: 1010px;
  margin: 0 auto;
  padding-top: 40px;
}
</style>
