import React, { Component } from 'react'
import DisplayPlayers from './DisplayPlayers'
import axios from 'axios'


export default class Players extends Component {

    constructor(props){
        super(props)

        this.state = {
            playerlist: []

        };
    };




    componentDidMount = () => {
        this.getPlayers();
      }
    
      getPlayers = () => {
        axios.get('/api/players')
        .then(res =>{
          this.setState({playerlist: res.data})
        })
        .catch(error => console.log(error));
      }



    render() {

        const  { playerlist } = this.state 

        const allPlayers = playerlist.map((element,index) => {
          return <DisplayPlayers value={element} key={index}/>
        });

        return (
            <div>
                {allPlayers}
                
            </div>
        )
    }
}
