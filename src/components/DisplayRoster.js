import React, { Component } from 'react'

export default class DisplayRoster extends Component {
    constructor(props){
        super(props)

        this.state = {

        };
    };

    render() {



        
        return (
            <div>
                <div>
                    <section>
                    </section>
                    <section></section>
                <p>{this.props.value.name}</p>
                <p>{this.props.value.team}</p>
                <p>{this.props.value.position}</p>
                </div>
            </div>
        )
    }
}

