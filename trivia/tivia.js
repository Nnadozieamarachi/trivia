let correctAnswer = document.queryselector('.correctAnswerQ1');
document.querySelector('.correctAnswerQ1').addEventListener('click', function(){
    correctAnswer.style.backgroundcolor = 'red';
    console.log("correct answer");
});
let wrongAnswer = document.querySelector('.answerbttn')
document.queryselector(.answerbttn).addEventListener('click', function(){
    wrongAnswer.style.backgroundColor = 'red';
    console.log("wrong answer");
});