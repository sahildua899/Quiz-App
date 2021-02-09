const quizData = [
    {
        question: "What Would I Like ?",
        a:"Tea",
        b:"Coffee",
        c:"Wine",
        d:"Cold Drink",
        correct:"b",
    },
    {
        question:"What I Played the Most ?",
        a:"Football",
        b:"Cricket",
        c:"Volley Ball",
        d:"None of The Abover",
        correct:"b"
    },
    {
        question:"What I Like the Most ?",
        a:"Instagram",
        b:"Facebook",
        c:"Youtube",
        d:"Snapchat",
        correct:"a"
    },
    {
        question:"How Is My Nature ?",
        a:"Good",
        b:"Bad",
        c:"Funny",
        d:"Lazy",
        correct:"c"
    },
    {
        question:"How Is My Personality ?",
        a:"Good",
        b:"Average",
        c:"Bad",
        d:"Ugly",
        correct:"a"
    },
    {
        question:"I am your ?",
        a:"Friend",
        b:"Best Friend",
        c:"Close Friend",
        d:"Just Friend",
        correct:"a"
    },
    {
        question:"What Am Actually Doing ?",
        a:"B.com",
        b:"BBA",
        c:"BCA",
        d:"BA",
        correct:"a"
    },
    {
        question:"We Are in Family ?",
        a:"3",
        b:"4",
        c:"5",
        d:"7",
        correct:"a"
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