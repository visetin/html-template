function promisifyLoadingScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;

    script.onload = () => {
      resolve(script);
    };

    script.onerror = () => {
      reject(new Error(`Error loading script ${src}`));
    };
  });
}

export default promisifyLoadingScript;
