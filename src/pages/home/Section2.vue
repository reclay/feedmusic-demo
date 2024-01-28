<template>
  <div class="container" @mousewheel="handleScroll"></div>
</template>

<script setup>
const emit = defineEmits(['prev', 'next'])
const handleScroll = (e) => {
  if (e.deltaY > 0) {
    emit('next')
  }
  if (e.deltaY < 0) {
    emit('prev')
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  background-image: url(@/assets/section2-background.png);
  transition: all 36s ease-out;
  background-size: cover;
}
.is-active {
  .container {
    transform: scale(1.4);
  }
}
</style>
