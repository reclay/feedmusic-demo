const useTouchEvent = (processScroll) => {
  let startY = 0;
  const handleTouchMove = (e) => {
    const y = e.changedTouches[0].pageY;
    const delta = y - startY;
    startY = y
    processScroll(-delta)
  };
  const handleTouchStart = (e) => {
    startY = e.touches[0].pageY;
  };
  return { handleTouchMove, handleTouchStart};
};

export default useTouchEvent;
