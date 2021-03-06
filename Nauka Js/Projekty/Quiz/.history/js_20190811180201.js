



const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const correctAnswers = ['B','B','B','B'];
const spanResult = document.querySelector('span');

form.addEventListener('submit', e=>{
    e.preventDefault();

    //check answer
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    scrollTo(0,0)
    result.classList.remove('d-none');
    // spanResult.textContent = `${score}%`
    let output = 0;
    const timer = setInterval(() =>{
        spanResult.textContent = `${output}%`;
        if(output === score){
            clearInterval(timer)
        } else{
            output++;
        }
    }, 10)


})


const p = document.querySelector('.xd');

let time = 0;
let endTime = 100;
setInterval(()=>{
    p.textContent = time;
    if(time === endTime){
        clearInterval();
    }else{
        time++;
    }
},10)