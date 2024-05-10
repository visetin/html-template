const CATEGORIES = [
  {
    name: 'ui-kit',
    shortName: 'uk',
  },
  {
    name: 'features',
    shortName: 'f',
  },
  {
    name: 'components',
    shortName: 'c',
  },
];

module.exports = {
  prompt: ({ inquirer }) => {
    const categoriesNames = CATEGORIES.map(({ name }) => {
      return name;
    });

    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'Введите название блока (kebab-case)',
      },
      {
        type: 'select',
        name: 'categoryName',
        message: 'Выберите папку',
        choices: [...categoriesNames],
      },
    ];

    return inquirer
      .prompt(questions)
      .then(answers => {
        const { categoryName, name } = answers;
        const category = CATEGORIES.find(({ name: nameToCompare }) => {
          return nameToCompare === categoryName;
        });
        const prefixedName= `${category.shortName}-${name}`;
        const blockName = `${categoryName}/${name}`;
        const path = categoryName === 'ui-kit' ? `src/core/${blockName}` : `src/${blockName}`;
        const styleConfigName = categoryName === 'ui-kit' ? 'core/config/css' : 'config/css';
        const styleLibName = categoryName === 'ui-kit' ? 'core/lib/css' : 'lib/css';

        return { ...answers, path, name, styleConfigName, styleLibName, prefixedName, blockName }
      });
  },
};
