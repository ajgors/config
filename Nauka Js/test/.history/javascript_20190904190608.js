function mixed(text){
    console.log(text)
    for(let i=0; i<text.length; i++){
        if(i % 2 !== 0){
            text[i].toUpperCase()
        }else{
            text[i].toLo
        }
    }
}


let text = 'igor jest super' 
console.log(mixed(text))