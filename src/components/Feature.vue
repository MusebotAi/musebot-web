<script setup lang="ts"></script>

<template>
  <div class="home">
    <img :src="$imgUrl('l_lb.png')" class="lb" alt="" />
    <img :src="$imgUrl('about/arrow.png')" class="ldown" alt="" />
    <img :src="$imgUrl('feature/f1.png')" class="f1" alt="" />
    <img :src="$imgUrl('feature/f2.png')" class="f2" alt="" />
    <img :src="$imgUrl('feature/f3.png')" class="f3" alt="" />
  </div>
</template>

<style lang="scss" scoped>
@function w($p) {
  @return calc($p / 1440) * 100vw;
}
@function h($p) {
  @return calc($p / 1024) * 100vh;
}
.left {
  position: absolute;
  width: 170px;
  height: 94px;
  left: 0px;
  top: 309px;

  background: linear-gradient(
    101.42deg,
    rgba(98, 191, 54, 0.88) -24.47%,
    rgba(98, 191, 54, 0) 90.91%
  );
}
.lb {
  position: absolute;
  width: 252px;
  height: 70px;
  left: 74px;
  bottom: h(93);
}
.tr {
  position: absolute;
  width: 161px;
  height: 66px;
  right: 75px;
  top: h(93);
}
.ldown {
  position: absolute;
  width: 39.93px;
  height: 107.94px;
  right: 55px;
  bottom: h(93);
}
.home {
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url(@/assets/feature/bg.png);
  background-repeat: no-repeat;
  background-position: w(0) h(0);
  background-size: auto;
  
  .f1 {
    position: absolute;
    top: h(228);
    right: w(482);
    width: w(439);
    height: auto;
  }
  .f2 {
    position: absolute;
    top: h(307);
    right: w(77);
    width: w(342);
    height: auto;
  }
  .f3 {
    position: absolute;
    top: h(599);
    right: w(392);
    width: w(445);
    height: auto;
  }
}
</style>
