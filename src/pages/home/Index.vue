<template>
  <div class="index-container">
    <Header @changePage="changePage"></Header>
    <div
      v-for="(com, i) in components"
      :key="com"
      class="section-wrapper"
      :class="{ 'is-active': i === curPage }"
      :style="`${getDefaultIndex(i)}${
        isSwitching && i === nextPage
          ? `transform:translateY(${switchingStyle.next}%);`
          : ''
      }${(isSwitching && `z-index:${i === nextPage ? 1 : 0};`) || ''}`"
    >
      <component
        :is="componentMap[com]"
        @prev="handlePrev"
        @next="handleNext"
      ></component>
    </div>
    <NextSection
      @next="handleNext"
      v-show="!isSwitching && curPage < components.length - 1"
    ></NextSection>
    <div
      v-for="bg in switchBg"
      :key="bg"
      class="switch-transition"
      :class="bg"
      :style="
        isSwitching
          ? `z-index:1;transform:translateY(${switchingStyle[bg]}%)`
          : ''
      "
    ></div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import NextSection from "@/components/NextSection.vue";
import useScrollPage from "./scrollPage";
const {
  changePage,
  curPage,
  nextPage,
  isSwitching,
  switchingStyle,
  components,
} = useScrollPage();
const componentMap = {
  Section1,
  Section2,
};
const switchBg = ["bg1", "bg2"];
const handleNext = () => {
  changePage(curPage.value + 1);
};
const handlePrev = () => {
  changePage(curPage.value - 1);
};
const getDefaultIndex = (i) => `z-index:${curPage.value === i ? 1 : 0};`;
</script>

<style lang="scss" scoped>
.index-container {
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.section-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}
.switch-transition {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  &.bg1 {
    background-color: rgb(230, 230, 230);
  }
  &.bg2 {
    background-color: rgb(53, 1, 127);
  }
}
</style>
