const a = 10;
const b = 7;
const c = 8;


if(a > b && a > c){
    console.log('a jest największe')
}else{
    if(b > c){
        console.log('b jest największe')
    }else{
        console.log('c jest największe')
    }
}



const form = document.querySelector('form');

form.addEventListener('click', e=>{
    e.preventDefault();

    const age = form.age.value;
    const ageNumber = Number(age,10);

    if(!isNaN(ageNumber) && ageNumber >= 18){
        console.log('wszystko ok')
    }else{
        console.log('nie mozna wejscs')
    }
})