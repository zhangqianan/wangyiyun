<template>
  <FoundMusic class="FoundCalendar">
    <template v-slot:title>
      <span class="music-title-content">音乐日历</span>
      <div class="music-title-chick">
        <span>今日{{tiao}}条<span class="iconfont music-title-chick-ico">&#xe626;</span></span>
      </div>
    </template>
    <template v-slot:content>
      <div class="calendar">
        <div class="good-luck">
          <span class="good-luck-title">领取你的今日好运</span>
          <div class="good-luck-to">
            <span class="good-luck-to-title">查看运势解读</span>
            <span class="iconfont good-luck-to-ico">&#xe65f;</span>
          </div>
        </div>
        <div class="news">
          <div class="news-item" v-for="(item, index) in newsList">
            <span class="news-item-date">{{item.date}}</span>
            <div class="news-item-tag">{{item.tag}}</div>
            <div  class="news-item-type">{{item.type}}</div>
            <span class="news-item-title">{{item.title}}</span>
            <div class="news-item-ico-box" v-if="item.music">
              <span class="iconfont news-item-ico">&#xe656;</span>
              <span class="news-item-comments">{{item.comments}}</span>
            </div>
            <div class="news-item-image-box">
              <img src="~assets/image/40.jpg" alt="" class="news-item-image" v-if="index === 0">
              <img src="~assets/image/34.jpg" alt="" class="news-item-image" v-if="index === 1">
            </div>
          </div>
          <!-- <div class="news-item">
            <span class="news-item-date">明天</span>
            <span class="news-item-tag">预告</span>
            <span  class="news-item-title">李汶翰的最新作品：不如月光</span>
            <div class="news-item-image-box">
              <img src="~assets/image/34.jpg" alt="" class="news-item-image">
            </div>
          </div> -->
        </div>
      </div>
    </template>
  </FoundMusic>
</template>

<script>
  import FoundMusic from './FoundMusic'
  export default {
    name: 'FoundCalendar',
    data() {
      return {
        tiao: 12,
        newsList: [
          {date: '今天', tag: '云村热点', type: '', title: '这个rapper我喜欢！ | 新闻室'},
          {date: '明天', tag: '', type: '预告', title: '李汶翰的最新作品：不如月光', music: true, comments: 111}
        ]
      }
    },
    components: {
      FoundMusic
    },
    created() {
      // var topHeight = document.body.scrollTop;
      // console.log(topHeight);
    },
    methods: {
      
    }
  }
</script>

<style>
  .FoundCalendar {
    margin-bottom: 100px;
  }
  .calendar {
    /* border: #000000 1px solid; */
    margin-right: 10px;
  }
  .good-luck {
    width: 100%;
    height: 40px;
    line-height: 40px;
    border: 1px solid #EEEEEE;
    margin-top: 10px;
    border-radius: 8px;
    /* text-align: center; */
    display: flex;
    justify-content: space-between;
  }
  .good-luck-title {
    margin-left: 10px;
    font-size: 12px;
  }
  .good-luck-to {
    margin-right: 10px;
    font-size: 12px;
    color: #aaaaaa;
  }
  .good-luck-to-title {
    margin-right: 3px;
  }
  .good-luck-to-ico {
    position: relative;
    top: 2px;
  }
  .news {
    /* border: #000000 1px solid; */
  }
  .news-item {
    width: 100%;
    height: 80px;
    /* border: #000000 1px solid; */
    position: relative;
  }
  .news-item-date {
    color: #AAAAAA;
    font-size: 12px;
    position: absolute;
    top: 12px;
  }
  .news-item-tag {
    color: rgb(243,163,93);
    background-color: rgb(255,241,238);
    position: absolute;
    top: 12px;
    font-size: 12px;
    left: 30px;
    padding: 0px 4px;
    border-radius: 5px;
  }
  .news-item-type {
    position: absolute;
    top: 12px;
    left: 30px;
    font-size: 12px;
    color: #777777;
    background-color: rgb(243,243,243);
    padding: 0px 4px;
    border-radius: 5px;
  }
  .news-item-title {
    position: absolute;
    top: 40px;
    font-size: 16px;
  }
  .news-item-ico-box {
    border: 1px solid #AAAAAA;
    position: absolute;
    top: 13px;
    right: 85px;
    border-radius: 50%;
    padding: 5px;
    width: 20px;
    height: 20px;
  }
  .news-item-ico {
    /* position: absolute;
    top: 30px;
    right: 85px; */
    font-size: 20px;
  }
  .news-item-comments {
    font-size: 12px;
    color: #AAAAAA;
    position: absolute;
    top: 35px;
    right: 5px;
  }
  .news-item-image {
    width: 65px;
    height: 65px;
    object-fit: cover;
    border-radius: 10px;
    position: absolute;
    right: 0px;
    top: 7.5px;
  }
</style>
