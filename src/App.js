import React, {Component} from 'react';
import './App.css';
import Profiles from './components/Profiles'
import axios from 'axios'


class App extends Component {
  constructor(props){
    super(props)


    this.state = {
      playerProfiles: []
    }
  };

  componentDidMount = () => {
    this.getPlayers();
  }

  getPlayers = () => {
    axios.get('/api/players')
    .then(res =>{
      this.setState({playerProfiles: res.data})
    })
    .catch(error => console.log(error));
  }









  render(){
    return(
      <div><Profiles/></div>
    )
  }
}
export default App;
