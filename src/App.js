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

  draftPlayer = (playersArr) => {
    axios.post('/api/players', {playersArr: playersArr})
    .then(res => {
      this.setState({fantasyTeam: res.data})
    })
    .catch(error => console.log(error));

  }





  render(){


    return(
      <div>
         <Roster
        fantasyDisplay={this.state.fantasyTeam}
        />

        <Players
        draftPlayer ={this.draftPlayer}
        />

        </div>
    )
  }
}
export default App;
