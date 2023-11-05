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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return{
                ...state,
                messages:[...state.messages, { id: 4, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });//вместо return

export default dialogsReducer;