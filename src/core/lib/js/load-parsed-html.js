const loadParsedHtml = (url) => {
  return fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      const parser = new DOMParser();

      return parser.parseFromString(html, 'text/html');
    })
};

export default loadParsedHtml;
