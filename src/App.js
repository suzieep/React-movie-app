import React from "react";
import PropTypes from "prop-types";


function Food({name,picture,rating}){
  return <div>
    <h3>I love {name}</h3>
    <h4>rating = {rating}/5.0 </h4>
    <img src={picture} alt={name} />
    </div>
  ;

}
const foodILike = [
  { id:1,
    name:"a",
    image:"https://source.unsplash.com/category/nature/1600x900"
  },
  { id:2,
    name:"b",
    image:"https://source.unsplash.com/category/nature/1600x900",
    rating:4.9
  },
  {
    id:3,
    name:"c",
    image:"https://source.unsplash.com/category/nature/1600x900",
    rating:4.7
  },
];


Food.propTypes={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      {foodILike.map(dish =>(
        <Food 
          key={dish.id} 
          name={dish.name} 
          rating={dish.rating}
          picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
