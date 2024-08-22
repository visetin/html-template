const demoPage = (element) => {
  if (!element) {
    return;
  }

  const h1 = document.querySelector('.demo-page__title');

  if (h1) {
    h1.textContent = 'demo-page';
  }
};

export const mountDemoPage = () => {
  const elements = [...document.querySelectorAll('.demo-page')];

  elements.forEach(demoPage);
};

export default demoPage;
