const quizData = [{
  id: 0,
  question: 'Was bezeichnet der Begriff "App" im allgemeinen Sprachgebrauch?',
  a: "Anwendungsprogramm",
  b: "Digitalkamera",
  c: "Flachbildschirm",
  d: "Telefon",
  correctAnswer: "a"
},
{
  id: 1,
  question: 'Welches Tier wird in Fabeln "Reineke" genannt?',
  a: "Schaf",
  b: "Eule",
  c: "Hund",
  d: "Fuchs",
  correctAnswer: "d"
},
{
  id: 2,
  question: 'Wo kann man eine "Gaube" finden?',
  a: "unter Wasser",
  b: "auf einem Dach",
  c: "in einer Höhle",
  d: "auf einem Baum",
  correctAnswer: "b"
},
{
  id: 3,
  question: 'In welcher italienischen Stadt befindet sich die "Seufzerbrücke"?',
  a: "Venedig",
  b: "Rom",
  c: "Mailand",
  d: "Palermo",
  correctAnswer: "a"
},
{
  id: 4,
  question: 'Urs Meier ist ein ehemaliger Schweizer ..?',
  a: "Anwalt",
  b: "Fußballschiedsrichter",
  c: "Schauspieler",
  d: "Sänger",
  correctAnswer: "b"
}]

let id = 0;
let question = document.getElementById("question");
let answerA = document.getElementById('answerA');
let answerB = document.getElementById('answerB');
let answerC = document.getElementById('answerC');
let answerD = document.getElementById('answerD');
let counter = 0;


const startQuestion = () => {

  question.innerHTML = quizData[id].question;
  answerA.innerHTML = quizData[id].a;
  answerB.innerHTML = quizData[id].b;
  answerC.innerHTML = quizData[id].c;
  answerD.innerHTML = quizData[id].d;

};
startQuestion();


const radioInput = document.querySelectorAll('input[type=radio]');

const radioDeselect = () => {
  for (let i = 0; i < radioInput.length; i++) {
      if (radioInput[i].checked == true) {
        return radioInput[i].checked = false;
      };
  };
};

const antwortCheck = () => {
  for (let i = 0; i < radioInput.length; i++) {
      if ((radioInput[i].checked == true) && (radioInput[i].id == quizData[id].correctAnswer)) {
      counter += 1;
      };
  };
};

const neustartButton = document.getElementById('result-button');

const quizBeendet = () => {
  document.getElementById('quizContainer').style.display = "none";
  document.getElementById('quizResultContainer').style.display = "block";
  document.getElementById('result-text').innerHTML = 'Du hast das Quiz beendet, gratuliere!\nDu hast ' + counter + ' Fragen richtig beantwortet.';
  
  neustartButton.addEventListener('click', function quizNeustarten() {
    location.reload();
  });
}

const nextButton = document.querySelector('input[type=submit][value=Weiter]');

nextButton.addEventListener('click', function weiterButton(e) {
  e.preventDefault();
  antwortCheck();
  const checkRequired = () => {
        if (document.querySelectorAll('input[type=radio]:checked').length == 1) {
          if (id < 4) {
            id += 1;
          } else {

            //alert('Du hast das Quiz beendet, gratuliere!\nDu hast ' + counter + ' richtig beantwortet.');
            alert('Du hast das Quiz beendet, klicke unten auf "Quiz beenden" um dir dein Ergebnis anzusehen');
            nextButton.value = 'Quiz beenden';
            nextButton.removeEventListener('click', weiterButton);
            nextButton.addEventListener('click', quizBeendet);
          }
          startQuestion();
          radioDeselect();
        } else {
          alert('Bitte wählen Sie eine Antwort aus.')
        }
  };
  checkRequired();
});
