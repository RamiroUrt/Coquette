import { useRef, useEffect } from 'react';

const useDraggableScroll = () => {
  const ref = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDown.current = true;
    ref.current.classList.add('active');
    document.body.classList.add('no-select');
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown.current = false;
    ref.current.classList.remove('active');
    document.body.classList.remove('no-select'); 
  };

  const onMouseUp = () => {
    isDown.current = false;
    ref.current.classList.remove('active');
    document.body.classList.remove('no-select');
  };

  const onMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 1; 
    ref.current.scrollLeft = scrollLeft.current - walk;
  };

  const onWheel = (e) => {
    if (e.deltaY !== 0) {
      ref.current.scrollLeft += e.deltaY * 0.5;
      e.preventDefault();
    }
  };

  useEffect(() => {
    const element = ref.current;
    element.addEventListener('wheel', onWheel);

    return () => {
      element.removeEventListener('wheel', onWheel);
    };
  }, []);

  return {
    ref,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
  };
};

export default useDraggableScroll;
