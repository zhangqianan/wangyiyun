<template>
  <div class="collection">
    <MinePlaylist>
      <template v-slot:title>
        <div></div>
      </template>
      <template v-slot:already>
        <div class="playlist-create-already-title">
          <div class="playlist-create-already-title-left">收藏歌单（{{collectionList.length}}个）</div>
          <div>
            <span class="iconfont playlist-create-already-title-two">&#xe64b;</span>
          </div>
        </div>
      </template>
      <template v-slot:list>
        <div class="playlist-create-already-list" v-for="(item, index) in collectionList">
          <div>
            <img src="~assets/image/21.jpg" alt="" class="playlist-create-already-list-image" v-if="index === 0">
            <img src="~assets/image/22.jpg" alt="" class="playlist-create-already-list-image" v-if="index === 1">
            <img src="~assets/image/25.jpg" alt="" class="playlist-create-already-list-image" v-if="index === 2">
            <img src="~assets/image/26.jpg" alt="" class="playlist-create-already-list-image" v-if="index === 3">
            <div>
              <span class="playlist-create-already-list-name">{{item.name}}</span>
              <span class="playlist-create-already-list-number" >{{item.number}}<span v-if="index !== 8">首，by {{item.by}}</span></span>
            </div>
          </div>
          <div>
            <span class="iconfont playlist-create-already-list-ico">&#xe64b;</span>
          </div>
        </div>
      </template>
    </MinePlaylist>
  </div>
</template>

<script>
  import MinePlaylist from './MinePlaylist'
  export default {
    name: 'MineCollection',
    data() {
      return {
        collectionList: [
          {name: '曾轶可的歌，总令人心动|话语私人定制', number: 35, by: '云音乐官方歌单'},
          {name: '巨毒|SKAM第三季BGM收录|巴拉巴拉', number: 47, by: 'CHEESE_CHIZU'},
          {name: 'SKAM羞耻||1~4季||BGM大赏', number: 376, by: '枫兔0806'},
          {name: ' | 完结！ |SKM（羞耻）BGM', number: 265, by: '撒娇汽水猪'}
        ]
      }
    },
    components: {
      MinePlaylist
    },
    methods: {
      changeList(num) {
        if(num === 0){
          this.listIndex = 0;
        }else if(num === 1){
          this.listIndex = 1;
        }else if(num === 2){
          this.listIndex = 2;
        }
      }
    }
  }
</script>

<style>
  .collection {
    /* margin-bottom: 100px; */
  }
</style>
