import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {DETAILS}  from './shared/details'
import Tiles from './components/tiles'
import Tiles2 from './components/tile2'
import Tiles3 from './components/tiles3'
import Tiles4 from './components/tiles4'
import slide from "./components/carousel"
import Main from "./components/Main"
import Header from'./components/header';
import { NavbarBrand,Navbar, Nav, NavDropdown, Button, Media } from "reactstrap";


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      details:DETAILS,
      open: [false, false, false, false]
    }
    this.close=this.close.bind(this);
  }

  close(id){
    let newOpen = this.state.open;
    this.state.open.forEach((current, index) => {
      console.log(index, id);
      if (index != id) {
        newOpen[index] = false;
      } else {
        newOpen[index] = true;
      }
    })
    console.log(newOpen);
    this.setState({open: newOpen});
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div >
          <Main/>
        </div>
      </div>
    );
  }
}



export default App;
