<template>
  <div
    class="container"
    @wheel="handleScroll"
    @touchmove.prevent="handleTouchMove"
    @touchstart="handleTouchStart"
  ></div>
</template>

<script setup>
import useTouchEvent from "./touchEvent";
const emit = defineEmits(["prev", "next"]);
const processScroll = (deltaY) => {
  if (deltaY > 0) {
    emit("next");
  }
  if (deltaY < 0) {
    emit("prev");
  }
};
const { handleTouchMove, handleTouchStart } = useTouchEvent(processScroll);
const handleScroll = (e) => {
  processScroll(e.deltaY);
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  background-image: url(@/assets/section2-background.png);
  background-size: cover;
  background-position: center center;
}
.is-active {
  .container {
    transform: scale(1.4);
    transition: all 36s ease-out;
  }
}
</style>
