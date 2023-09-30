export const validationForm = (form) => {
  const validate = new JustValidate(form, {
    errorLabelStyle: {
      color: '#f00'
    },
    errorFieldStyle: {
      borderColor: '#f00'
    },
    errorFieldCssClass: 'invalid',
    errorsContainer: document.querySelector('.employer__error')
  });

  validate
    .addField('#logo', [
      {
        rule: 'minFilesCount',
        value: 1,
        errorMessage: 'Добавьте логотип'
      },
      {
        rule: 'files',
        value: {
          files: {
            extensions: ['jpeg', 'png', 'jpg'],
            maxSize: 102400,
            minSize: 1000,
            types: ['image/jpeg', 'image/png'],
          },
        },
        errorMessage: 'Размер файла не должен превышать 100Кб'
      }
    ])
    .addField('#company', [
      {
        rule: 'required',
        errorMessage: 'Заполните название компании'
      }
    ])
    .addField('#title', [
      {
        rule: 'required',
        errorMessage: 'Заполните название вакансии'
      }
    ])
    .addField('#salary', [
      {
        rule: 'required',
        errorMessage: 'Заполните заработную плату'
      }
    ])
    .addField('#location', [
      {
        rule: 'required',
        errorMessage: 'Заполните город'
      }
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Заполните email'
      },
      {
        rule: 'email',
        errorMessage: 'Введите корректный email'
      }
    ])
    .addField('#description', [
      {
        rule: 'required',
        errorMessage: 'Заполните описание'
      }
    ])
    .addRequiredGroup('#format', 'Выберите формат работы')
    .addRequiredGroup('#experience', 'Выберите опыт работы')
    .addRequiredGroup('#type', 'Выберите занятость');

  return validate;
};