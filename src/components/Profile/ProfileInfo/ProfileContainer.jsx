import React from "react";
import Profile from "../Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../../redux/profile-reducer";
import { compose } from "redux";



class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.params.userId;
        if(!userId){
            userId=1;
        } 
       this.props.getUserProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}



let mapStateToProps = (state) =>({
    profile:state.profilePage.profile,
    isAuth:state.auth.isAuth
});

 


export default compose(
    connect(mapStateToProps,  {getUserProfile})
    //withRouter,
    //withAuthRedirect
) (ProfileContainer);