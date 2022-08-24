<template>
  <navBar class="topNavBar" :style="{'--bgColor': backgroundColor}">
    <template v-slot:left>
      <span class="iconfont liebiao">&#xe69d;</span>
    </template>
    <template v-slot:center>
      <div class="inputBox" :style="{'--inputColor': inputColor}">
        <input type="text" class="centerInput">
        <div class="searchBox">
          <span class="iconfont search">&#xe652;</span>
          <span class="searchContent">只要平凡 </span>
          <span class="searchContent author">张杰</span>
        </div>
      </div>
    </template>
    <template v-slot:right>
      <span class="iconfont liebiao">&#xe6a3;</span>
    </template>
  </navBar>
</template>

<script>
  import navBar from 'components/common/navBar'
  export default {
    name: 'FoundNavBar',
    data() {
      return {
        backgroundColor: 'transparent',
        inputColor: '#FFFFFF'
      }
    },
    components: {
      navBar,
    },
    mounted() {
      window.addEventListener('scroll', this.scrollTop);
    },
    methods: {
      scrollTop() {
        var topHeight = document.documentElement.scrollTop;
        if(topHeight > 0){
          this.backgroundColor = '#ffffff';
          this.inputColor = 'rgb(244,244,244)'
        }else {
          this.backgroundColor = 'transparent';
          this.inputColor = '#FFFFFF'
        }
      }
    }
  }
</script>

<style>
  .topNavBar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: var(--bgColor);
  }
  .liebiao {
    color: #000000;
    font-size: 22px;
  }
  .inputBox {
    /* border: 1px solid #000000; */
    background-color: var(--inputColor);
    width: 100%;
    height: 38px;
    line-height: 38px;
    border-radius: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .centerInput {
    /* border: 1px solid #000000; */
    width: 100%;
    height: 38px;
    /* height: 100%; */
    border: none;
    /* border-radius: 38px; */
    float: left;
    background-color: transparent;
  }
  .searchBox {
    position: absolute;
    color: #999999;
  }
  .search {
    font-size: 18px;
    margin-right: 5px;
    position: relative;
    top: 2px;
  }
  .searchContent {
    font-size: 13px;
  }
  .author {
    color: rgb(205,205,205);
  }
  input:focus{
      outline: none;
  }
</style>
