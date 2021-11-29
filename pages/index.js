const axios = require("axios");
// this is needed in order to require axios

const Index = () => {
  const getBeers = (e) => {
    e.preventDefault();
    // to stop the button re-rendering

    // axios always comes back with one.then i want to render this out to the console
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((res) => console.log(res));
  };

  return (
    <div>
      <h4>Beer Punk </h4>
      <button>Get All Beers</button>
    </div>
  );
};

export default Index;
