import React, { Component } from 'react'

export default class DisplayPlayers extends Component {

    // draftPick = () => {
    //     const { player } = this.props;

    //     let draftSelection = {
    //         name: player.data.first_name,
    //         team: player.data.last_name
    //     }

    //     this.props.draftPlayer(draftSelection)
    // }



    render() {
        const { value } = this.props


        return (
            <div className = "view-players">
                <img src={value.image}/>
                <p>{value.name}</p>
            
            </div>
        )
    }
}
