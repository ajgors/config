class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats')
    }
}

const chatroom = new Chatroom('gaming', 'shaun');
console.log()