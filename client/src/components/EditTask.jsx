import React from "react"

export default class EditTask extends React.Component{
    render(){
        return(
            <button className="edit-button" onClick={this.props.onEdit} >✍🏻</button>
        );

    }
}