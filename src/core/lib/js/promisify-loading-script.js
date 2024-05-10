/**
 * @param {string} src
 * @return {Promise<HTMLScriptElement>}
 *
 * @example
 * promisifyLoadingScript('/foo.js')
 *  .then((script) => { console.log(script.src) })
 *  .catch(console.error)
 *
 */
function promisifyLoadingScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;

    script.onload = () => {
      resolve(script);
    };
    script.onerror = () => {
      reject(new Error(`Script load error: ${src}`));
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
}

export default promisifyLoadingScript;
