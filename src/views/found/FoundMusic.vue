<template>
  <div class="music">
    <div class="music-title">
      <slot name="title">
        <span class="music-title-content"><span class="iconfont music-ico">&#xe61a;</span>嘻哈精神 真实且有力</span>
        <div class="music-title-chick">
          <span><span class="iconfont music-title-chick-ico">&#xe611;</span>播放</span>
        </div>
      </slot>
    </div>
    <div class="music-content">
      <slot name="content">
        <div class="music-content-box" :style="{width: musicLists.length*350 + 'px'}">
          <div v-for="(item, index) in musicLists" class="music-content-item">
            <div class="music-content-item-list" v-for="(item2, index2) in item">
              <img src="~assets/image/17.jpg" class="music-content-item-list-img" v-if="index === 0 && index2 === 0" >
              <img src="~assets/image/20.jpg" class="music-content-item-list-img" v-if="index === 0 && index2 === 1" >
              <img src="~assets/image/21.jpg" class="music-content-item-list-img" v-if="index === 0 && index2 === 2" >
              <img src="~assets/image/18.jpg" class="music-content-item-list-img" v-if="index === 1 && index2 === 0" >
              <img src="~assets/image/22.jpg" class="music-content-item-list-img" v-if="index === 1 && index2 === 1" >
              <img src="~assets/image/19.jpg" class="music-content-item-list-img" v-if="index === 1 && index2 === 2" >
              <img src="~assets/image/17.jpg" class="music-content-item-list-img" v-if="index === 2 && index2 === 0" >
              <img src="~assets/image/18.jpg" class="music-content-item-list-img" v-if="index === 2 && index2 === 1" >
              <img src="~assets/image/19.jpg" class="music-content-item-list-img" v-if="index === 2 && index2 === 2" >
              <span class="iconfont music-content-item-list-img-ico">&#xe62d;</span>
              <span class="music-content-item-list-name">
                {{item2.name}}
                <span class="music-content-item-list-author">&nbsp;-&nbsp;{{item2.author}}</span>
              </span>
              <div class="music-content-item-list-tag">{{item2.tag}}</div>
              <div class="music-content-item-list-line" v-if="index2 !== 2"></div>
              <div class="music-content-item-list-type" v-if="item2.type !== undefined">{{item2.type}}</div>
              <span class="music-content-item-list-annotation">{{item2.annotation}}</span>
              <span class="iconfont music-content-item-list-ico" v-if="(item2.name.length + item2.author.length) < 20 && item2.annotation.length < 20">&#xe65a;</span>
              <div></div>
            </div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FoundMusic',
    data() {
      return {
        musicLists: [
          [
            {name: '给我乖', author: '孟佳', tag: '十万红心', annotation: ''},
            {name: '惨绿少年', author: 'Swang多雷/FOX胡天渝/Hayul海力', tag: '', type: 'SQ', annotation: '风度翩翩又温柔 福克斯一身好本领'},
            {name: '我的新衣', author: 'VaVa毛衍七/Ty./王倩倩', tag: '1w+评论', annotation: ''}
          ],
          [
            {name: '给我乖', author: '孟佳', tag: '十万红心', annotation: ''},
            {name: '惨绿少年', author: 'Swang多雷/FOX胡天渝/Hayul海力', tag: '', type: 'SQ', annotation: '风度翩翩又温柔 福克斯一身好本领'},
            {name: '我的新衣', author: 'VaVa毛衍七/Ty./王倩倩', tag: '1w+评论', annotation: ''}
          ],
          [
            {name: '给我乖', author: '孟佳', tag: '十万红心', annotation: ''},
            {name: '惨绿少年', author: 'Swang多雷/FOX胡天渝/Hayul海力', tag: '', type: 'SQ', annotation: '风度翩翩又温柔 福克斯一身好本领'},
            {name: '我的新衣', author: 'VaVa毛衍七/Ty./王倩倩', tag: '1w+评论', annotation: ''}
          ]
        ],
        // boxWidth: {width: this.musicLists.length*350'px;'}
      }
    },
    components: {

    },
    created() {

    },
    methods: {

    }
  }
</script>

<style>
  .music {
    width: 97%;
    height: 250px;
    background-color: #FFFFFF;
    margin-top: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 20px 0px 10px 3%;
  }
  .music-title {
    width: 100%;
    /* height: 100%; */
    position: relative;
    /* border: #000000 1px solid; */
  }
  .music-ico {
    font-size: 20px;
    color: #000000;
    margin-right: 5px;
    font-weight: 700;
    position: relative;
    top: 2px;
  }
  .music-title-content {
    font-size: 18px;
    color: #333333;
    font-weight: bold;
    font-family: "microsoft yahei";
  }
  .music-title-chick {
    position: absolute;
    right: 10px;
    top: 0px;
    border: 1px solid rgb(220,220,220);
    border-radius: 20px;
    padding: 2px 6px;
    font-size: 14px;
    color: #333333;
  }
  .music-title-chick-ico {
    font-size: 16px;
    color: #000000;
    font-weight: 700;
    position: relative;
    top: 1px;
  }
  .music-content {
    width: 100%;
    height: 90%;
    padding: ;
    /* border: #000000 1px solid; */
    overflow: scroll;
    margin-top: 5px;
  }
  .music-content-box {
    /* width: 1050px; */
    height: 100%;
    /* margin-top: 5px; */
    /* border: #000000 1px solid; */
    /* background-color: pink; */
    display: flex;
    justify-content: flex-start;
  }
  .music-content-item {
    width: 350px;
    height: 100%;

  }
  .music-content-item-list {
    width: 100%;
    height: 33%;
    position: relative;
    /* border: #000000 1px solid; */
  }
  .music-content-item-list-img {
    width: 55px;
    height: 55px;
    object-fit: cover;
    margin-top: 6px;
    border-radius: 10px;
  }
  .music-content-item-list-img-ico {
    position: absolute;
    top: 21px;
    left: 15px;
    font-size: 25px;
    color: rgba(255,255,255,0.6);
  }
  .music-content-item-list-name {
    position: absolute;
    top: 10px;
    left: 65px;
    font-size: 15px;
  }
  .music-content-item-list-author {
    color: #aaaaaa;
    font-size: 11px;
    /* margin-left: 10px; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 188px;
    display: inline-block;
    position: relative;
    top: 4px;
  }
  .music-content-item-list-tag {
    font-size: 12px;
    position: absolute;
    top: 32px;
    left: 65px;
    color: rgb(249,148,106);
    background-color: rgb(254,242,218);
    padding: 0px 5px;
    border-radius: 5px;
  }
  .music-content-item-list-line {
    width: 75%;
    height: 0.5%;
    background-color: rgb(248,248,248);
    position: absolute;
    left: 65px;
  }
  .music-content-item-list-type {
    color: rgb(255,80,80);
    font-size: 12px;
    position: absolute;
    top: 32px;
    left: 65px;
    border: 1px solid rgb(233,200,211);
    padding: 0px 2px;
    border-radius: 5px;
  }
  .music-content-item-list-annotation {
    font-size: 12px;
    color: #888888;
    position: absolute;
    top: 32px;
    left: 90px;
  }
  .music-content-item-list-ico {
    position: absolute;
    right: 30px;
    top: 18px;
    font-size: 25px;
    color: #AAAAAA;
  }
</style>
