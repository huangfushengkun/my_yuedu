<template>
  <div class="yd-pages">
    <ul v-if="count" class="row">
      <template v-for="(page) in pages">
        <li 
        :class="['pull-left',{current:page===currentPage}]" 
        v-if="page >= start && page <= end"
        :key="page"
        @click="changeCurrentPage(page)">{{page}}</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  data (){
    return {
    interval:3

    }
  },
  props: {
    currentPage:Number,
    count:Number,
  },
  methods: {
    changeCurrentPage (page) {
      this.$emit('send:page',page)
    }
  },
  computed: {
    pages () {
      return Math.ceil(this.count / 10)
    },
    start () {
      let num =  Math.max(1,this.currentPage - this.interval)
     if(this.currentPage + this.interval > this.pages){
       num = (this.pages - 2 * this.interval) < 1 ? 1 : this.pages - 2 * this.interval
     }
     return num
    },
    end () {
      let num = Math.min(this.currentPage + this.interval, this.pages)
      if(this.currentPage < (this.interval + 1)) {
        num = (2 * this.interval + 1) > this.pages ? this.pages :(2 * this.interval + 1)
      }
      return num
    }
  },
  
}
</script>

<style>
  .current{
    color: #f30;
  }
</style>
