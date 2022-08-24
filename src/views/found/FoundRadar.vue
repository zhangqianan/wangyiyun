<template>
  <FoundPlayList class="FoundRadar">
    <template v-slot:title>
      <span class="playList-title-left">{{name}}的雷达歌单</span>
    </template>
    <template v-slot:content>
      <div class="playList-box" :style="'width: (playLists.length * 120)px;'">
          <div class="playList-item" v-for="(item, index) in playLists">
            <img src="~assets/image/29.jpg" class="playList-img" v-if="index === 0">
            <img src="~assets/image/30.jpg" class="playList-img" v-if="index === 1">
            <img src="~assets/image/31.jpg" class="playList-img" v-if="index === 2">
            <img src="~assets/image/32.jpg" class="playList-img" v-if="index === 3">
            <img src="~assets/image/33.jpg" class="playList-img" v-if="index === 4">
            <img src="~assets/image/34.jpg" class="playList-img" v-if="index === 5">
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
    name: 'FoundRadar',
    data() {
      return {
        name: '合欢树上的猫',
        playLists: [
          {tag: '话语私人定制', title: '曾轶可的歌，总令人心动'},
          {tag: '时光雷达', title: '还在听《认真的雪》吗'},
          {tag: '乐迷雷达', title: '王心凌，蔡依林和更多好听的'},
          {tag: '新歌雷达', title: '徐秉龙喊你来听新歌'},
          {tag: '宝藏雷达', title: '惊喜总出现于不经意间'},
          {tag: '都市夜行', title: '复古迷情与都市夜晚的邂逅'}
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
  .FoundRadar {
    margin-bottom: 10px;
    border-radius: 10px;
  }
</style>
