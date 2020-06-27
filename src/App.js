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

  componentDidMount = () => {
    this.draftPlayer()

  };

  draftPlayer = () => {
    axios.post('/api/draft-player', {nbaPlayers: nbaPlayers})
    .then(response => {
      this.setState({fantasyTeam: response.data})
    })
    .catch(error => console.log(error));

  }





  render(){

    return(
      <div>
        <Players/>

        <Roster
        fantasyDisplay={this.state.fantasyTeam}
        />
        <DisplayRoster/>



        </div>
    )
  }
}
export default App;
