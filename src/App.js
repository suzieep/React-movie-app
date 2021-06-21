import React from "react";


function Food({fav}){
  return <h3>I love {fav}</h3>;

}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food 
        fav="kimchi" 
        something={true}
        papapapa={["hello",1,2,3,4,true]}
      />
      <Food 
        fav="ramen"
      />
    </div>
  );
}

export default App;
