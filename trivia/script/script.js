const qDiv = document.getElementById('question');
const aDiv = document.getElementById('answer');
const fDiv = document.getElementById('feedback');
const card = document.querySelector('.container');
const qBtn = document.getElementById('questionBtn');
const aBtn = document.getElementById('answerBtn');
let currentQuestion = null;

function getTriviaQuestion () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = Math.floor(Math.random() * questions.length);
            const question = questions[index];
            if(index > questions.length) {
                reject('An error occured while fetching the question.')
            } else {
                resolve(question);
            }
        }, 1000);
    });
}

function displayQuestion(triviaQuestion){
    qDiv.textContent = triviaQuestion.question;
    aDiv.value = '';
    fDiv.textContent = '';
}

document.getElementById('questionBtn').addEventListener('click', () => {
    getTriviaQuestion().then((question) => {
        currentQuestion = question;
        displayQuestion(question);
    })
    .catch((error) => {
        console.log(error);
    })
})

aBtn.addEventListener('click', () => {
    let feedbackMessage;
    const userAnswer = aDiv.value.trim().toLowerCase();
    console.log(userAnswer, currentQuestion.answer);
    if(currentQuestion && userAnswer === currentQuestion.answer.toLowerCase()){
        fDiv.style.color = 'green';
        card.style.boxShadow = '3px 2px 7px rgb(11, 177, 19)';
        qBtn.style.background = 'rgb(11, 177, 19)';
        aBtn.style.background = 'rgb(11, 177, 19)';
        feedbackMessage = 'Correct!';
    } else {
        fDiv.style.color = 'red';
        card.style.boxShadow = '3px 2px 7px rgb(177, 11, 43)';
        qBtn.style.background = 'rgb(177, 11, 43)';
        aBtn.style.background = 'rgb(177, 11, 43)';
        feedbackMessage = `Incorrect. The answer is ${currentQuestion.answer}`;
    }
    fDiv.textContent = feedbackMessage;
})
