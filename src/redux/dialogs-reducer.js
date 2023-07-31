const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Anatolii' },
        { id: 2, name: 'Rymma' },
        { id: 3, name: 'Ksenia' },
        { id: 4, name: 'Cheburashka' },
    ],
    messages: [
        { id: 1, message: 'Hi!', },
        { id: 2, message: 'How are you?', },
        { id: 3, message: 'Yo yo!', },
        { id: 4, message: 'Yo!', },
    ],

    newMessagBody: ""
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return{
                ...state,
                newMessagBody:action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessagBody;
            return{
                ...state,
                newMessagBody:'',
                messages:[...state.messages, { id: 4, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });//вместо return
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;