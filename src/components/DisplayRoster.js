import React, { Component } from 'react'

export default function DisplayRoster (props) {


        return (
            <div>
                <div>
                    <img src={props.value.image} />
                    <p>{props.value.name}</p>
                    <p>{props.value.team}</p>
                    <p>{props.value.position}</p>
                    <button id = "waive-button" onClick={() => props.removePlayer(props.value.key)}>Waive</button>
                </div>
            </div>
        )
    

};


