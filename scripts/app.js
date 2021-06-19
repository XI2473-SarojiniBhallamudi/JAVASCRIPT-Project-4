
//dom queries
const chatlist = document.querySelector('.chat-list');
const newChatform = document.querySelector('.new-chat');
const newusername = document.querySelector('.new-name');
const updatemessage = document.querySelector('.update-message');
const rooms = document.querySelector('.chat-rooms');
// add new chat 
newChatform.addEventListener('submit',e=>{
    e.preventDefault();
    const message = newChatform.message.value.trim();
    chatroom.addChat(message)
    .then(()=> newChatform.reset())
    .catch(err=> console.log(err));
});

// updating username
newusername.addEventListener('submit',e=>{
    e.preventDefault();
    // updating name through chatroom class
    const newName = newusername.name.value.trim();
    chatroom.updateName(newName);
    // reset form 
    newusername.reset();
    //notify for updating name
updatemessage.innerText =`Your name is updated to ${newName}`; 
setTimeout(()=>updatemessage.innerText = '',4000);
});
// to update chatroom
rooms.addEventListener('click',e=>{
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat =>chatUI.render(chat));
    }
});
// check locastorage for name
const username =localStorage.username ? localStorage.username : 'unknown';

// class instances
const chatUI = new ChatUI(chatlist);
// class instance
const chatroom = new Chatroom('general',username);

// get chats 
chatroom.getChats(data=>chatUI.render(data));