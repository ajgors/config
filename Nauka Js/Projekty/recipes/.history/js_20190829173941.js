db.collection('recipes').get().then((snapshot) =>{
    console.log(snapshot.docs[0].data)
}).catch(err =>{
    console.log(err)
})