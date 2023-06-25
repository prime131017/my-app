import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.data.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.data.messages.map(m => <Message message={m.message} id={m.id} />)

    let newMessageElement= React.createRef();

    let sendMessage=()=>{
        props.sendMessage();
    }

    let onMessageChange =()=>{
        let textMessage = newMessageElement.current.value;
        props.updateNewMessage(textMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onMessageChange} 
                    ref={newMessageElement}
                    value={props.newMessageText}/>
            </div>
            <div>
                <button onClick={sendMessage}>Send a message</button>
            </div>
        </div>
    )
}

export default Dialogs;