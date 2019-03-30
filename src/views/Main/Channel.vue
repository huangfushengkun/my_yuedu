<template>
  <div class="row container">
    <!-- 左侧列表 -->
    <yd-List 
    :articles="ydList.articles"
    :count="ydList.count"
    :currentPage="ydList.page"
    @sendPage:channel="getPage"></yd-List>
    <!-- 右侧列表 -->
    <yd-list-top10 :top10List="top10List"></yd-list-top10>
  </div>
</template>

<script>
import ydList from '@/components/Channel/ydList.vue'
import ydListTop10 from '@/components/Channel/ydListTop10.vue'

import {getTop10List,getList} from '@/service/getData.js'
export default {
  components: {
    ydList,ydListTop10
  },
  data () {
    return {
      ydList: {},
      top10List: {}
    }
  },
  methods: {
    //获取点击页码并请求数据
    getPage (page) {
      // console.log(page)
      const id = this.$route.params.id
      getList(id,page).then(res => {
        if(res.data.res_code === 200){
          // console.log(res.data.res)
          this.ydList = res.data.res
        }
      })
    }
  },
  created () {
    //请求文章列表数据
    const id = this.$route.params.id
    getList(id).then(res => {
      if(res.data.res_code === 200){
        // console.log(res.data.res)
        this.ydList = res.data.res
      }
    })
    //请求top10列表数据
    getTop10List (id).then(res => {
     if(res.data.res_code === 200){
        // console.log(res.data.res)
        this.top10List = res.data.res
      }
    })

  }
}
</script>

<style>
.container{
  padding: 40px 0;
}
</style>
