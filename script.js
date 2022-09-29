const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
// selecting DOM elements
const quiz=document.getElementById('quiz');
const quizHead=document.querySelector('.quiz-header')
const answerEls=document.querySelectorAll('li input.answer');
const questionEl=document.getElementById('question');;
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submit');
submitBtn.textContent=='submit';

// creating elements to show result
const resultDiv=document.createElement('div');
const h1=document.createElement('h1');
const p=document.createElement('p');
resultDiv.append(h1, p);
quiz.insertBefore(resultDiv, quizHead );
resultDiv.style.display='none';
resultDiv.style.flexDirection='column';
h1.style.fontSize='40px'
p.style.fontSize='30px'
resultDiv.style.alignItems='center';
resultDiv.style.justifyContent='center';
resultDiv.style.height='60vh';

const ansArr=Array.from(answerEls);
let currentQuiz = 0
let score = 0;

loadQuiz();
// function for loading quiz
function loadQuiz() {
    questionEl.textContent=quizData[currentQuiz].question;
    a_text.textContent=quizData[currentQuiz].a;
    b_text.textContent=quizData[currentQuiz].b;
    c_text.textContent=quizData[currentQuiz].c;
    d_text.textContent=quizData[currentQuiz].d;
}

// function for selecting options
function getSelected() {
    const value= ansArr.filter(el=> el.checked===true);
    return value[0].id
}

// function of showing ans for each question
function submit() {
let selectedAns=getSelected();
const ans=ansArr.filter(el=>el.id==quizData[currentQuiz].correct)[0]
.nextElementSibling
.textContent;

resultDiv.style.display='flex';
quizHead.style.display='none';
p.textContent=`Ans : ${ans}`;
if(selectedAns==quizData[currentQuiz].correct){
    quiz.style.backgroundColor='green';
    h1.textContent='Your Ans is Correct';
    score++;
}else{
    quiz.style.backgroundColor='red';
    h1.textContent='Your Ans is Wrong';
}
currentQuiz==3? submitBtn.textContent='Result' : submitBtn.textContent='Next Quiz';
}

// function for showing next quiz
function nextQuiz(){
    currentQuiz++;
    loadQuiz();
    resultDiv.style.display='none';
    quizHead.style.display='block';
    submitBtn.textContent='Submit';
    quiz.style.backgroundColor='#5DA3FA';
    ansArr.forEach((el)=>el.checked=false)
}

// showing over all result
function result(){
    resultDiv.style.display='flex';
    quizHead.style.display='none';
    quiz.style.backgroundColor='#5DA3FA';
    h1.textContent='Quiz Over';
    p.textContent=`Your Score is ${score} /4`;
    submitBtn.textContent='Restart';
}


submitBtn.addEventListener('click', ()=>{
     if(submitBtn.textContent=='Submit'){
        submit();
     }
    else if(submitBtn.textContent=='Next Quiz'){
        nextQuiz();
    }
    else if(submitBtn.textContent=='Result'){
        result();
    }
    else if(submitBtn.textContent=='Restart'){
       location.reload();
    }
}
);    
