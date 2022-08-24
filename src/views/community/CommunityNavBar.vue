<template>
  <navBar>
    <template v-slot:left>
      <span class="iconfont liebiao">&#xe69d;</span>
    </template>
    <template v-slot:center>
      <div class="navBar-center">
        <div class="navBar-center-one" :class="{chooseClass: index === 0}" @click="changeList(0)">
          村民广场
          <div :class="{navBarCenterLine: index === 0}"></div>
        </div>
        <div class="navBar-center-one" :class="{chooseClass: index === 1}" @click="changeList(1)">
          视频
          <div :class="{navBarCenterLine: index === 1}"></div>
        </div>
        <div class="navBar-center-one" :class="{chooseClass: index === 2}" @click="changeList(2)">
          歌房
          <div :class="{navBarCenterLine: index === 2}"></div>
        </div>
      </div>
    </template>
    <template v-slot:right>
      <span class="iconfont editor">&#xe650;</span>
    </template>
  </navBar>
</template>

<script>
  import navBar from 'components/common/navBar'
  export default {
    name: 'CommunityNavBar',
    data() {
      return {
        index: 0
      }
    },
    components: {
      navBar
    },
    methods: {
      changeList(index) {
        this.index = index;
      }
    }
  }
</script>

<style>
  .navBar-center {
    display: flex;
    justify-content:space-around;
    /* border: #000000 1px solid; */
    width: 100%;
    color: #888888;
  }
  .editor {
    font-size: 20px;
    color: #fff;
    width: 40px;
    height: 40px;
    background-color: rgb(252,28,26);
    border-radius: 50%;
    border: 4px rgb(252,28,26) solid;
  }
  .chooseClass {
    font-weight: 600;
    color: #000000;
  }
  .navBar-center {
    font-size: 17px;
  }
  .navBar-center-one {
    /* width: 100%; */
  }
  .navBarCenterLine {
    width: 100%;
    height: 6px;
    background: linear-gradient(to right, rgb(252,28,26), rgb(254,120,120));
    border-radius: 10px;
    position: relative;
    top: -19px;
    z-index: -1;
  }
</style>
