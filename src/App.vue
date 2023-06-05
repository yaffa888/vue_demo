<script lang="ts">
import anime from "animejs";

export default {
  data() {
    return {
      disabled: false,
    }
  },
  methods: {
    warnDisabled() {
      this.disabled = true
      setTimeout(() => {
        this.disabled = false
      }, 1500)
    },
    rotate() {
       anime({
        targets: ['.box2'],
        translateY: '125',
        rotate: 180,
        borderRadius: 100,
        duration: 2000 ,
         easing: 'linear'
      });
    },
    reduction() {
      anime({
        targets: ['.box2'],
        translateY: '0',
        rotate: 0,
        borderRadius: 100,
        duration: 2000,
        easing: 'linear'
      });
    },
    },

  }
</script>

<template>
    <div class="parent" :class="{ shake: disabled }">
      <div class="box1"><img alt="Vue logo" class="logo" src="./assets/logo.svg" width="200" height="125" /></div>
      <div class="box2"><img alt="Vue logo" class="logo" src="./assets/logo.svg" width="200" height="125" /></div>
    </div>
    <div>
      <button class="my-button" @click="warnDisabled">点我抖动</button>
      <button class="my-button" @click="rotate">点我旋转</button>
      <button class="my-button" @click="reduction">点我还原</button>
    </div>

</template>

<style scoped>


@media (min-width: 1024px) {


}
  .parent {
    display:block;
    flex-wrap:wrap;
    width: 100%;
    position: relative;
  }
  .box2{
    position: absolute;
    top: 0;
    left: 0;
  }

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
