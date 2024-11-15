const useThrottle = (callee, timeoutMs) => {
  let timer = null;

  return function perform(...args) {
    if (timer) return;

    timer = setTimeout(() => {
      callee(...args);

      clearTimeout(timer);
      timer = null;
    }, timeoutMs);
  };
};

export default useThrottle;
