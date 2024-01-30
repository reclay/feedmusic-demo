import { reactive, ref } from "vue";
import { scrollText as data } from "./data";
import { curLine } from "./state";
import { useRoute } from "vue-router";

const lineGap = 42;
const lineTime = 0.3;
const oneLineGap = lineGap / lineTime;
const scaleGap = oneLineGap / 1000;
const opacityGap = 0.35;
const useScrollText = () => {
  const route = useRoute();
  let scrollText = reactive(data);
  const defaultStyle = [];
  let scrollStyle = reactive([]);
  for (let i = 0; i < scrollText.length; i++) {
    defaultStyle.push({
      opacity: 1 - i * 0.25,
      translateY: 100 * i,
      scale: 1 - i * 0.1,
    });
    scrollStyle.push({ ...defaultStyle[i] });
  }
  const speedMap = {
    slow: 500,
  };
  const handleScroll = (deltaY) => {
    const speedType = route.query.s;
    let speed = 66;
    if (+speedType > 1) {
      speed = +speedType;
    }
    if (speedMap[route.query.s]) {
      speed = speedMap[route.query.s];
    }
    // if (Math.abs(deltaY > 99)) {
    //   speed = 200
    // }
    let targetLine = curLine.value + deltaY / speed;
    if (targetLine < 0) {
      targetLine = 0;
    } else if (targetLine > scrollText.length - 1) {
      targetLine = scrollText.length - 1;
    }
    requestAnimationFrame(() => {
      curLine.value = targetLine;
      const curMaxLine = Math.min(
        Math.floor(targetLine / lineTime),
        scrollStyle.length - 1
      );
      let i = 0;
      for (; i <= curMaxLine; i++) {
        if (i === 0) {
          scrollStyle[i].translateY = (i - targetLine) * oneLineGap;
          scrollStyle[i].scale = 1 + (targetLine - i) * scaleGap;
        } else {
          scrollStyle[i].translateY =
            scrollStyle[i - 1].translateY + oneLineGap;
          scrollStyle[i].scale = scrollStyle[i - 1].scale - scaleGap;
        }
        scrollStyle[i].opacity = 1 - Math.abs(targetLine - i) * opacityGap;
      }
      for (; i < scrollStyle.length; i++) {
        Object.assign(scrollStyle[i], defaultStyle[i]);
      }
    });
  };
  return {
    scrollText,
    handleScroll,
    scrollStyle,
    curLine,
  };
};
export default useScrollText;
