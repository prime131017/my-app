import { compose } from "redux";
import { sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        dialogsPage: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody
    }
};

let mapDIspatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
};

export default compose (
    connect(mapStateToProps, mapDIspatchToProps),
    //withAuthRedirect

) (Dialogs);