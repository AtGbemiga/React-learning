import React from "react"
import ReactDOM, { render } from "react-dom"
import './App.css';

// heading
function Hone () {
  return (
    <>
      <h1>react practice</h1>
    </>
  )
}

// this button changes state on click
class Btn extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        change: "Not Clicked :-(" 
      };
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick () {
      this.setState ({change: "Yaa! Clicked :-)"})
    }
    render() {
      return (
        <>
          <button onClick={this
          .handleClick
        }>Click Me</button>
        <h3>{this.state.change}</h3>
        </>
      )
    }
}

// toggle effect with btn
class Toggle extends React.Component{
  constructor(props) {
    super(props);
    this.state = {xyz: false}
    this.toggleEffect = this.toggleEffect.bind(this)
  }
  toggleEffect() {
    this.setState(state=> {
      if(state.xyz === true) {
        return {xyz: false}
      } else {
        return {xyz: true}
      }
    });
  }
  render() {
    if(this.state.xyz) {
      return (
        <>
          <button onClick = {this.toggleEffect}>Click Me Too</button>
          <h3>I am shown. Whoo Whoo! I'm a toggle button.</h3>
        </>
      )
    } else {
      return (
        <>
          <button onClick = {this.toggleEffect}>Click Me Too</button>
        </>
      )
    }
    
  } 
}
// The function that renders all components
function MainBody () {
    return (
      <>
        <Hone />
        <Btn />
        <Toggle />
      </>
    )
}

export default MainBody;
