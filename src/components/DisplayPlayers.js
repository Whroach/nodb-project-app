import React, { Component } from 'react'

export default class DisplayPlayers extends Component {
    constructor(props){
        super(props)

        this.state={
            displayForm: false,
            nameInput: '',
            teamInput: '',
            positionInput: ''
        }
    };

    draftPick = () => {

        // const { value } = this.props

        let draftSelection = {
            img: this.props.value.image,
            name: this.props.value.name,
            team: this.props.value.team,
            position: this.props.value.position
        }
        console.log(draftSelection)

        this.props.draftPlayer(draftSelection)
    };



    showNameInput = (value) => {
        this.setState({nameInput: value});
    };

    showTeamInput = (value) => {
        this.setState({teamInput: value})
    };
    
    showPositionInput = (value) => {
        this.setState({positionInput: value})
    }



    submitEdit = (id) => {
        this.props.editPlayer(id, this.state.nameInput);
    }


    displayForm = () => {
        return (
            <div>
                <form id="edit-player">
                    <label>Edit Player Form:</label>
                    <input type="text" value={this.state.nameInput} onChange={element => this.showNameInput(element.target.value)}/>
                    <input type="text" value={this.state.teamInput} onChange={element => this.showTeamInput(element.target.value)}/>
                    <input type="text" value={this.state.positionInput} onChange={element => this.showPositionInput(element.target.value)}/>
                    <button onClick = {() => this.submitEdit(this.props.value.id)}>Update Player</button>
                </form>
            </div>
        );
    }


    render() {

        return (
            <div>
                <dl>
                    <div className = "view-players">
                        <img src={this.props.value.image} alt={this.props.value.name} id="playerImage"/>
                        <div className ="player-description">
                            <p id ="playerName">{this.props.value.name}</p>
                            <p className ="teamName">{this.props.value.team}</p>
                            <p className = "teamName">{this.props.value.position}</p>
                        </div>
                        <button id = "draft-button" onClick={this.draftPick}>Draft</button>
                    </div>
                </dl>
                <button onClick={() => this.setState({displayForm: true})}>Edit Player</button>
                <form id="edit-player">
                <label>Edit Player Form:</label>
                <input type="text" value={this.state.nameInput} onChange={element => this.showNameInput(element.target.value)}/>
                <button onClick = {() => this.submitEdit(this.props.value.id)}>Update Player</button>
                </form>
                {this.state.displayForm ? this.displayForm() : null}

            </div>
        )
    }
};






//                 <form id="edit-player">
//                     <label>Edit Player Form:</label>
//                     <input type=state.nameInput} onChange={element => this.showNameInput(element.target.value)}/>
//                     <input type="text" value={this.state.teamInput} onChange={element => this.showTeamInput(element.target.value)}/>
//                     <input type="text" value={this.state.positionInput} onChange={element => this.showPositionInput(element.target.value)}/>
//                     <button onClick = {() => this.submitEdit(this.props.value.id)}>Update Player</button>
//                 </form>
//             </div>


// <div>
// <form id="edit-player">
//     <label>Edit Player Form:</label>
//     <input type="text" value={this.state.nameInput} onChange={element => this.showNameInput(element.target.value)}/>
//     <button onClick = {() => this.submitEdit(this.props.value.id)}>Update Player</button>
//     </form>
// </div> */}