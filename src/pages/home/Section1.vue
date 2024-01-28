<template>
  <div class="wrapper" @mousewheel="handleScroll">
    <div class="video-wrapper">
      <video :src="videoSrc" loop autoplay class="video" muted></video>
      <div class="video-mask"></div>
    </div>
    <div class="body">
      <div class="body-content">
        <p
          v-for="(text, i) in scrollText"
          :key="i"
          :style="getScrollStyle(i)"
          class="content-p"
        >
          <span v-if="text.type === 'html'" v-html="text.text"></span>
          <span v-else>{{ text.text }}</span>
        </p>
      </div>
    </div>
    <div class="intro">
      <p>
        Feed is an intelligent property rights and payments platform, using
        intelligent software and digital security that goes well beyond
        'military-grade' to give users true ownership of their data and IP.
      </p>
      <p>
        Feed facilitates trusted exchanges of users' progressively-perfecting
        data assets with businesses, researchers, and governments in a
        <b>trusted</b>, audited, and independently verifiable manner; on their
        own terms and conditions.
      </p>
    </div>
  </div>
</template>

<script setup>
import useScrollText from './scrollText'
import videoSrc from "@/assets/intro.mp4";

const {scrollText, handleScroll, scrollStyle} = useScrollText()
const getScrollStyle = (i) => {
  let { opacity, translateY, scale } = scrollStyle[i];
  return `opacity:${opacity};transform:translateY(${translateY}%) scale(${scale})`;
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: calc(100vh - 30px);
  background-color: #e6e6e6;
  padding: 15px;
  overflow: hidden;
}
.video-wrapper {
  position: relative;
  height: 100%;
}
.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video-mask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.3;
  background-color: #000;
}
.body {
  font-size: 48px;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
}
.body-content {
  position: relative;
  top: 50%;
  margin-top: -100px;
}
.content-p {
  margin: 0 0 0 10px;
  line-height: 1.4;
  position: absolute;
  width: 100%;
  ::v-deep a {
    color: #fff;
    text-decoration: underline;
  }
}
.intro {
  position: absolute;
  font-size: 12px;
  bottom: 0;
  left: 0;
  padding: 25px;
  color: #fff;
  width: 420px;
}
</style>
