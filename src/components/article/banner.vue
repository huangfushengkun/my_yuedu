<template>
    <div class="related-item">
      <h3></h3>
      <div class="related-list">
        <h3 class="list-title row">
          其他相关节目
          <span :class="['iconfont', 'pull-right',{disabled:index===4}]"
          @click="next"
          >&#xe62f;</span>
          <span :class="['iconfont', 'pull-right',{disabled:index===0}]"
          @click="prev"
          >&#xe606;</span>
        </h3>
        <ul class="row"
        :style="{transform: 'translate3d('+ (-index * 330) +'px,0,0)'}">
          <router-link 
          class="pull-left" 
          :to="'/article/' + related.id" 
          tag="li"
          v-for="(related,index) in relatedList"
          :key="index">
            <img :src="related.img_url" alt="">
            <span>{{related.title}}</span>
          </router-link>
        </ul>
      </div>
    </div>
</template>

<script>
import "@/assets/font/iconfont.css"
export default {
  data() {
    return {
      index: 0
    }
  },
  props:{
    relatedList:Array
  },
  methods: {
    next () {
      if(this.index < 4){
        this.index++
      }
    },
    prev () {
      if(this.index > 0){
        this.index--
      }
    }
  }
}
</script>

<style>
.related-item{
  width: 360px;
  /* height: 354px; */
  margin-bottom: 30px;
  background-color: #ffffff;
  padding: 30px;
  overflow: hidden;
}
.related-list h3{
  border-left: 3px solid #f30;
  padding-left: 10px;
}
.related-list h3 span{
  font-size: 12px;
  cursor: pointer;
}
.related-list h3 span.disabled{
  cursor:not-allowed;
  color: #999;
}

.related-list ul{
  width: 1650px;
  transition: all .3s;
}
.related-list ul li{
  width: 135px;
  height: 108px;
  margin: 30px 30px 0 0;
  cursor: pointer;
}

.related-list ul li img{
  width: 100%;
  height: 84px;
}
.related-list ul li span{
  display: block;
  width: 135px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>

