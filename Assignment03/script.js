let name;
document.querySelector("#namebtn").addEventListener("click", () => {
    name = document.querySelector("#name").value;
    document.getElementById("nametest").innerHTML = "User: " + name;
});

const nmeInput = document.getElementById('nam-input');
const nmeButton = document.getElementById('namebtn');
const allquestions = document.getElementById('allquestions');

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nameinput = document.getElementById('nameinput');

const y = document.getElementById('nameinputt').value;
let score = 0;

nmeButton.addEventListener('click', enterName)

function enterName() {
    nmeInput.classList.add('hide');
    allquestions.classList.remove('hide');
    alert(`Welcome ${name}`)
}

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion()
})

function startGame() {
    score = 0;
    startButton.classList.add('hide');
    nameinput.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
    
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(
            answerButtonsElement.firstChild
        )
    }
}

let questionCounter = 0;

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    questionCounter++;
    document.getElementById("questionNumber").innerHTML = `${questionCounter+1}/20`;

    if(correct){
        score = score+1;
        document.getElementById("score").innerHTML = score;
    }
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }
    else{
        if(questionCounter === 10 && score < 8){
            alert(`Sorry ${name}, you fail the quiz`)
        }
        else{
            alert(`Congratulations ${name}, you pass the quiz`)
        }

        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What command do you use to print to the console in java?',
        answers: [
            { text: 'system.out.println', correct: true},
            { text: 'cout', correct: false},
            { text: 'print', correct: false},
            { text: 'console.writeline', correct: false}
        ]
    },
    {
        question: 'When was Java created',
        answers: [
            { text: '1976', correct: false},
            { text: '1992', correct: false},
            { text: '1983', correct: false},
            { text: '1996', correct: true}
        ]
    },
    {
        question: 'Which OS does Java support',
        answers: [
            { text: 'Windows', correct: false},
            { text: 'Linux', correct: false},
            { text: 'MacOS', correct: false},
            { text: 'All of these', correct: true}
        ]
    },
    {
        question: 'Which variable is used for the number 10.6',
        answers: [
            { text: 'float', correct: true},
            { text: 'string', correct: false},
            { text: 'int', correct: false},
            { text: 'bool', correct: false}
        ]
    },
    {
        question: 'A loop inside a loop is called what',
        answers: [
            { text: 'Twin Loop', correct: false},
            { text: 'Double Loop', correct: false},
            { text: 'Loop de Loop', correct: false},
            { text: 'Nested Loop', correct: true}
        ]
    },
    {
        question: 'A do while and a while loop are the same',
        answers: [
            { text: 'True', correct: false},
            { text: 'False', correct: true}
        ]
    },
    {
        question: 'Which variable stores "test"',
        answers: [
            { text: 'int', correct: false},
            { text: 'string', correct: true},
            { text: 'double', correct: false},
            { text: 'bool', correct: false}
        ]
    },
    {
        question: 'True or false applies to which variable',
        answers: [
            { text: 'string', correct: false},
            { text: 'bool', correct: true},
            { text: 'int', correct: false},
            { text: 'long', correct: false}
        ]
    },
    {
        question: 'What does 2*2 output',
        answers: [
            { text: '9', correct: false},
            { text: '22', correct: false},
            { text: '10', correct: false},
            { text: '4', correct: true}
        ]
    },
    {
        question: 'What does HTML stand for',
        answers: [
            { text: 'HyperText Markup Language', correct: true},
            { text: 'HyperTransfer Mixtape Language', correct: false},
            { text: 'Hundred Thousand Mile Long', correct: false},
            { text: 'Happy To Meet Larry', correct: false}
        ]
    },
    {
        question: 'What does OOP stand for',
        answers: [
            { text: 'Orientated Object Programming', correct: false},
            { text: 'Oscar Owl Price', correct: false},
            { text: 'Open Object Programming', correct: false},
            { text: 'Object Orientated Programming', correct: true}
        ]
    },
    {
        question: 'What language is used for scripting',
        answers: [
            { text: 'Java', correct: false},
            { text: 'Python', correct: true},
            { text: 'Node.js', correct: false},
            { text: 'CSS', correct: false}
        ]
    },
    {
        question: 'What is a language that uses a relational database',
        answers: [
            { text: 'NoSQL', correct: false},
            { text: 'Ruby', correct: false},
            { text: 'SQL', correct: true},
            { text: 'R', correct: false}
        ]
    },
    {
        question: 'Which of the following declares a string correctly in Java',
        answers: [
            { text: 'String string = "Word"', correct: false},
            { text: 'String string = "Word";', correct: true},
            { text: 'sout(word);', correct: false},
            { text: 'java.printline("hello")', correct: false}
        ]
    },
    {
        question: 'Which are the if else ternary operators used in Java',
        answers: [
            { text: '? and :', correct: true},
            { text: '! and :', correct: false},
            { text: '* and |', correct: false},
            { text: '^ and =>', correct: false}
        ]
    },
    {
        question: 'Which of these variable types can you not directly modify in Java',
        answers: [
            { text: 'string', correct: true},
            { text: 'int', correct: false},
            { text: 'double', correct: false},
            { text: 'long', correct: false}
        ]
    },
    {
        question: 'Which language is used to modify the appearance of a web page',
        answers: [
            { text: 'CSS', correct: true},
            { text: 'Java', correct: false},
            { text: 'Javascript', correct: false},
            { text: 'R', correct: false}
        ]
    },
    {
        question: 'Which operator returns the remainder',
        answers: [
            { text: '%', correct: true},
            { text: '/', correct: false},
            { text: '!', correct: false},
            { text: '!=', correct: false}
        ]
    },
    {
        question: 'Which method is required in Java to run',
        answers: [
            { text: 'run', correct: false},
            { text: 'high', correct: false},
            { text: 'main', correct: true},
            { text: 'strong', correct: false}
        ]
    },
    {
        question: 'Which of the following declares an int correctly',
        answers: [
            { text: 'int num = 2;', correct: true},
            { text: 'long num = 4;', correct: false},
            { text: 'int var = 2', correct: false},
            { text: 'double dub = 3.0', correct: false}
        ]
    }
]

