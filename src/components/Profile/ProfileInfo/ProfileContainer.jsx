import React from "react";
import Profile from "../Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../../redux/profile-reducer";

class ProfileContainer extends React.Component{

    componentDidMount(){
        debugger
        let userId = this.props.params.userId;
        if(!userId){
            userId=1;
        } 
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response => {
            this.props.setUserProfile(response.data);
        });
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
    profile:state.profilePage.profile
});

 
 // let WithUrlDataContainerComponent = withRouter;(WithUrlDataContainerComponent) withRouter();

export default connect(mapStateToProps,  {setUserProfile})(ProfileContainer);