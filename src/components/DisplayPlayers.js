import React, { Component } from 'react'

export default class DisplayPlayers extends Component {



    render() {
        const { value } = this.props


        return (
            <div className = "view-players">
                <p>{`${value.first_name} ${value.last_name}`}</p>
                <p>{`Team: ${value.team.full_name}`}</p>
                <p>{`Position: ${value.position}`}</p>
            </div>
        )
    }
}
