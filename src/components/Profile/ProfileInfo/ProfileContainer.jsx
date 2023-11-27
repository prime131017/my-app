import React from "react";
import Profile from "../Profile";
import { connect } from "react-redux";
import { getUserProfile, updateStatus } from "../../../redux/profile-reducer";
import { compose } from "redux";
import { getStatus } from "../../../redux/profile-reducer";
class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.math.params.userId;
        if(!userId){
            userId=this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("/login")
            }
        } 
       this.props.getUserProfile(userId);
       this.props.getStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                 profile={this.props.profile} 
                 status={this.props.status} 
                 updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}



let mapStateToProps = (state) =>({
    profile:state.profilePage.profile,
    status:state.profilePage.status, 
    authorizedUserId:state.auth.userId,
    isAuth:state.auth.isAuth
});

 


export default compose(
    connect(mapStateToProps,  {getUserProfile, getStatus, updateStatus}),
    //withRouter,
    //withAuthRedirect
) (ProfileContainer);