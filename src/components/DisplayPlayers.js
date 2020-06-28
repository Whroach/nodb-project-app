import React, { Component } from 'react'

export default class DisplayPlayers extends Component {

    draftPick = () => {
        const { value } = this.props

        let draftSelection = {
            picture: value.image,
            name: value.name
        }
        console.log(draftSelection)

        this.props.draftPlayer(draftSelection)
    }



    render() {
        const { value } = this.props

        return (
            <div className = "view-players" onClick={this.draftPick}>
                <img src={value.image}/>
                <p>{value.name}</p>
            
            </div>
        )
    }
}
