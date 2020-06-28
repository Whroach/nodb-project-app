import React, { Component } from 'react'

export default class DisplayPlayers extends Component {

    draftPick = () => {

        // const { value } = this.props

        let draftSelection = {
            name: this.props.value.name,
            team: this.props.value.team,
            position: this.props.value.position
        }
        console.log(draftSelection)

        this.props.draftPlayer(draftSelection)
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

            </div>
        )
    }
};

