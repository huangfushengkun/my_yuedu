<template>
    <div class="related-item">
      <div class="related-other-list">
        <h3 class="list-title row">
          悦读FM频道其他节目
          <router-link class="pull-right"
          :to="'/channel/' + type_id">查看全部</router-link>
        </h3>
        <ul class="channel-other">
          <li v-for="(item,index) in channelAtherlist"
          :key="index">
            <router-link :to="'/article/' + item.id ">{{item.title}}</router-link>
            <div class="channel-other-info">
              <span>文：{{item.author}}</span>
              <span>主播：{{item.podcast}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import {getOtherData} from "@/service/getData.js"
import bus from '@/bus.js'
export default {
  data() {
    return {
      channelAtherlist:[],
    }
  },
  props:{
    type_id:{
      type:Number,
      default:1
    }
  },
  methods: {
    
   
  },
  created () {
    getOtherData(this.type_id).then(res => {
      if(res.data.res_code === 200){
        this.channelAtherlist = res.data.res
      }
      // console.log(res.data)
    })
  }
}
</script>

<style>

.related-other-list h3{
  border-left: 3px solid #f30;
  padding-left: 10px;
}
.related-other-list h3 span{
  font-size: 12px;
  cursor: pointer;
}
.related-other-list h3 span.disabled{
  cursor:not-allowed;
  color: #999;
}
.channel-other{
  width: 300px;
  padding-top: 30px;
}
.channel-other li{
  padding-bottom: 10px;
border-bottom: 1px dashed #EEE;
margin-bottom: 10px;
line-height: 20px;
}
.channel-other-info{
  color: #999;
}
.channel-other-info span {
  margin-right: 30px;
  font-size: 12px;
}
</style>
