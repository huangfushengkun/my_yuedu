<template>
  <div class="comment-list">
    <div class="comments">
      <textarea v-model="content" placeholder="说点什么吧!"></textarea>
      <button class="send-content"  @click="sendContent">发布</button>
    </div>
    <div class="comment-num">最新评论（{{comments.length}}）</div>
    <div class="comment-dom">
      <div v-if="!comments.length">暂无评论，抢占沙发...</div>
      <ul v-else>
        <li v-for="(comment,index) in comments" 
        :key="comment.id">
        {{comment.content}}
        <button 
        
        v-if="comment.isDel"
        @click="delComment(comment.id,index)">删除</button>
        <!-- <span>x</span> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getComments,sendComment,delUserContent} from "@/service/getData.js"
export default {
  data () {
    return {
      content: '',
      comments: []
    }
  },
  methods: {
    // 点击发布执行发布评论
    sendContent () {
      const article_id = this.$route.params.id
      const content = this.content
      if(content){ //判断评论内容不为空
        sendComment({article_id,content}).then(res => {
          // 判断是否请求成功
          if(res.data.res_code === 200) {  //成功添加数据并清空content
            this.comments.push(res.data.res)   
            this.content = ''
          }
        })
      }
    },
    // 删除评论
    delComment (id,index) {
      delUserContent(id).then(res => {
        if(res.data.res_code === 200){
          this.comments.splice(index,1)
        }
        // console.log(res.data)
      })
    }

  },
  created () {
    const id = this.$route.params.id
    //根据文章ID获取评论列表
    getComments(id).then(res => {
      // console.log(res.data)
      if(res.data.res_code === 200) {
        this.comments = res.data.res
      }
    })
  }
}
</script>

<style>
.comments{
  width: 620px;
  height: 50px;
  margin-bottom: 30px;
  /* vertical-align: top; */
  /* text-align: center; */
  display: flex;
}
textarea{
  background: #FFF;
  width: 550px;
  padding: 10px;
  height: 50px;
  line-height: 16px;
  font-size: 12px;
  outline: none;
  border: none;
}
button.send-content{
  width: 70px;
  background: #ee5044;
  font-size: 12px;
  color: white;
  text-align: center;
  height: 50px;
  line-height: 50px;
  border: none;
  outline: 0;
  cursor: pointer;
}

</style>
