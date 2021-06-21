import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

class App extends React.Component{
  state ={
      isLoading: true,
      movies: []
  }
  getMovies = async() => {
      const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
  }
  componentDidMount(){
      this.getMovies();
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