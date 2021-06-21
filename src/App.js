import React from "react";


function Food({name,picture}){
  return <div>
    <h3>I love {name}</h3>
    <img src={picture} />
    </div>
  ;

}
const foodILike = [
  {
    name:"a",
    image:"https://source.unsplash.com/category/nature/1600x900"
  },
  {
    name:"b",
    image:"https://source.unsplash.com/category/nature/1600x900"
  },
  {
    name:"c",
    image:"https://source.unsplash.com/category/nature/1600x900"
  },
]
function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
