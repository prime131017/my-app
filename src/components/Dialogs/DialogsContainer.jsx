import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessagBody:state.dialogsPage.newMessagBody
    }
};

let mapDIspatchToProps = (dispatch) => {
    return {
        updateNewMessageBody:(body)=>{
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage:()=>{
            dispatch(sendMessageCreator());
        }
    }
};


const DialogsContainer = connect(mapStateToProps, mapDIspatchToProps)(Dialogs);

export default DialogsContainer;