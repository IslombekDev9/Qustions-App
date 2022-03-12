const quizData = [
    {
        question: '1. What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    }, 
    {
        question: '2. 2+2x2',
        a: '8',
        b: '14',
        c: '6',
        d: '2',
        correct: 'c'
    }, 
    {
        question: '3. SMM - ',
        a: 'Solite Media Monster',
        b: 'Social Media Marketing',
        c: 'Sociality Medias Margetologs',
        d: 'JavaScript Object Notation',
        correct: 'b'
    }, 
    {
        question: '4. What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'JavaScript Object Notation',
        d: 'Helicopters Terminals MotorBoats Lamborginis',
        correct: 'a'
    }, 
    {
        question: '5. What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    },
    {
        question: '6. What does mean CSS stand for?',
        a: 'Cry Social Site',
        b: 'Certain Social Sites',
        c: 'Call Social Sheet',
        d: 'Cascading Style Sheet',
        correct: 'd'
    },
    {
        question: '7. 2+1:2+3 ',
        a: '5.5',
        b: '4.5',
        c: '4',
        d: '6',
        correct: 'a'
    }, 
    {
        question: '8. What does mean JSON stand for?',
        a: 'Javascript Oriented Notation',
        b: 'Javascript Object Normal',
        c: 'Javascript Object Notation',
        d: 'Javascript ON',
        correct: 'c'
    },
    {
        question: '9. 9+(9*9-9:9)',
        a: '1',
        b: '81',
        c: '9',
        d: '89',
        correct: 'd'
    },
    {
        question: '10. CMS - ',
        a: 'Content Management System',
        b: 'Color Management System',
        c: 'Coders Management System',
        d: 'Conteniers Management System',
        correct: 'a'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () =>  {
    // check to see the answer
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>
                    You answered correctly at ${score}/${quizData.length} questions
                </h2>
                <button onclick="location.reload()">
                    Reload
                </button>
            `;
        }
    }
});