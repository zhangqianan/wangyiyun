<template>
  <div class="recommended">
    <div class="recommended-look">
      <div class="recommended-item" v-for="(item, index) in recList">
          <div class="recommended-background">
            <span class="iconfont recommended-ico" v-if="index === 0">&#xe62b;</span>
            <span class="iconfont recommended-ico" v-if="index === 1">&#xe632;</span>
            <span class="iconfont recommended-ico" v-if="index === 2">&#xe62e;</span>
            <span class="iconfont recommended-ico" v-if="index === 3">&#xe634;</span>
            <span class="iconfont recommended-ico" v-if="index === 4">&#xe63d;</span>
            <span class="iconfont recommended-ico" v-if="index === 5">&#xe644;</span>
            <span class="iconfont recommended-ico" v-if="index === 6">&#xe641;</span>
            <span class="iconfont recommended-ico" v-if="index === 7">&#xe640;</span>
            <span class="iconfont recommended-ico" v-if="index === 8">&#xe63e;</span>
          </div>
          <span class="recommended-content">{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FoundRecommended',
    data() {
      return {
        recList: [
          {img: '', title: '每日推荐'},
          {img: '', title: '私人FM'},
          {img: '', title: '歌单'},
          {img: '', title: '排行榜'},
          {img: '', title: '直播'},
          {img: '', title: '数字专辑'},
          {img: '', title: '有声书'},
          {img: '', title: '关注新歌'},
          {img: '', title: '歌房'},
        ]
      }
    },
  }
</script>

<style>
  .recommended {
    width: 94%;
    height: 100px;
    background-color: #FFFFFF;
    /* border: 1px solid #000000; */
    /* margin: 5px; */
    padding: 0 3% 3% 3%;
    /* display: flex;
    justify-content: flex-start; */
    overflow: scroll;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .recommended-look {
    height: 100px;
    width: 200%;
    /* border: 1px solid #000000; */
    display: flex;
    justify-content: flex-start;
  }
  .recommended-item {
    width: 80px;
    height: 100%;
    /* padding: 10px; */
    /* margin: 10px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* border: 1px solid #000000; */
    align-items: center;
  }
  .recommended-background {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgb(254,242,242);
    margin-bottom: 10px;
    text-align: center;
    line-height: 60px;
    border: rgba(0,0,0,0.02) 1px solid;
    /* box-shadow: 1px 1px 2px rgba(0,0,0,0.08),
                -1px -1px 2px rgba(0,0,0,0.08); */
  }
  .recommended-content {
    color: #999999;
    font-size: 14px;
  }
  .recommended-ico {
    font-size: 36px;
    color: rgb(255,80,80);
  }
</style>
