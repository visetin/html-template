const app = () => {
  const container = document.querySelector('.uk-container');
  const text = document.createElement('p');

  text.textContent = 'Hello 👽';
  container.append(text);
};

export default app;
