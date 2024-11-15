const indexPage = (element) => {
  if (!element) {
    return;
  }
};

export const connectIndexPage = () => {
  const elements = [...document.querySelectorAll('.index-page')];

  elements.forEach(indexPage);
};

export default indexPage;
