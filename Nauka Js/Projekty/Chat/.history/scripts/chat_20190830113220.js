class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats')
    }
    async addChat(message){
        //format a chat object
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room : this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };

    //save the chat document
    const response = await this.chats.add(chat)
    return response
    }
    getChats(callback){
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot =>{
                snapshot.docChanges().forEach(change =>{
                    if(change.type === 'added'){
                        //update ui
                        callback(change.doc.data())
                    }
                });
            });
    }
    updateName(username){
        this.username = username
    }
    updateRoom(room){
        this.room = room;
        console.log('room updated');
        this.unsub();
    }
}

const chatroom = new Chatroom('gaming', 'shaun');

// chatroom.addChat('hello yall')
//     .then(() => console.log('chat added'))
//     .catch(err => console.log(errr))

chatroom.getChats((data) =>{
    console.log(data)
})

chatroom.updateRoom('gaming')