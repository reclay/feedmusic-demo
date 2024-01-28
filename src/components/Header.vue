<template>
  <div class="wrapper">
    <div class="left">
      <img :src="logoWhite" alt="" class="logo" />
    </div>
    <div class="center">
      <div
        v-for="(nav, i) in navs"
        :key="nav"
        class="nav"
        :class="{ 'is-active': nextPage === i }"
        @click="emit('changePage', i)"
      >
        <a href="#">{{ nav }}</a>
        <div
          class="nav-state"
          :class="{ 'is-progress': nextPage === i && i === 0 }"
        >
          <div class="nav-state-progress" :style="`width:${progress}%`"></div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-2"></div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, defineEmits } from "vue";
import { nextPage, curLine } from "@/pages/home/state";
import { scrollText } from "@/pages/home/data";
import logoWhite from "@/assets/logo-white.svg";

const emit = defineEmits(['changePage'])

let navs = reactive([
  "Introduction",
  "The Technology",
  "TECH SPOTLIGHT",
  "WHY MUSIC?",
]);

const progress = computed(() => {
  let p = Math.floor((curLine.value / (scrollText.length - 1)) * 100);
  return p > 98 ? 100 : p
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 60px;
  padding: 30px 30px 10px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1000;
}
.left {
}
.logo {
  width: 34px;
  height: 34px;
}
.center {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  letter-spacing: 1px;
}
.nav {
  padding: 0 14px;
  a {
    color: #fff;
    text-transform: uppercase;
  }
  &.is-active,
  &:hover {
    .nav-state {
      opacity: 1;
    }
  }
}
.nav-state {
  background-color: #fff;
  height: 5px;
  transition: all 0.3s cubic-bezier(0.7, 0, 0.3, 1);
  display: block;
  opacity: 0;
  position: relative;
  &.is-progress {
    background-color: #b3b3b3;
  }
}
.nav-state-progress {
  position: absolute;
  left: 0;
  top: 0;
  height: 5px;
  background-color: #fff;
}
.line {
  width: 34px;
  height: 4px;
  background-color: #fff;
  margin-top: 6px;
  transition: all 0.3s cubic-bezier(0.7, 0, 0.3, 1);
}
.line-2 {
  margin: 6px 0;
}
.right {
  cursor: pointer;
  &:hover {
    .line-2 {
      margin: 8px 0;
    }
  }
}

@media (max-width: $mobileWidth) {
  .center {
    display: none;
  }
}
</style>
