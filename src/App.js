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

//Increment, etc
class ChangeValue extends React.Component{
  constructor(props) {
    super(props);
    this.state = {count: 0}
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.reset = this.reset.bind(this)
  }
  reset() {
    this.setState({count: 0})
  }
  increase() {
    this.setState(state => ({count: state.count + 1}) )
  }
  decrease() {
    this.setState(state => ({count: state.count - 1}) )
  }
  render() {
    return(
      <>
      <br />
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
        <button onClick={this.reset}>Reset</button>
        <h1>Count: {this.state.count}</h1>
      </>
    )
  }
}

// log input state
class Input extends React.Component{
  constructor(props){
    super(props);
    this.state = {myInput: ''}
    this.myMethod = this.myMethod.bind(this)
  }
  myMethod(event) {
    this.setState({myInput: event.target.value})
  }
  render() {
    return(
      <>
        <input value={this.state.myInput} onChange={this.myMethod}></input>
        <h3>You typed: <strong>{this.state.myInput}</strong></h3>
        <Returnprops myInput={this.state.myInput}/>
      </>
    )
  }
}

// return property from another component
class Returnprops extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h3>{this.props.myInput} - I returned this property from another component</h3>
    )
  }
}

// serve stimulation
class Server extends React.Component{
  constructor(props) {
    super(props);
    this.state = {onlineUsers: null}
  }
  componentDidMount() {
    setTimeout(()=> 
    this.setState({onlineUsers: 4000000})
    )
  }
  render() {
    return (
      <>
        <h3>API call stimulation</h3>
        <h3>Online users: {this.state.onlineUsers}</h3>
      </>
    )
  }
}

// keyboard event. PROBLEM HERE. CAN'T DISPLAY
class KeyboardEventC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener("keydown", this.setState({message: this.handleKeyPress}))
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.setState({message: this.handleKeyPress}))
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (KeyboardEvent.code === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};

// The function that renders all components
function Main () {
    return (
      <div className="css">
        <Hone />
        <Btn />
        <Toggle />
        <ChangeValue />
        <Input />
        <Server />
      </div>
    )
}



export default Main;
