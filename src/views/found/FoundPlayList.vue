<template>
  <div class="playList">
    <div class="playList-title">
      <slot name="title">
        <span class="playList-title-left">推荐歌单</span>
      </slot>
      <div class="playList-more">更多<span class="iconfont playList-ico">&#xe626;</span></div>
    </div>
    <div class="playList-content">
      <slot name="content">
        <div class="playList-box" :style="{width: playLists.length*120 + 'px'}">
            <div class="playList-item" v-for="(item, index) in playLists">
              <img src="~assets/image/9.jpg" class="playList-img" v-if="index === 0">
              <img src="~assets/image/16.jpg" class="playList-img" v-if="index === 1">
              <img src="~assets/image/13.jpg" class="playList-img" v-if="index === 2">
              <img src="~assets/image/12.jpg" class="playList-img" v-if="index === 3">
              <img src="~assets/image/10.jpg" class="playList-img" v-if="index === 4">
              <img src="~assets/image/14.jpg" class="playList-img" v-if="index === 5">
              <img src="~assets/image/15.jpg" class="playList-img" v-if="index === 6">
              <img src="~assets/image/8.jpg" class="playList-img" v-if="index === 7">
              <div class="playList-item-title">
                <span class="orange" v-if="index == 1">有你常听的歌 </span>
                <span class="">{{item.title}}</span>
              </div>
            </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FoundOlayList',
    data() {
      return {
        playLists: [
          {img: '', title: '网易云最好听的歌曲 持续更新'},
          {img: '', title: '有超好听的副歌的流行歌曲'},
          {img: '', title: '『90后』还好青春有个你'},
          {img: '', title: '有超好听的副歌的流行歌曲'},
          {img: '', title: '有超好听的副歌的流行歌曲'},
          {img: '', title: '有超好听的副歌的流行歌曲'},
          {img: '', title: '有超好听的副歌的流行歌曲'},
          {img: '', title: '有超好听的副歌的流行歌曲'}
        ]
      }
    },
    components: {

    },
    created() {

    },
    methods: {

    }
  }
</script>

<style>
  .playList {
    width: 97%;
    height: 200px;
    padding: 3% 0px 3% 3%;
    background-color: #FFFFFF;
    margin-top: 1px;
    border-radius: 0px 0px 15px 15px;
  }
  .playList-title {
    margin: 5px 0px;
    position: relative;
  }
  .playList-title-left {
    font-size: 18px;
    color: #333333;
    font-weight: bold;
    font-family: "microsoft yahei";
  }
  .playList-more {
    height: 20px;
    line-height: 20px;
    border: 1px solid rgb(220,220,220);
    padding: 2px 10px;
    border-radius: 20px;
    font-size: 14px;
    color: #333333;
    position: absolute;
    right: 10px;
    top: 0;
  }
  .playList-ico {
    font-size: 14px;
  }
  .playList-content {
    width: 100%;
    height: 80%;
    /* border: 1px solid #000000; */
    margin: 16px 0px;
    overflow: scroll;
  }
  .playList-box {
    height: 100%;
    /* width: 960px; */
    display: flex;
    justify-content: flex-start;
    overflow: scroll;
    /* border: #000000 1px solid; */
  }
  .playList-item {
    width: 120px;
    height: 100%;
    /* border: 1px solid #000000; */
  }
  .playList-img {
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 20px;
    padding: 0px 5px 0px 5px;
  }
  .playList-item-title {
    font-size: 12px;
    padding: 0px 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .orange {
    color: rgb(240,155,118);
    background-color: rgb(255,241,238);
    font-size: 8px;
    -webkit-transform: scale(0.4);
    margin-right: 5px;
    padding: 5px;
    border-radius: 10px;
  }
</style>
