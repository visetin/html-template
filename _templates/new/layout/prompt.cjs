const PREFIX_NAME = 'l';

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'Введите название шаблона'
      },
    ];

    return inquirer
      .prompt(questions)
      .then(answers => {
        const { name } = answers;
        const prefixedName = `${PREFIX_NAME}-${name}`;
        const path = `layouts/${name}`;
        const absPath = `src/${path}`;

        return { ...answers, path, absPath, name, prefixedName }
      });
  },
};
