import React, {Component} from 'react';
import './App.css';
import Players from './components/Players'
import axios from 'axios'
import Roster from './components/Roster'
import Header from './components/Header'


class App extends Component {
  constructor(props){
    super(props)


    this.state = {
      fantasyTeam: [],
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

  editPlayer = (id, editName, editTeam, editPosition) => {
    let body = {name: editName, team: editTeam, position: editPosition}


    axios.put(`/api/player/${id}`, body)
    .then(res => {
      this.setState({fantasyTeam: res.data})
    })
    .catch(error => console.log(error))
  }



  removePlayer = (id) => {
    axios.delete(`/api/player/${id}`)
    .then(res => {
      this.setState({fantasyTeam: res.data})
    })
    .catch(error => console.log(error));

  }



  render(){


    return(
      <div className="background-image">
        <Header/>
          <Roster
            fantasyDisplay={this.state.fantasyTeam}
            removePlayer={this.removePlayer}
          />
          <div className="scroll-bar">
            <Players
              draftPlayer ={this.draftPlayer}
              editPlayer={this.editPlayer}
            />
          </div>
      </div>


    )
  }
}
export default App;
