<template>
  <navBar class="MineNavBar" :class="{navBars: navBg}">
    <template v-slot:left>
      <span class="iconfont liebiao">&#xe69d;</span>
    </template>
    <template v-slot:center v-if="navBg">
      <div class="navBar-center">
        <img src="~assets/image/31.jpg" class="navBar-center-image">
        <span class="navBar-center-name">合欢树上的猫</span>
      </div>
    </template>
    <template v-slot:right>
      <span class="iconfont search">&#xe652;</span>
    </template>
  </navBar>
  <MineInformation></MineInformation>
  <MineTrace></MineTrace>
  <MineLikes></MineLikes>
  <MinePlaylist></MinePlaylist>
  <MineCollection></MineCollection>
  <div class="assistant">
    <div class="assistant-content">
      <span>歌单助手</span>
      <div class="assistant-content-center">
        <div class="assistant-content-center-title">你可以从歌单中筛选出</div>
        <div class="assistant-content-center-choose">
          <div>最近收藏</div>
          <div>的</div>
          <div>小众</div>
          <div>电子</div>
          <div>歌曲</div>
        </div>
        <div class="assistant-content-center-button">试试看</div>
      </div>

    </div>
  </div>
</template>

<script>
  import navBar from 'components/common/navBar'
  import MineInformation from './MineInformation'
  import MineTrace from './MineTrace'
  import MineLikes from './MineLikes'
  import MinePlaylist from './MinePlaylist'
  import MineCollection from './MineCollection'
  export default {
    name: 'MineView',
    data() {
      return {
        navBg: false
      }
    },
    components: {
      navBar,
      MineInformation,
      MineTrace,
      MineLikes,
      MinePlaylist,
      MineCollection
    },
    methods: {
      scrollTop() {
        let scrollNumber = document.documentElement.scrollTop;
        if(scrollNumber > 60){
          this.navBg = true;
        }else {
          this.navBg = false;
        }
        // console.log(scrollNumber);
      }
    },
    mounted() {
      window.addEventListener('scroll', this.scrollTop)
    }
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
  .search {
    font-size: 26px;
    font-weight: 700;
  }
  .MineNavBar {
    position: fixed;
    top: 0px;
    z-index: 1;
    background-color: transparent;
  }
  .navBars {
    background-color: #FFFFFF;
  }
  .navBar-center {
    display: flex;
    align-items: center;
  }
  .navBar-center-image {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 50%;
  }
  .navBar-center-name {
    font-size: 13px;
    margin-left: 10px;
  }
  .assistant {
    margin: 10px;
    height: 205px;
    background-color: #FFFFFF;
    border-radius: 10px;
    margin-bottom: 100px;
    /* border: #000000 1px solid; */
  }
  .assistant-content {
    /* border: #000000 1px solid; */
    width: 94%;
    height: 165px;
    padding: 20px 3% 20px 3%;
    font-size: 12px;
    color: #999999;
  }
  .assistant-content-center {
    width: 100%;
    height: 100%;
    /* border: #000000 1px solid; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .assistant-content-center-title {
    font-size: 13px;
    color: #DDDDDD;
  }
  .assistant-content-center-choose {
    display: flex;
    justify-content: space-around;
  }
  .assistant-content-center-choose div:nth-child(1) {
    color: rgb(110,140,175);
    margin: 0px 5px;
    background-color: rgb(240,240,250);
    padding: 2px 5px;
    border-radius: 3px;
  }
  .assistant-content-center-choose div:nth-child(2) {
    color: #DDDDDD;
    margin: 0px 5px;
  }
  .assistant-content-center-choose div:nth-child(3) {
    color: rgb(110,180,210);
    margin: 0px 5px;
    background-color: rgb(240,250,250);
    border-radius: 3px;
    padding: 2px 5px;
  }
  .assistant-content-center-choose div:nth-child(4) {
    color: rgb(230,110,30);
    margin: 0px 5px;
    background-color: rgb(250,240,230);
    border-radius: 3px;
    padding: 2px 5px;
  }
  .assistant-content-center-choose div:nth-child(5) {
    color: #DDDDDD;
    margin: 0px 5px;
  }
  .assistant-content-center-button {
    width: 100px;
    height: 30px;
    background-color: rgb(255,77,55);
    border-radius: 20px;
    color: #EEEEEE;
    font-size: 13px;
    line-height: 30px;
    display: flex;
    justify-content: center;
  }
</style>
