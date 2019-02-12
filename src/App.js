import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login'
import MainContainer from './MainContainer/MainContainer'

class App extends Component {
  state={
    logged: false,
    username: ""
  }
  login = (username)=>{
    this.setState({
      logged: true,
      username: username
    })
  }
  dogs = []
  render() {
    return (
      <div className='App'>
       {this.state.logged ? <MainContainer username={this.state.username}/> : <Login login={this.login}/>}
     </div>
    );
  }
}

export default App;
