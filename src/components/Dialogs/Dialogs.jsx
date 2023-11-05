import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textareal } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {


    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textareal} 
                validate={[required, maxLength50]} name="newMessageBody" placeholder="Enter your text"></Field>
                <div><button>Send</button></div>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)

export default Dialogs;