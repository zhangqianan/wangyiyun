<template>
  <div class="navBar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
</script>

<style>
  .navBar {
    background-color: transparent;
    width: 100%;
    height: 49px;
    display: flex;
    text-align: center;
    line-height: 49px;
    /* border: #000000 1px solid; */
  }
  .left {
    width: 60px;
  }
  .center {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right {
    width: 60px;
  }
</style>
