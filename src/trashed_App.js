import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  constructor(props){
    super(props)
    console.log("hello");
  }
  state ={
    count: 0
  };

  add = () => {
    this.setState(current => ({count: current.count + 1}))
  };
  //setState calls render() and refresh
  minus =() => {
    this.setState(current => ({count: current.count - 1}))
  };

  componentDidMount(){
    console.log("component rendered")
  }
  componentDidUpdate(){
    console.log("component updated")
  }
  componentWillUnmount(){
    console.log("Goodbye, cruel world")
  }
  // react automatically execute class component's render method
  render(){
    console.log("im rendering");

    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }


}

export default App;

// Mounting
// 1. constructor
// 2. render
// 3. componentDidMount

// Updating
// 1. render
// 2. componentDidUpdate

// Unmounting
// 1. componentWillUnmount