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
            username = this.username,
            room = this.room,
            created_at = firebase.firestore
        }
    }
}

const chatroom = new Chatroom('gaming', 'shaun');
console.log(chatroom)