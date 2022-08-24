<template>
  <div id="body" :style="{'--bgColor': backgroundColor, '--bgImage': bgImage}">
    <FoundNavBar></FoundNavBar>
    <shuffling></shuffling>
    <FoundRecommended></FoundRecommended>
    <FoundPlayList></FoundPlayList>
    <FoundMusic></FoundMusic>
    <FoundRadar></FoundRadar>
    <FoundLook></FoundLook>
    <FoundPodcast></FoundPodcast>
    <FoundNew></FoundNew>
    <FoundCalendar></FoundCalendar>
  </div>
</template>

<script>
  import FoundNavBar from './FoundNavBar'
  import shuffling from 'components/common/shuffling'
  import FoundRecommended from './FoundRecommended'
  import FoundPlayList from './FoundPlayList'
  import FoundMusic from './FoundMusic'
  import FoundRadar from './FoundRadar'
  import FoundLook from './FoundLook'
  import FoundPodcast from './FoundPodcast'
  import FoundNew from './FoundNew'
  import FoundCalendar from './FoundCalendar'
  export default {
    name: 'FoundView',
    data() {
      return {
        // bgColor: 'linear-gradient(to bottom, rgb(228,228,228), #ffffff, #ffffff)'
        backgroundColor: '',
        bgImage: 'linear-gradient(to bottom, rgb(228,228,228), #ffffff, #ffffff)'
      }
    },
    components: {
      FoundNavBar,
      shuffling,
      FoundRecommended,
      FoundPlayList,
      FoundMusic,
      FoundRadar,
      FoundLook,
      FoundPodcast,
      FoundNew,
      FoundCalendar
    },
    mounted() {
      window.addEventListener('scroll', this.scrollTop);
    },
    created() {

    },
    methods: {
      scrollTop() {
        var topHeight = document.documentElement.scrollTop;
        if(topHeight > 0){
          this.backgroundColor = 'rgb(244,244,244)';
          this.bgImage = '';
        }else {
          this.backgroundColor = '';
          this.bgImage = 'linear-gradient(to bottom, rgb(228,228,228), #ffffff, #ffffff)';
        }
        // console.log(topHeight);
      }
    }
  }
</script>

<style>
  #body::before {
    content: '';
    position: fixed;
    z-index: -1;
    background-size: 40% auto;
    background-image: var(--bgImage);
    background-color: var(--bgColor);
    width: 100%;
    height: 40%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  #body::after {
    content: '';
    position: fixed;
    z-index: -1;
    background-size: 60% auto;
    background-color: rgb(244,244,244);
    width: 100%;
    height: 60%;
    left: 0;
    top: 40%;
    right: 0;
    bottom: 0;
  }

</style>
