import { ref, reactive } from "vue";
import {scrollPageTimeMap as timeMap} from './data'
const useScrollPage = () => {
  const components = ["Section1", "Section2"];
  let curPage = ref(0);
  let nextPage = ref(0);
  let isSwitching = ref(false);
  let switchingStyle = reactive({
    next: 0,
    bg1: 0,
    bg2: 0,
  });
  let count = 0;
  const changeSwitch = () => {
    if (switchingStyle.next <= 0) {
      isSwitching.value = false;
      curPage.value = nextPage.value;
      return;
    }
    count++;
    const time = timeMap[Math.floor(count / 5)] || timeMap[8];
    switchingStyle.next -= time.next;
    switchingStyle.bg1 -= time.bg1;
    switchingStyle.bg2 -= time.next * 2;
    // let nextTime = 1;
    // if (switchingStyle.next < 90) {
    //   nextTime = 1.5;
    // }
    // if (switchingStyle.next < 70) {
    //   nextTime = 2;
    // }
    // if (switchingStyle.next < 40) {
    //   nextTime = 2.5;
    // }
    // switchingStyle.next -= switchGap * nextTime;
    // const bg1Time =
    //   switchingStyle.next > 95 ? 20 : switchingStyle.next > 85 ? 5 : 3;
    // if (switchingStyle.bg1 > -100) {
    //   switchingStyle.bg1 -= switchGap * bg1Time * nextTime;
    //   switchingStyle.bg2 = Math.min(
    //     switchingStyle.bg2 - switchGap * 2 * nextTime,
    //     100 + switchingStyle.bg1
    //   );
    // } else {
    //   switchingStyle.bg2 = switchingStyle.next - 100;
    // }
    console.log(
      switchingStyle.next,
      switchingStyle.bg1,
      switchingStyle.bg2,
      count
    );
    requestAnimationFrame(changeSwitch);
  };
  const changePage = (page) => {
    if (isSwitching.value) return;
    if (page < 0) page = 0;
    if (page > components.length - 1) {
      page = components.length - 1;
    }
    if (page === curPage.value) return;
    isSwitching.value = true;
    nextPage.value = page;
    Object.assign(switchingStyle, {
      next: 100,
      bg1: 100,
      bg2: 100,
    });
    count = 0;
    changeSwitch();
  };
  return {
    changePage,
    curPage,
    nextPage,
    isSwitching,
    switchingStyle,
    components,
  };
};

export default useScrollPage;
