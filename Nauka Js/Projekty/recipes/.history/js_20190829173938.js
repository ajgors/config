db.collection('recipes').get().then((snapshot) =>{
    console.log(snapshot.docs[])
}).catch(err =>{
    console.log(err)
})