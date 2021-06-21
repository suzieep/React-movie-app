import React from "react";


function Food({name,picture}){
  return <div>
    <h3>I love {name}</h3>
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
    image:"https://source.unsplash.com/category/nature/1600x900"
  },
  {
    id:3,
    name:"c",
    image:"https://source.unsplash.com/category/nature/1600x900"
  },
];
// function renderFood(dish){
//   console.log(dish);
//   return <Food name={dish.name} picture={dish.image} />
// }
function App() {
  return (
    <div>
      {foodILike.map(dish =>(
        <Food key={dish.id} name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
