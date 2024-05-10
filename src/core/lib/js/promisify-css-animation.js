/**
 * @param {HTMLElement} element
 * @param {string[]} animations
 * @return {Promise<HTMLElement>}
 *
 * @example
 * const foo = document.querySelector('.foo');
 * promisifyCssAnimation(el, ['fade-out'])
 *   .then((el) => { el.remove(); })
 *   .catch(console.error))
 */
const promisifyCssAnimation = (element, animations) => {
  return new Promise((resolve) => {
    element.classList.add(...animations);

    const onAnimationEnd = (event) => {
      event.stopPropagation();
      element.classList.remove(...animations);

      resolve(element);
    };

    element.addEventListener('animationend', onAnimationEnd, { once: true });
  });
};

export default promisifyCssAnimation;
