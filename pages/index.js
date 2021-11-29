import { useState } from "react";
// need this to re-render the beers
const axios = require("axios");
// this is needed in order to require axios

// the default beer list is an empty array
const Index = () => {
  const [beerList, setBeerList] = useState([]);
  const getBeers = (e) => {
    e.preventDefault();
    // to stop the button re-rendering

    // axios always comes back with one.then i want to render this out to the console
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((res) => setBeerList(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h4>Beer Punk </h4>
      <button onClick={getBeers}>Get All Beers</button>
      {beerList.length >= 1
        ? beerList.map((beer, idx) => {
            return <p key={idx}>{beer.name}</p>;
          })
        : ""}
    </div>
  );
};

export default Index;
