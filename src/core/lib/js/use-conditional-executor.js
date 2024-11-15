const useConditionalExecutor = (props) => {
  const {
    resolveCondition,
    rejectCondition,
    handleResolve,
    handleReject,
  } = props;

  return (...args) => {
    if (resolveCondition && resolveCondition()) {
      handleResolve(...args);
      return;
    }

    if (rejectCondition && rejectCondition()) {
      handleReject(...args);
    }
  };
};

export default useConditionalExecutor;
