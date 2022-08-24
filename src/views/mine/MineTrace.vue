<template>
  <div class="trace-all">
    <div class="trace">
      <div class="trace-list">
        <div class="trace-list-one">
          <div class="trace-list-one-single">
            <span class="iconfont trace-list-one-single-ico">&#xe62d;
              <div class="trace-list-one-single-ico-layer"></div>
            </span>
            <span class="trace-list-one-single-content">最近播放</span>
          </div>
          <div class="trace-list-one-single">
            <span class="iconfont trace-list-one-single-ico">&#xe641;
              <div class="trace-list-one-single-ico-layer"></div>
            </span>
            <span class="trace-list-one-single-content">本地/下载</span>
          </div>
          <div class="trace-list-one-single">
            <span class="iconfont trace-list-one-single-ico">&#xe63e;
              <div class="trace-list-one-single-ico-layer"></div>
            </span>
            <span class="trace-list-one-single-content">云盘</span>
          </div>
          <div class="trace-list-one-single">
            <span class="iconfont trace-list-one-single-ico">&#xe62f;
              <div class="trace-list-one-single-ico-layer"></div>
            </span>
            <span class="trace-list-one-single-content">已购</span>
          </div>
        </div>
        <div class="trace-list-one">
          <div class="trace-list-one-single">
            <span class="iconfont trace-list-one-single-ico">&#xe644;
              <div class="trace-list-one-single-ico-layer"></div>
            </span>
            <span class="trace-list-one-single-content">我的好友</span>
          </div>
          <div class="trace-list-one-single">
            <span class="iconfont trace-list-one-single-ico">&#xe640;
              <div class="trace-list-one-single-ico-layer"></div>
            </span>
            <span class="trace-list-one-single-content">收藏和赞</span>
          </div>
          <div class="trace-list-one-single">
            <span class="iconfont trace-list-one-single-ico">&#xe62c;
              <div class="trace-list-one-single-ico-layer"></div>
            </span>
            <span class="trace-list-one-single-content">我的播客</span>
          </div>
          <div class="trace-list-one-single">
            <span class="iconfont trace-list-one-single-ico">&#xe63d;
              <div class="trace-list-one-single-ico-layer"></div>
            </span>
            <span class="trace-list-one-single-content">音乐罐子</span>
          </div>
        </div>
      </div>
      <div class="trace-live">
        <div class="trace-live-content">
          <div class="trace-live-content-box">
            <div class="trace-live-content-image-box">
              <img src="~assets/image/45.jpg" class="trace-live-content-image">
            </div>
            <div>
              <p class="bounce">
                <template v-for="(item,index) in loadText">
                  <span class="letter">{{item}}</span>
                </template>
              </p>
            </div>
            <span class="trace-live-content-text">观看直播领黑胶</span>
          </div>
          <span class="iconfont trace-live-content-ico">&#xe63c;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MineTrace',
    data() {
      return {
        name: '合欢树上的猫',
        focus: 5,
        fans: 0,
        level: 8,
        loadText: ['.', 'L', 'I', 'V', 'E']
      }
    }
  }
</script>

<style>
  .trace-all {
    width: 94%;
    height: 211px;
    margin: 20px 3% 0px 3%;
    border-radius: 10px;
    /* border: #000000 1px solid; */
  }
  .trace {
    width: 100%;
    height: 150px;
    background-color: #FFFFFF;
    border-radius: 10px 10px 0px 0px;
  }
  .trace-list {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px 15px;
    height: 130px;
    /* width: 100%; */
    /* height: 100%; */
  }
  .trace-list-one {
    display: flex;
    justify-content: space-around;
  }
  .trace-list-one-single {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    /* background-image: linear-gradient(to top, transparent, #ffffff); */
  }
  .trace-list-one-single-ico {
    color: rgb(252,58,58);
    /* color: transparent; */
    font-size: 34px;
    /* background-image: linear-gradient(to top, rgb(252,58,58), #ffffff); */
    background-clip: -webkit-text;
    -webkit-background-clip: -webkit-text;
    position: relative;
  }
  .trace-list-one-single-ico-layer {
    position: absolute;
    /* border: #000000 1px solid; */
    width: 100%;
    height: 100%;
    top: 0px;
    background-image: linear-gradient(45deg, transparent 40%, #ffffff);
  }
  .trace-list-one-single-content {
    font-size: 12px;
    color: #777777;
  }
  .trace-live {
    width: 100%;
    height: 60px;
    background-color: #FFFFFF;
    margin-top: 1px;
    border-radius: 0px 0px 10px 10px;
    /* border: #000000 1px solid; */
    /* line-height: 60px; */
  }
  .trace-live-content {
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid #000000; */
    height: 60px;

  }
  .trace-live-content-image-box {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: #000000 1px solid;
    /* position: fixed; */
    animation: borders 0.75s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
  }
  .trace-live-content-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgb(244,65,63);
    /* animation: borders 0.75s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate; */
  }
  .trace-live-content-ico {
    font-size: 24px;
    color: #cccccc;
  }
  .trace-live-content-box {
    height: 60px;
    line-height: 60px;
    display: flex;
    align-items: center;
  }
  .trace-live-content-text {
    margin-left: -15px;
    font-size: 14px;
  }
  /* 文字跳动效果 */
  .bounce {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  	color: #000;
    height: 100%;
    white-space: nowrap;
    position: relative;
    left: -35px;
    top: -15px;
    /* border: #000000 1px solid; */
  }
  .letter {
    animation: bounce 0.75s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
    display: inline-block;
    transform: translate3d(0, 0, 0);
    margin-top: 0.5em;
    text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
    font: normal 500 20px 'Varela Round', sans-serif;
    font-size: 12px;
    /* position: absolute; */
    color: #FFFFFF;
  }
  .letter:nth-child(1) {
    animation-delay: 0s;
  }
  .letter:nth-child(2) {
    animation-delay: 0.1s;
  }
  .letter:nth-child(3) {
    animation-delay: 0.2s;
  }
  .letter:nth-child(4) {
    animation-delay: 0.3s;
  }
  .letter:nth-child(5) {
    animation-delay: 0.4s;
  }
  @keyframes bounce {
    0% {
      transform: translate3d(0, 0, 0);
      text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
    }
    100% {
      transform: translate3d(0, -5px, 0);
      text-shadow: rgba(255, 255, 255, 0.4) 0 1em 0.35em;
    }
  }
  @keyframes borders{
    from{
      border: 3px solid transparent;
    }
    to{
      border: 3px solid pink;
    }
  }
</style>
