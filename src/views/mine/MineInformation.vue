<template>
  <div class="mine-information">
    <img src="~assets/image/31.jpg" class="mine-information-image" >
    <div class="mine-information-state">+ 添加状态</div>
    <div class="mine-information-triangle"></div>
    <div class="mine-information-name">
      <span class="mine-information-name-content">{{name}}</span>
      <div class="mine-information-name-vip">vip开通></div>
    </div>
    <div class="mine-information-level-box">
      <div class="mine-information-focus">{{focus}} 关注</div>
      <div class="mine-information-line"></div>
      <div class="mine-information-fans">{{fans}} 粉丝</div>
      <div class="mine-information-line"></div>
      <div class="mine-information--level">Lv.{{level}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MineInformation',
    data() {
      return {
        name: '合欢树上的猫',
        focus: 5,
        fans: 0,
        level: 8
      }
    },
    components: {
      
    }
  }
</script>

<style>
  .mine-information {
    width: 94%;
    height: 110px;
    margin: 0px 3%;
    margin-top: 60px;
    padding-top: 60px;
    background-color: #FFFFFF;
    border-radius: 10px;
    position: relative;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
  }
  .mine-information-image {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
    position: relative;
    top: -40px;
   /* position: absolute;
    top: -40px;
    left: 40%; */
  }
  .mine-information-state {
    font-size: 12px;
    /* position: absolute;
    top: -72px;
    left: 40%; */
    background-color: #FFFFFF;
    border-radius: 20px;
    padding: 2px 6px;
    position: relative;
    top: -142px;
  }
  .mine-information-triangle {
    width: 0px;
    height: 0px;
    border-top: #FFFFFF 6px solid;
    border-bottom: transparent 6px solid;
    border-left: transparent 6px solid;
    border-right: transparent 6px solid;
   /* position: absolute;
    top: -53px;
    left: 49%; */
    position: relative;
    top: -142px;
  }
  .mine-information-name {
    display: flex;
    justify-content: center;
    position: relative;
    top: -60px;
  }
  .mine-information-name-content {
    font-size: 17px;
    font-weight: 700;
  }
  .mine-information-name-vip {
    height: 18px;
    line-height: 18px;
    font-size: 12px;
    background-color: rgb(187,187,187);
    color: #FFFFFF;
    border-radius: 20px;
    padding: 0px 6px;
    margin-left: 10px;
    position: relative;
    top: 4px;
  }
  .mine-information-level-box {
    display: flex;
    justify-content: space-around;
    color: #888888;
    font-size: 14px;
    position: relative;
    top: -50px;
  }
  .mine-information-line {
    width: 1px;
    height: 10px;
    background-color: #dddddd;
    margin: 5px 10px;
  }
</style>
