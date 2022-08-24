<template>
  <div class="likes">
    <div class="likes-box">
      <div class="likes-left">
        <div><img src="~assets/image/12.jpg" class="likes-left-image" ></div>
        <div class="likes-left-content">
          <span class="likes-left-title">我喜欢的音乐</span>
          <span class="likes-left-num">1首</span>
        </div>
      </div>
      <div class="likes-right">
        <span class="iconfont likes-right-ico">&#xe69e;</span>
        <span class="likes-right-text">心动模式</span>
        <span class="likes-right-symbol">~</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MineLikes',
    data() {
      return {
        
      }
    }
  }
</script>

<style>
  .likes {
    width: 94%;
    height: 100px;
    margin: 20px 3% 0px 3%;
    background-color: #FFFFFF;
    /* border: #000000 1px solid; */
    border-radius: 10px;
    display: flex;
    align-items: center;
  }
  .likes-box {
    width: 94%;
    height: 80px;
    padding: 0px 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: #000000 1px solid; */
    position: relative;
  }
  .likes-left {

    height: 60px;
    line-height: 60px;
    /* border: #000000 1px solid; */
    /* width: 180px; */
    /* display: flex; */
    /* justify-content: flex-start; */
  }
  .likes-left-image {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    object-fit: cover;
  }
  .likes-left-title {
    color: #333333;
    font-size: 14px;
    font-weight: 700;
    position: absolute;
    /* width: 100px; */
    /* height: 60px; */
    /* margin-left: 20px; */
    top: 0px;
    left: 85px;
  }
  .likes-left-num {
    color: #AAAAAA;
    position: absolute;
    font-size: 12px;
    left: 85px;
    top: 20px;
  }
  .likes-right {
    border: #CCCCCC 1px solid;
    padding: 2px 7px;
    font-size: 12px;
    border-radius: 20px;
    position: relative;
  }
  .likes-right-ico {
    font-size: 16px;
    margin-right: 3px;
  }
  .likes-right-symbol {
    color: rgb(252,58,58);
    position: absolute;
    left: 11px;
    top: 1px;
  }
</style>
