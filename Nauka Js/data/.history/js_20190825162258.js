const promise = new Promise((resolve, reject) => {
    if(tru){
        resolve('stuff worked');
    }else{
        reject('error it broke');
    }
})

promise.then(result => console.log(result))