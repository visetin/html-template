const DEFAULT_LAYOUT_NAME = 'main';
const PREFIX_NAME = 'p';

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'Введите название страницы'
      },
      {
        type: 'select',
        name: 'layout',
        message: 'Использовать шаблон?',
        choices: ['Yes', 'No']
      },
    ];

    return inquirer
      .prompt(questions)
      .then(answers => {
        const { name, layout } = answers;
        const pageName = `pages/${name}`;
        const path = `src/${pageName}`;
        const prefixedName = `${PREFIX_NAME}-${name}`;
        const result = { ...answers, path, name, prefixedName };

        if (layout === 'No') {
          return { ...result, layout: false };
        }

        return inquirer.prompt({
          type: 'input',
          name: 'layoutName',
          message: `Введите название шаблона (шаблон по умолчанию: "${DEFAULT_LAYOUT_NAME}")`,
        })
          .then(({ layoutName }) => {
            const normalizedName = layoutName || DEFAULT_LAYOUT_NAME;
            return { ...result, layout: true, layoutName: normalizedName }
          })
      });
  },
};
