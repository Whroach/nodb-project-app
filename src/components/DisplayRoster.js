import React, { Component } from 'react'

export default class DisplayRoster extends Component {
    constructor(props){
        super(props)

        this.state = {

        };
    };

    render() {
        
        const { value } = this.props
        
        return (
            <div>
                <h1>A Team</h1>
                <img src={value.image}/>
                <p>{value.name}</p>
            </div>
        )
    }
}
