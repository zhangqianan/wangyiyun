<template>
  <FoundMusic class="FoundMusic">
    <template v-slot:title>
      <span class="music-title-content">热门播客</span>
      <div class="music-title-chick">
        <span>更多<span class="iconfont music-title-chick-ico">&#xe626;</span></span>
      </div>
    </template>
    <template v-slot:content>
      <div class="music-content-box" :style="{width: musicLists.length*350 + 'px'}">
        <div v-for="(item, index) in musicLists" class="music-content-item">
          <div class="music-content-item-list" v-for="(item2, index2) in item">
            <img src="~assets/image/17.jpg" class="music-content-item-list-img" v-if="index === 4 && index2 === 0" >
            <img src="~assets/image/20.jpg" class="music-content-item-list-img" v-if="index === 4 && index2 === 1" >
            <img src="~assets/image/21.jpg" class="music-content-item-list-img" v-if="index === 4 && index2 === 2" >
            <img src="~assets/image/18.jpg" class="music-content-item-list-img" v-if="index === 3 && index2 === 0" >
            <img src="~assets/image/22.jpg" class="music-content-item-list-img" v-if="index === 3 && index2 === 1" >
            <img src="~assets/image/19.jpg" class="music-content-item-list-img" v-if="index === 3 && index2 === 2" >
            <img src="~assets/image/17.jpg" class="music-content-item-list-img" v-if="index === 2 && index2 === 0" >
            <img src="~assets/image/18.jpg" class="music-content-item-list-img" v-if="index === 2 && index2 === 1" >
            <img src="~assets/image/19.jpg" class="music-content-item-list-img" v-if="index === 2 && index2 === 2" >
            <img src="~assets/image/30.jpg" class="music-content-item-list-img" v-if="index === 1 && index2 === 0" >
            <img src="~assets/image/31.jpg" class="music-content-item-list-img" v-if="index === 1 && index2 === 1" >
            <img src="~assets/image/32.jpg" class="music-content-item-list-img" v-if="index === 1 && index2 === 2" >
            <img src="~assets/image/33.jpg" class="music-content-item-list-img" v-if="index === 0 && index2 === 0" >
            <img src="~assets/image/34.jpg" class="music-content-item-list-img" v-if="index === 0 && index2 === 1" >
            <img src="~assets/image/35.jpg" class="music-content-item-list-img" v-if="index === 0 && index2 === 2" >
            <span class="iconfont music-content-item-list-img-ico-type">&#xe62d;</span>
            <span class="music-content-item-list-name">
              {{item2.name}}
              <!-- <span class="music-content-item-list-author">&nbsp;-&nbsp;{{item2.author}}</span> -->
            </span>
            <div class="music-content-item-list-two">
              <span class="music-content-item-list-tag-podcast" v-if="item2.tag !== undefined && item2.tag !== ''">{{item2.tag}}</span>
              <span class="music-content-item-list-type-podcast" v-if="item2.type !== undefined && item2.type !== ''">{{item2.type}}</span>
              <span class="music-content-item-list-annotation-podcast">{{item2.annotation}}</span>
            </div>
            <!-- <div class="music-content-item-list-line" v-if="index2 !== 2"></div>
            <div class="music-content-item-list-type" v-if="item2.type !== undefined">{{item2.type}}</div>
            <span class="music-content-item-list-annotation">{{item2.annotation}}</span> -->
            <!-- <span class="iconfont music-content-item-list-ico" v-if="(item2.name.length + item2.author.length) < 20 && item2.annotation.length < 20">&#xe65a;</span> -->
            <div></div>
          </div>
        </div>
      </div>
    </template>
  </FoundMusic>
</template>

<script>
  import FoundMusic from './FoundMusic'
  export default {
    name: 'FoundPodcast',
    data() {
      return {
        musicLists: [
          [
            {name: '刻在我心底的名字', author: '', tag: '超1千人点赞', annotation: 'your highness'},
            {name: '不潮不用花钱', author: '', tag: '', type: '3D环绕', annotation: 'Uul_'},
            {name: '达尔文（完整版）', author: '', tag: '', type: '热门翻唱', annotation: '吴炳文Cookie翻唱集'}
          ],
          [
            {name: '后来的我们', author: '', tag: '超1300万播放', annotation: '我们的爱-林俊杰版'},
            {name: '碎银几两 ', author: '', tag: '', type: '3D环绕', annotation: '2022抖音热歌BGM MUSIC'},
            {name: '想你想你', author: '', tag: '', type: '音乐故事', annotation: '李峙电台'}
          ],
          [
            {name: '岁月不是偷走妈妈青春的小偷，是巴拉巴拉', author: '', tag: '', type: '歌曲翻唱', annotation: '日落与海'},
            {name: '友情岁月', author: '', tag: '', type: '儿歌', annotation: '儿歌大全'},
            {name: '钱塘湖春行', author: '', tag: '超100万播放', annotation: '抖音热歌翻唱~云边有个小卖铺'}
          ],
          [
            {name: '米津玄师', author: '', tag: '', type: '音乐故事', annotation: '让歌声温暖你心，让声音疗愈你心。'},
            {name: '通话故事《猴子捞月》', author: '', tag: '超20万播放', type: '', annotation: '且试天下 片尾曲'},
            {name: '【黑帮少爷爱上我】Free Fall-SLANIDH', author: '', tag: '', type: '热门翻唱', annotation: '你的星冰乐'}
          ],
          [
            {name: '清空万里 耐人寻味', author: '', tag: '超4千人点赞', annotation: 'two face （无杂）'},
            {name: '多想拥抱你', author: '', tag: '', type: '音乐解读', annotation: '音乐咖啡馆'},
            {name: 'Like A Ricochet 官方伴奏(Full Maddg)', author: '', tag: '', type: '音乐故事', annotation: '经典老歌'}
          ]
        ]
      }
    },
    components: {
      FoundMusic
    }
  }
</script>

<style>
  .FoundMusic {
    margin-bottom: 10px;
  }
  .music-content-item-list-img-ico-type {
    position: absolute;
    top: 35px;
    left: 28px;
    font-size: 22px;
    color: rgba(255,255,255,0.6);
  }
  .music-content-item-list-name {
    width: 280px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* border: #000000 1px solid; */
  }
  .music-content-item-list-two {
    position: absolute;
    top: 32px;
    left: 65px;
    /* border: 1px solid pink; */
  }
  .music-content-item-list-tag-podcast {
    font-size: 12px;
    /* position: absolute; */
    /* top: 32px; */
    /* left: 65px; */
    color: rgb(249,148,106);
    background-color: rgb(254,242,218);
    padding: 0px 5px;
    border-radius: 5px;
  }
  .music-content-item-list-type-podcast {
    /* color: rgb(255,80,80); */
    color: #AAAAAA;
    font-size: 12px;
    /* position: absolute; */
    /* top: 32px; */
    /* left: 65px; */
    /* border: 1px solid rgb(233,200,211); */
    border: 1px solid #eeeeee;
    padding: 0px 5px;
    border-radius: 8px;
    margin-right: 3px;
  }
  .music-content-item-list-annotation-podcast {
    font-size: 12px;
    color: #888888;
    /* position: absolute; */
    /* top: 32px; */
    /* left: 90px; */
  }
</style>
