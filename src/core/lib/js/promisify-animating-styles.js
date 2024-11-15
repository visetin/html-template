const promisifyAnimatingStyles = (element, htmlClasses) => {
  return new Promise((resolve, reject) => {
    if (!element) {
      reject(new Error('Element is null'));
    }

    element.classList.add(...htmlClasses);

    const onAnimationEnd = (event) => {
      event.stopPropagation();
      element.classList.remove(...htmlClasses);

      resolve(element);
    };

    element.addEventListener('animationend', onAnimationEnd, { once: true });
  });
};

export default promisifyAnimatingStyles;
