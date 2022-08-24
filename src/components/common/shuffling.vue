<template>
  <div class="shuffling" :style="{'--bgColor': backgroundColor}">
    <div class="shuffling-img">
      <img src="~assets/image/1.jpg" v-if="imgIndex === 0">
      <img src="~assets/image/2.jpg" v-if="imgIndex === 1">
      <img src="~assets/image/3.jpg" v-if="imgIndex === 2">
      <img src="~assets/image/4.jpg" v-if="imgIndex === 3">
      <img src="~assets/image/5.jpg" v-if="imgIndex === 4">
      <img src="~assets/image/6.jpg" v-if="imgIndex === 5">
      <img src="~assets/image/7.jpg" v-if="imgIndex === 6">
      <img src="~assets/image/11.jpg" v-if="imgIndex === 7">
    </div>
    <div class="shuffling-bottom">
      <div v-for="(item, index) in imgUrl" class="bottom-square" :class="{'selected' : index === imgIndex}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'shuffling',
    data() {
      return {
        timed: null,
        imgUrl: [
          'src/assets/image/1.jpg',
          'src/assets/image/2.jpg',
          'src/assets/image/3.jpg',
          'src/assets/image/4.jpg',
          'src/assets/image/5.jpg',
          'src/assets/image/6.jpg',
          'src/assets/image/7.jpg',
          'src/assets/image/11.jpg'
        ],
        imgIndex: 0,
        backgroundColor: 'transparent'
      }
    },
    created() {
      this.imageshuffling();
    },
    methods: {
      //图片轮播定时任务
      imageshuffling() {
        this.timed = setInterval(() => {
          // console.log('这里是图片轮播图')
          if(this.imgIndex === 7){
            this.imgIndex = 0;
          }else{
            this.imgIndex++;
          }
        }, 5000)
      },
      scrollTop() {
        var topHeight = document.documentElement.scrollTop;
        if(topHeight > 0){
          this.backgroundColor = '#FFFFFF';
        }else {
          this.backgroundColor = 'transparent';
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.scrollTop);
    },
  }
</script>

<style>
  .shuffling {
    width: 92%;
    height: 140px;
    /* border: 1px solid #000000; */
    padding: 4%;
    margin-top: 49px;
    background-color: var(--bgColor);
  }
  .shuffling-img {
    width: 100%;
    height: 100%;
    position: relative;
    /* background: url('assets/image/1.jpg') no-repeat center center;
    background-size: cover; */

  }
  .shuffling-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    position: absolute;
  }
  .shuffling-bottom {
    /* position: absolute;
    bottom: 10px; */
    position: relative;
    top: -100%;
    width: 100%;
    height: 100%;
    /* border: #000000 1px solid; */
    display: flex;
    justify-content: center;
  }
  .bottom-square {
    width: 8px;
    height: 1px;
    margin: 130px 3px;
    background-color: #999999;
    border-radius: 5px;
    /* z-index: 1; */
  }
  .selected {
    background-color: #FFFFFF;
    /* height: 2px; */
    /* width: 12px; */
    box-shadow: 2px 2px rgba(255,255,255,0.08);
  }
</style>
