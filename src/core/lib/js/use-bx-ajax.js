const useBxAjax = () => {
  if (!window.BX) {
    console.error('"BX" is undefined');
    
    return null;
  }
  
  const fetchJson = (props) => {
    return new Promise((resolve, reject) => {
      window.BX.ajax({
        ...props,
        dataType: 'json',
        processData: true,
        onsuccess(res) {
          resolve(res);
        },
        onfailure(err) {
          reject(err);
        }
      });
    });
  }
  
  return {
    fetchJson,
    bxAjax: BX.ajax,
  }
};

export default useBxAjax;
