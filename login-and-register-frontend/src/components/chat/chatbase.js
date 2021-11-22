import React from "react";
import ChatHW from './chat-h';
import Chat from './chat';
function Chatbase({user})
{
    return(
        <>
       
      { console.log(user._id)}
      {user.type === "patient" ? <Chat uid={user._id} toId={2} /> : <ChatHW  toId={2}/>}
      </>
    )
}
export default Chatbase;