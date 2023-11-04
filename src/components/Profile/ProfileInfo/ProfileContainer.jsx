import React from "react";
import Profile from "../Profile";
import { connect } from "react-redux";
import { getUserProfile, updateStatus } from "../../../redux/profile-reducer";
import { compose } from "redux";
import { getStatus } from "../../../redux/profile-reducer";
class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.params.userId;
        if(!userId){
            userId=1;
        } 
       this.props.getUserProfile(userId);
       this.props.getStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}



let mapStateToProps = (state) =>({
    profile:state.profilePage.profile,
    isAuth:state.auth.isAuth,
    status:state.profilePage.status
});

 


export default compose(
    connect(mapStateToProps,  {getUserProfile, getStatus, updateStatus}),
    //withRouter,
    //withAuthRedirect
) (ProfileContainer);