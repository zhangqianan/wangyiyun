<template>
  <FoundPlayList class="FoundLook">
    <template v-slot:title>
      <span class="playList-title-left">LOOK直播</span>
    </template>
    <template v-slot:content>
      <div class="playList-box" :style="{width: playLists.length*120 + 'px'}">
          <div class="playList-item" v-for="(item, index) in playLists">
            <img src="~assets/image/23.jpg" class="playList-img" v-if="index === 0">
            <img src="~assets/image/24.jpg" class="playList-img" v-if="index === 1">
            <img src="~assets/image/25.jpg" class="playList-img" v-if="index === 2">
            <img src="~assets/image/26.jpg" class="playList-img" v-if="index === 3">
            <img src="~assets/image/27.jpg" class="playList-img" v-if="index === 4">
            <img src="~assets/image/28.jpg" class="playList-img" v-if="index === 5">
            <div class="playList-item-title">
              <span class="">{{item.title}}</span>
            </div>
          </div>
      </div>
    </template>
  </FoundPlayList>
</template>

<script>
  import FoundPlayList from './FoundPlayList'
  export default {
    name: 'FoundLook',
    data() {
      return {
        playLists: [
          {tag: '话语私人定制', title: '2022最火热门演唱直播间'},
          {tag: '时光雷达', title: '夹子音天花板'},
          {tag: '乐迷雷达', title: '来听温暖的声音~'},
          {tag: '新歌雷达', title: '你的邻家弟弟已上线，新人唱歌巴拉巴拉'},
          {tag: '宝藏雷达', title: '音乐之声FM02'},
          {tag: '都市夜行', title: '一定听过的话语流行演唱中'}
        ]
      }
    },
    components: {
      FoundPlayList,
    },
    created() {

    },
    methods: {

    }
  }
</script>

<style>
  .FoundLook {
    margin-bottom: 10px;
    border-radius: 10px;
  }
</style>
