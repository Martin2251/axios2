const axios = require("axios");

const Index = () => {
  const martin = {
    name: "martin",
    age: "31",
    eyeColor: "hazel",
    hobby: "music",
    eyeGlasses: true,
  };

  //accessing an object

  console.log(martin.hobby);

  return (
    <div>
      <h4>Object Review</h4>
    </div>
  );
};

export default Index;
