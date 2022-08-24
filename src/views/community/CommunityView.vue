<template>
  <CommunityNavBar></CommunityNavBar>
  <div class="top-list">
    <div class="top-list-title" v-for="(item, index) in lists">
      <div class="top-list-title-ico-box">
        <span class="iconfont top-list-title-ico" v-if="index === 0">&#xe661;</span>
        <span class="iconfont top-list-title-ico" v-if="index === 1">&#xe662;</span>
        <span class="iconfont top-list-title-ico" v-if="index === 2">&#xe65b;</span>
        <span class="iconfont top-list-title-ico" v-if="index === 3">&#xe658;</span>
      </div>

      <span>{{item.name}}</span>
      <span>{{item.num | filter1}}</span>
    </div>
  </div>
</template>

<script>
  import CommunityNavBar from './CommunityNavBar'
  export default {
    name: 'CommunityView',
    data() {
      return {
        lists: [{name: '小酒馆', num: 1000}, {name: '音乐会', num: 1001}, {name: '校园墙', num: 1002}, {name: '校友会', num: 1003}]
      }
    },
    filters: {
      filter1: function(value){
        console.log(value);
        // if(num > 1000){
        //   return '999+';
        // }else{
        //   return num;
        // }
      }
    },
    components: {
      CommunityNavBar
    },
    methods: {

    },

  }
</script>

<style>
  body::before {
    content: '';
    position: fixed;
    z-index: -1;
    background-size: 100% auto;
    background-image: linear-gradient(to bottom, rgb(235,235,235), rgb(246,246,246) 80%);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .top-list {
    /* display: flex; */
    /* justify-content: ; */
    width: 96%;
    margin: 20px 2% 0px;
  }
  .top-list-title {
    /* margin: 3%; */
    margin: 0 2%;
    margin-bottom: 10px;
    width: 46%;
    height: 50px;
    background-color: #fff;
    display: inline-block;
    border-radius: 15px;
    position: relative;
  }
  .top-list-title-ico-box {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    position: absolute;
    border: #000000 1px solid;
    top: 10px;
    left: 10px;
    text-align: center;
    line-height: 30px;
  }
  .top-list-title-ico {
    fon
  }
</style>
