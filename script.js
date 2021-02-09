const quizData = [
    {
        question: "Which Language Runs in a Web Browser?",
        a:"Java",
        b:"C",
        c:"python",
        d:"Javascript",
        correct:"d",
    },
    {
        question:"What Does CSS Stands for ?",
        a:"Central Style Sheets",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Cars SUVs Sailboats",
        correct:"b"
    },
]

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submidBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    deselectAnswers()
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
    };

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submidBtn.addEventListener('click', () => {
    const answer = getSelected();


    if(answer) {
        if(answer===quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
             quiz.innerHTML = `<h2> You Answered correctly at ${score}/${quizData.length} quuestions </h2>
             
             <button onclick= "location.reload()">Reload</button>`
        }
    }
})