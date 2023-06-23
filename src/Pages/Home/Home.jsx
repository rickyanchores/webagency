import React from "react";
import Card from "../../Components/Card/Card";
import coding from "../../utils/Images/coding.png";

const Home = () => {
  return (
    <div className="Home">
      <h1>Home</h1>
      <p>this is home</p>
      <div className="Hero">
        <Card
          image={coding}
          title={"Web Agency"}
          description={"Simple web dev agency"}
        />
      </div>
    </div>
  );
};

export default Home;
