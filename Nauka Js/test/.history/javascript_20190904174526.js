const txt = 'igor jest super';
let mix =''

for(const letter of txt){
    if(letter % 2 !== 0){
        mix += letter.toUpperCase()
    }
}
console.log(mix)