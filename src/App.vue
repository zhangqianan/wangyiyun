<template>
  <router-view/>
  <div class="now-music">
    <div class="now-music-box">
      <div class="now-music-box-image-box">
        <img src="~assets/image/18.jpg" class="now-music-box-image">
      </div>
      <div class="now-music-box-title">
        <span class="now-music-box-title-name">布拉格广场 </span>
        <span class="now-music-box-title-author">- 蔡依林/周杰伦</span>
      </div>
      <div class="now-music-box-iconfont">
        <!-- <audio src="./assets/mp3/zhongerbing.mp3" controls="controls"></audio> -->
        <div class="now-music-box-iconfont-play-box"></div>
        <div class="now-music-box-iconfont-play-box-xia"></div>
        <span class="iconfont now-music-box-iconfont-play">&#xe65a;</span>
        <span class="iconfont now-music-box-iconfont-list">&#xe649;</span>
      </div>
    </div>
  </div>
  <nav>
    <router-link to="/">
      <div><span class="iconfont navImg">&#xe62c;</span></div>
      <div class="navContent"><span>发现</span></div>
    </router-link>
    <router-link to="/podcast">
      <div><span class="iconfont navImg">&#xe653;</span></div>
      <div class="navContent"><span>播客</span></div>
    </router-link>
    <router-link to="/mine">
      <div><span class="iconfont navImg">&#xe64d;</span></div>
      <div class="navContent"><span>我的</span></div>
    </router-link>
    <router-link to="/focus">
      <div><span class="iconfont navImg">&#xe64f;</span></div>
      <div class="navContent"><span>关注</span></div>
    </router-link>
    <router-link to="/community">
      <div><span class="iconfont navImg">&#xe67e;</span></div>
      <div class="navContent"><span>社区</span></div>
    </router-link>
  </nav>
</template>

<style>
  @import "assets/icon/iconfont.css";


  * {
    padding: 0;
    margin: 0;
  }

nav {
  position: fixed;
  display: flex;
  bottom: 0px;
  width: 100vw;
  height: 60px;
  background-color: #ffffff;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  font-size: 6px;
  /* border: 1px solid #000000; */
}

nav a {
  color: #999999;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: rgb(255,80,80);
}

.navImg {
  font-size: 28px;
}
.navContent {
  -webkit-transform: scale(0.6);
  font-weight: 500;
  /* font-weight: bolder; */
}
.now-music {
  width: 100%;
  height: 40px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 60px;
  border-top: #EEEEEE 1px solid;
  /* border: #42B983 1px solid; */
}
.now-music-box {
  position: relative;
}
.now-music-box-image {
  width: 26px;
  height: 26px;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  left: 20px;
  border: #000000 7px solid;
  animation: rotate 10s linear infinite;
}
@keyframes rotate{
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
.now-music-box-title {
  margin-left: 70px;
  height: 40px;
  line-height: 40px;
}
.now-music-box-title-name {
  font-size: 13px;
}
.now-music-box-title-author {
  font-size: 12px;
  color: #666666;
}
.now-music-box-iconfont {
  position: absolute;
  right: 20px;
  top: 0px;
  height: 40px;
  line-height: 40px;
}
.now-music-box-iconfont-play-box {
  display: inline-block;
  /* border: #000000 1px solid; */
  width: 25px;
  height: 12.5px;
  border-radius: 12.5px 12.5px 0 0;
  position: relative;
  top: -8px;
  left: 58px;
  /* transform: rotate(120deg); */
  z-index: -1;
  border: #000000 1px solid;
  /* background-color: #42B983; */
  /* transform-origin: 50% 0; */
  /* animation: play-box 10s linear infinite; */
}
.now-music-box-iconfont-play-box-xia {
  width: 25px;
  height: 12.5px;
  border-radius: 0 0 12.5px 12.5px;
  display: inline-block;
  position: relative;
  top: 5px;
  left: 31px;
  border: #000000 1px solid;
  z-index: -1;
}
@keyframes play-box{
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
.now-music-box-iconfont-play {
  font-size: 32px;
  position: relative;
  margin-right: 25px;
  top: 2px;
  color: #CCCCCC;
  font-weight: 200;
}
.now-music-box-iconfont-list {
  font-size: 25px;
  color: #666666;
}
</style>
