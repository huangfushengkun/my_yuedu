<template>
  <div class="left-conner">
    <div class="item">
      <div class="item-name">{{article.title}}</div>
      <div class="item-meta">
        <div class="item-meta-libs">
          <span>{{article.author}}</span>
          <span>{{article.podcast}}</span>
          <span>{{article.duration}}</span>
        </div>
        <div class="item-meta-count">播放{{article.count}}次</div>
      </div>
      <div class="item-pic">
        <img :src="article.img_url" alt>
      </div>
      <div id="yuedu_player">
        <audio controls :src="article.mp3_url"></audio>
      </div>
      <div class="item-info">
        <div class="item-info-out">
          <div :class="['item-info-content',{'active' : addActive}]" v-html="formatArticleContent">
            {{article.content}}
          </div>
          <span class="bann"></span>
        </div>

        <div class="item-info-share row">
          <span class="pull-right" @click="showAll">{{activeMsg}}</span>
        </div>
      </div>
      <div class="item-f row"></div>
    </div>
    <div class="item-pg row">
      <router-link class="pull-left" :to="'/article/' + (article.id - 1)">上一篇</router-link>
      <router-link class="pull-right" :to="'/article/' + (article.id + 1) ">下一篇</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addActive: false,
      activeMsg: "展开全部"
    };
  },
  props: {
    article: Object
  },
  computed: {
    formatArticleContent() {
      if (this.article.content) {
        const reg = /\s/g;
        return this.article.content.replace(reg, "<br>");
      }
      return true;
    }
  },
  methods: {
    showAll() {
      this.addActive = !this.addActive;
      this.activeMsg = this.addActive ? "收起" : "展开全部";
    }
  }
};
</script>

<style>
.item-info {
  padding: 20px 30px;
  width: 620px;
  height: 338px;
  background-color: #fff;
  margin-bottom: 30px;
}
.item-info .item-info-content {
  height: 280px;
  overflow: hidden;
  line-height: 22px;
  letter-spacing: 1px;
  font-size: 12px;
  color: #707070;
}
.item-info .item-info-out{
  position: relative;
}
.item-info .item-info-content.active {
  height: auto;
}
.item-info .active span {
  display: none;
}
.item-info .item-info-out span.bann {
  display: block;
  position: absolute;
  width: 560px;
  height: 40px;
  bottom: 0;
  left: 0;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, rgba(255, 255, 255, 0)),
    color-stop(1, #fff)
  );
}
.item-info-share span {
  padding: 10px;
  cursor: pointer;
  font-size: 12px;
  color: #707070;
}
.item-pg{
  font-size: 14px;
  padding: 0 30px;
  margin-bottom: 30px;
  font-size: 14px;
}
#yuedu_player audio {
  width: 560px;
}
</style>
