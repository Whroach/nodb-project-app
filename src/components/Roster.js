import React from 'react'
import DisplayRoster from './DisplayRoster'


export default function Roster (props) {

        // const { fantasyDisplay } = props
    
        const fantasyProfile = props.fantasyDisplay.map((element,index) => (
            <DisplayRoster value = {element} key ={index} removePlayer={props.removePlayer} />
        ));
          
            return (
                <div>
                    <div className="player-selection">
                        <p>First Pick:</p>
                        <p>Second Pick:</p>
                        <p>Third Pick:</p>
                        <p>Fourth Pick:</p>
                        <p>Fifth Pick:</p>
                    </div>
                    <div className="fantasy-roster">{fantasyProfile}</div>
                </div>
            )
        

}

