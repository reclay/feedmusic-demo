<template>
  <div class="wrapper" @click="$emit('next')">
    <div class="icon">
      <div class="icon-dot"></div>
    </div>
    <p class="scroll-text">scroll down</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  z-index: 1;
  width: 150px;
  bottom: 40px;
  left: 50%;
  margin-left: -75px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    .icon {
      background-color: #fff;
      border-color: #fff;
    }
    .scroll-text {
      opacity: 0;
      letter-spacing: 5px;
    }
  }
}
.icon {
  transition: all 0.3s ease;
  width: 26px;
  height: 44px;
  border-radius: 13px;
  border: 2px solid #b3b3b3;
  position: relative;
  left: 62px;
}
.icon-dot {
  width: 6px;
  height: 6px;
  animation: scrollDownKnobAnimation 2s ease infinite;
  position: absolute;
  top: 6px;
  border-radius: 50%;
  background-color: #b3b3b3;
  content: "";
  left: 50%;
  margin-left: -3px;
}
.scroll-text {
  position: absolute;
  left: 50%;
  bottom: 5px;
  width: 100%;
  transform: translate(-50%);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: all .3s ease;
  opacity: 1;
}
</style>
