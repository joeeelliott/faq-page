const buttons = Array.from(document.querySelectorAll('.far'));
const answers = Array.from(document.querySelectorAll('.answer'));

buttons.forEach(item => {
  item.addEventListener('click', () => {
    let index = buttons.indexOf(item);
    let currentAnswer = answers[index];

    currentAnswer.classList.toggle('answer-toggled-on');
    currentAnswer.classList.toggle('answer-toggled-off');

    let nonCurrentAnswers = answers.filter(item => item !== currentAnswer);

    nonCurrentAnswers.forEach(item => {
      if(item.classList.contains('answer-toggled-on')){
        item.classList.toggle('answer-toggled-off');
        item.classList.toggle('answer-toggled-on');
      }
    });

    let currentButton = buttons[index];

    let nonCurrentButtons = buttons.filter(item => {
      return item !== currentButton;
    });

    currentButton.classList.toggle('fa-minus-square');
    currentButton.classList.toggle('fa-plus-square');

    nonCurrentButtons.forEach(item => {
      if(item.classList.contains('fa-minus-square')){
        item.classList.toggle('fa-minus-square');
        item.classList.toggle('fa-plus-square');
      }
    });
  });
});