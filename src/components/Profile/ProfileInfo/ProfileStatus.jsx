import React from "react";
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title:'Yo'
    }

    activateEditMode() {
       // console.log(this.state.editMode);
        this.setState(
            {
                editMode:true
            }
        );
      //  console.log(this.state.editMode);

        //this.state.editMode = true;
        //this.forceUpdate();
    }
    deactivateEditMode() {
        // console.log(this.state.editMode);
         this.setState(
             {
                 editMode:false
             }
         );
       //  console.log(this.state.editMode);
 
         //this.state.editMode = true;
         //this.forceUpdate();
     }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
                    </div>
                }
            </div>

        )
    }
}

export default ProfileStatus