import React, { Component } from 'react';
import MainPage from './components/mainpage/mainpage';
import NavBar from './components/navbar/navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <NavBar></NavBar> */}
          <MainPage></MainPage>
      </div>
    );
  }
}

export default App;
