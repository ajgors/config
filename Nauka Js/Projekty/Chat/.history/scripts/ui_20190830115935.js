//render chat templates to the doom
//clear the list of chats (when the room changes)


class ChatUI{
    constructor(list){
        this.list = list;
    }
    render(data){
        console.log(data.message)
        const html = `
        <li class="list-group-item">
            <span class="username">${data.username}</span>
            <span class="message">${data.message}</span>
            <div class="time">${data.created_at.toDate()}</div>
        </li>
        `;
        this.list.innerHTML += html
    }
}