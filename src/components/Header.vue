<template>
  <div class="wrapper">
    <div class="left">
      <img :src="logoWhite" alt="" class="logo" />
    </div>
    <div class="center">
      <div v-for="nav in navs" :key="nav" class="nav">
        <a href="#">{{ nav }}</a>
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
import { reactive } from "vue";
import logoWhite from "@/assets/logo-white.svg";
let navs = reactive([
  "Introduction",
  "The Technology",
  "TECH SPOTLIGHT",
  "WHY MUSIC?",
]);
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
    &:after {
      content: " ";
      background-color: #fff;
      height: 5px;
      transition: all .3s cubic-bezier(.7, 0, .3, 1);
      display: block;
      opacity: 0;
    }
    &:hover {
      &:after {
        opacity: 1;
      }
    }
  }
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
</style>
