import React, {Component} from 'react';
import './App.css';
import Players from './components/Players'
import axios from 'axios'
import Roster from './components/Roster'
import DisplayRoster from './components/DisplayRoster';


class App extends Component {
  constructor(props){
    super(props)


    this.state = {
      fantasyTeam: []
    }
  };

  // componentDidMount = () => {
  //   this.draftPlayer()

  // };

  // draftPlayer = (players) => {
  //   axios.post('/api/draft-player', {players: players})
  //   .then(res => {
  //     this.setState({fantasyTeam: res.data})
  //   })
  //   .catch(error => console.log(error));

  // }





  render(){

    // console.log(this.draftPlayer)

    return(
      <div>
        <Players
        // draftPlayer ={this.draftPlayer}
        />

        {/* <Roster
        fantasyDisplay={this.state.fantasyTeam}
        /> */}



        </div>
    )
  }
}
export default App;
