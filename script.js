const buttons = document.querySelectorAll('.far');
const answerDivs = document.querySelectorAll('.answer');
const answerDivArray = Array.from(answerDivs);

buttons.forEach(element => {
  element.addEventListener('click', () => {
    let index;
    if(element.classList.contains('btn1')){
      index = 0;
      // console.log(`element contains btn1`)
    } else if (element.classList.contains('btn2')){
      index = 1;
      // console.log(`element contains btn2`)
    } else if (element.classList.contains('btn3')) {
      index = 2;
      // console.log(`element contains btn3`)
    }
    
    // console.log(`answer-toggled-on: ${answerDivArray[index].classList.contains('answer-toggled-on')}`);
    // console.log(`answer-toggled-off: ${answerDivArray[index].classList.contains('answer-toggled-off')}`);

    answerDivArray[index].classList.toggle('answer-toggled-on');
    answerDivArray[index].classList.toggle('answer-toggled-off');

    // element.classList.toggle('fa-minus-square');
    // element.classList.toggle('fa-plus-square');
    

    // console.log(`answer-toggled-on NOW: ${answerDivArray[index].classList.contains('answer-toggled-on')}`);
    // console.log(`answer-toggled-off NOW: ${answerDivArray[index].classList.contains('answer-toggled-off')}`);

    let closeAnswers = answerDivArray.filter(item => item !== answerDivArray[index]);

    closeAnswers.forEach(item => {
      if(item.classList.contains('answer-toggled-on')){
        item.classList.toggle('answer-toggled-off');
        item.classList.toggle('answer-toggled-on');
      }
    });

    const buttonsArray = Array.from(buttons);
    // console.log(buttonsArray);
    let currentButton = buttonsArray[index];

    let nonCurrentButtons = buttonsArray.filter(item => {
      return item !== currentButton;
    })

    currentButton.classList.toggle('fa-minus-square');
    currentButton.classList.toggle('fa-plus-square');

    nonCurrentButtons.forEach(item => {
      if(item.classList.contains('fa-minus-square')){
        item.classList.toggle('fa-minus-square');
        item.classList.toggle('fa-plus-square');
      }
    })  
  });
});