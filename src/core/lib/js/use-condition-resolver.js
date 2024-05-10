/**
 * @params { Object } props
 * @params { function: boolean } props.checkResolveCondition
 * @params { function: boolean } props.checkRejectCondition
 * @params { function: void } props.onResolve
 * @params { function: void } props.onReject
 *
 * @return { function: void }
 *
 * @example
 * const BP_PAD = 1024;
 *
 * const slider = null;
 *
 * const makeSlider = () => {
 *   const slider = ('make slider instance');
 *   console.log('init slider');
 * };
 *
 * const destroySlider = () => {
 *    const slider = null;
 *    console.log('destroy slider instance');
 * };
 *
 * const shouldMountSlider = () => {
 *   return !slider && window.innerWidth < BP_PAD;
 * }
 *
 * const shouldUnmountSlider = () => {
 *   return slider && window.innerWidth >= BP_PAD;
 * }
 *
 * const mountSlider = useConditionResolver({
 *   checkResolveCondition: shouldMountSlider,
 *   checkRejectCondition: shouldUnmountSlider,
 *   onResolve: makeSlider,
 *   onReject: destroySlider,
 * });
 *
 * window.addEventListener('DOMContentLoaded', mountSlider);
 * window.addEventListener('resize', mountSlider);
 */
const useConditionResolver = (props) => {
  const {
    checkResolveCondition,
    checkRejectCondition,
    onResolve,
    onReject,
  } = props;

  return (...args) => {
    if (checkResolveCondition()) {
      onResolve(...args);
      return;
    }

    if (checkRejectCondition()) {
      onReject(...args);
    }
  };
};

export default useConditionResolver;
