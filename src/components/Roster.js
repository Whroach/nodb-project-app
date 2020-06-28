import React, { Component } from 'react'
import DisplayRoster from './DisplayRoster'


export default function Roster (props) {

        const { fantasyDisplay } = props
    
        const fantasyProfile = fantasyDisplay.map((element, index) => {
            return <DisplayRoster value = {element} key ={index} />
          });
          
            return (
                <div>
                    <h1>Fantasy Team</h1>
                    {fantasyProfile}
                </div>
            )
        

}


// export default class Roster extends Component {
//     render() { 

//     const { fantasyDisplay } = this.props

//     const fantasyProfile = fantasyDisplay.map((element, index) => {
//         return <DisplayRoster value = {element} key ={index} />
//       });
      
//         return (
//             <div>
//                 {fantasyProfile}
//             </div>
//         )
//     }
// }
