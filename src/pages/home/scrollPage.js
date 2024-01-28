import { ref, reactive } from "vue";
import { scrollPageTimeMap as timeMap } from "./data";
import { curPage, nextPage } from "./state";
const useScrollPage = () => {
  const components = ["Section1", "Section2"];
  let isSwitching = ref(false);
  let switchingStyle = reactive({
    next: 0,
    bg1: 0,
    bg2: 0,
  });
  let isUp = false;
  let count = 0;
  const changeSwitch = () => {
    if (
      (isUp && switchingStyle.next <= 0) ||
      (!isUp && switchingStyle.next >= 0)
    ) {
      isSwitching.value = false;
      curPage.value = nextPage.value;
      return;
    }
    count++;
    const time = timeMap[Math.floor(count / 10)] || timeMap[8];
    if (isUp) {
      switchingStyle.next -= time.next / 2;
      switchingStyle.bg1 -= time.bg1 / 2;
      switchingStyle.bg2 -= time.next;
    } else {
      switchingStyle.next += time.next / 2;
      switchingStyle.bg2 += time.bg1 / 2;
      switchingStyle.bg1 += time.next;
    }
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

    // 初始化计算
    isUp = nextPage.value > curPage.value;
    const startV = isUp ? 100 : -100;
    Object.assign(switchingStyle, {
      next: startV,
      bg1: startV,
      bg2: startV,
    });
    console.log(count)
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
