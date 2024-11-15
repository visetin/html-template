const copyText = (text) => {
  if (window.navigator.clipboard) {
    return window.navigator.clipboard.writeText(text);
  }

  return new Promise((resolve, _reject) => {
    const inputEl = document.createElement('textarea');
    inputEl.innerHTML = text;
    inputEl.style.opacity = '0';
    inputEl.position = 'fixed';
    document.body.appendChild(inputEl);
    inputEl.select();
    document.execCommand('copy');
    document.body.removeChild(inputEl);
    resolve();
  });
};

export default copyText;
