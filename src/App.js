import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  state ={
      isLoading: true,
      movies: []
  }
  componentDidMount(){
      setTimeout(() => {
          this.setState({ isLoading: false});
      },6000);
  }

  render(){
    const {isLoading}=this.state;
    
    return (
      <div>
       {isLoading ? "Loading..." :"We are ready"}
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