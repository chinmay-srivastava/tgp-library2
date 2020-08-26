import React, { Component } from 'react';

import {DETAILS} from '../shared/details';
import Tiles from './tiles'
import Header from  "./header"
import { NavbarBrand,Navbar, Nav, NavDropdown, Button, Media } from "reactstrap";


class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      details:DETAILS,
      open: [false, false, false, false]
    }
    this.close=this.close.bind(this);
  }

  close=(id)=>{
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
    var content = [];
    var initial=0;
      var end=initial+4; 
    this.state.details.forEach((detail, i) =>{  
      if( i==0 || i==1 || i==2 || i==3 || i>=4){
        content.push(
          <div className="row" key={detail.id}>       
          <Tiles open={this.state.open} close={this.close} id={i} details={this.state.details.slice(initial,end)}/>
          </div>
        )
        initial+=4;
        end+=4;
      }
  });

    return (
        <div >
          {content}
      </div>
    );
  }
}



export default Main;
