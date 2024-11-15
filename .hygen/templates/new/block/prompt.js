const FOLDERS = ['core/ui', 'widgets'];

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'dirName',
        message: 'What is the directory name?',
        choices: FOLDERS,
        validate: (answer) => {
          return answer !== '';
        },
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the block name? (kebab-case)',
          validate: (answer) => {
            return answer !== '';
          },
      },
    ];

    return inquirer
      .prompt(questions)
      .then(answers => {
        const { dirName, name } = answers;
        const isCoreLayer = dirName === 'core/ui';
        const fullName = `${dirName}/${name}`;
        const path = `../src/${fullName}`;
        const styleConfigPath = isCoreLayer ? '../../config/css' : '../../core/config/css';
        const styleLibPath = isCoreLayer ? '../../lib/css' :  '../../core/lib/css';

        return {
          ...answers,
          path,
          name,
          fullName,
          styleConfigPath,
          styleLibPath,
        }
      });
  },
};
