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
}

const chatroom = new Chatroom('gaming', 'shaun');

chatroom.addChat('hello yall')
    .then(() => console.log('chat added'))