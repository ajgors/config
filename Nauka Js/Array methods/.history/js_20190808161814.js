const scores = [10, 30, 15,25,50,40,5];

const filteredScores = scores.filter((score) =>{
    return score > 20;
})
console.log(filteredScores);

const users = [
    {name: 'igor', premium: 'true'},
    {name: 'ola', premium: 'false'},
    {name: 'ania', premium : 'false'},
]; 

const premiumUsers = users.filter((users) =>{
    return users.premium === 'tr'
})