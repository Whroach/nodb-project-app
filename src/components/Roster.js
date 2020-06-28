import React from 'react'
import DisplayRoster from './DisplayRoster'


export default function Roster (props) {

        // const { fantasyDisplay } = props
    
        const fantasyProfile = props.fantasyDisplay.map((element, index) => (
            <DisplayRoster value = {element} key ={index}/>
        ));
          
            return (
                <div>
                    <div className="fantasy-roster">

                        <section className="front-court">


                        </section>
                        <section className="back-court">

                        </section>
                    {fantasyProfile}

                    </div>
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
