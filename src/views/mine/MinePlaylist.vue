<template>
  <div class="playlist-title playlist-title-sliding" v-if="fixedTitle">
    <div :class="{listShow : listIndex === 0}" class="playlist-title-text" @click="changeList(0)">
      创建歌单
      <div class="playlist-title-line" v-if="listIndex === 0"></div>
    </div>
    <div>|</div>
    <div :class="{listShow : listIndex === 1}" class="playlist-title-text" @click="changeList(1)">
      收藏歌单
      <div class="playlist-title-line" v-if="listIndex === 1"></div>
    </div>
    <div>|</div>
    <div :class="{listShow : listIndex === 2}" class="playlist-title-text" @click="changeList(2)">
      歌单助手
      <div class="playlist-title-line" v-if="listIndex === 2"></div>
    </div>
  </div>
  <div class="playlist">
    <slot name="title">
      <div class="playlist-title">
        <div :class="{listShow : listIndex === 0}" class="playlist-title-text" @click="changeList(0)">
          创建歌单
          <div class="playlist-title-line" v-if="listIndex === 0"></div>
        </div>
        <div>|</div>
        <div :class="{listShow : listIndex === 1}" class="playlist-title-text" @click="changeList(1)">
          收藏歌单
          <div class="playlist-title-line" v-if="listIndex === 1"></div>
        </div>
        <div>|</div>
        <div :class="{listShow : listIndex === 2}" class="playlist-title-text" @click="changeList(2)">
          歌单助手
          <div class="playlist-title-line" v-if="listIndex === 2"></div>
        </div>
      </div>
    </slot>
    <div class="playlist-create">
      <div class="playlist-create-already">
        <slot name="already">
          <div class="playlist-create-already-title">
            <div class="playlist-create-already-title-left">创建歌单（{{alreadList.length-1}}个）</div>
            <div>
              <span class="iconfont playlist-create-already-title-one">&#xe6a9;</span>
              <span class="iconfont playlist-create-already-title-two">&#xe64b;</span>
            </div>
          </div>
        </slot>
        <slot name="list">
          <div class="playlist-create-already-list" v-for="(item, index) in alreadList">
            <div>
              <img src="~assets/image/17.jpg" alt="" class="playlist-create-already-list-image" v-if="index === 0">
              <img src="~assets/image/20.jpg" alt="" class="playlist-create-already-list-image" v-if="index === 1">
              <img src="~assets/image/23.jpg" alt="" class="playlist-create-already-list-image" v-if="index === 2">
              <img src="~assets/image/24.jpg" alt="" class="playlist-create-already-list-image" v-if="index === 3">
              <img src="~assets/image/28.jpg" alt="" class="playlist-create-already-list-image" v-if="index === 4">
              <img src="~assets/image/42.jpg" alt="" class="playlist-create-already-list-image" v-if="index === 5">
              <img src="~assets/image/12.jpg" alt="" class="playlist-create-already-list-image" v-if="index === 6">
              <img src="~assets/image/16.jpg" alt="" class="playlist-create-already-list-image" v-if="index === 7">
              <div class="playlist-create-already-list-add" v-if="index === 8">
                <span class="iconfont playlist-create-already-list-add-ico">&#xe6a9;</span>
              </div>
              <div>
                <span class="playlist-create-already-list-name">{{item.name}}</span>
                <span class="playlist-create-already-list-number" >{{item.number}}<span v-if="index !== 8">首</span></span>
              </div>
            </div>
            <div>
              <span class="iconfont playlist-create-already-list-ico">&#xe64b;</span>
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MinePlaylist',
    data() {
      return {
        listIndex: 0,
        alreadList: [
          {name: '你最珍贵', number: 3},
          {name: '合欢树上的猫的2021年年度歌单', number: 10},
          {name: '洗澡', number: 15},
          {name: '合欢树上的猫的2020年度歌单', number: 9},
          {name: '合欢树上的猫的2019年度歌单', number: 10},
          {name: 'SdanyLee', number: 20},
          {name: '你怎么舍得我难过', number: 4},
          {name: '合欢树上的猫的年度歌单', number: 10},
          {name: '导入外部歌单', number: '轻松导入其他APP里的歌单'}
        ],
        fixedTitle: false
      }
    },
    components: {
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
      },
      scrollTop() {
        let scrollNumber = document.documentElement.scrollTop;
        if(scrollNumber > 532){
          this.fixedTitle = true;
        }else {
          this.fixedTitle = false;
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.scrollTop)
    }
  }
</script>

<style>
  .playlist-title {
    /* margin: 20px; */
    margin: 5%;
    display: flex;
    justify-content: space-around;
    font-size: 15px;
    color: #777777;
    /* border: #000000 1px solid; */
  }
  .playlist-title-sliding {
    background-color: #FFFFFF;
    margin: 0px;
    padding: 5%;
    position: fixed;
    top: 49px;
    width: 90%;
    z-index: 2;
  }
  .listShow {
    color: #000000;
    font-weight: 700;
  }
  .playlist-title-line {
    width: 68px;
    height: 7px;
    background-image: linear-gradient(to right, rgb(245,63,63), rgb(255,121,121));
    border-radius: 20px;
    position: absolute;
    top: 15px;
    left: -3px;
    z-index: -1;
  }
  .playlist-title-text {
    position: relative;
  }
  .playlist-create {
    margin-top: 20px;
    width: 94%;
    margin: 0px 3%;
    background-color: #FFFFFF;
    border-radius: 10px;
    margin-bottom: 20px;
    /* padding: 20px; */
  }
  .playlist-create-already {
    width: 90%;
    height: 100%;
    padding: 5%;
  }
  .playlist-create-already-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: #000000 1px solid; */
  }
  .playlist-create-already-title-left {
    font-size: 13px;
    color: #888888;
  }
  .playlist-create-already-title-one {
    margin-right: 20px;
    font-size: 21px;
    color: #888888;
  }
  .playlist-create-already-title-two {
    font-size: 21px;
    color: #888888;
  }
  .playlist-create-already-list {
    width: 100%;
    height: 80px;
    /* border: #000000 1px solid; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .playlist-create-already-list-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 10px;
  }
  .playlist-create-already-list-add {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: rgb(243,243,243);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .playlist-create-already-list-add-ico {
    font-size: 29px;
    font-weight: 100;
  }
  .playlist-create-already-list-name {
    position: absolute;
    top: 20px;
    left: 60px;
    font-size: 13px;
  }
  .playlist-create-already-list-number {
    position: absolute;
    top: 40px;
    left: 60px;
    font-size: 12px;
    color: #999999;
  }
  .playlist-create-already-list-ico {
    font-size: 21px;
    color: #888888;
  }

</style>
