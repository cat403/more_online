import React from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "./axios.js";

function TinderCards() {
  const [people, setPeople] = React.useState([]);

  const swiped = (direction, nameToDelete) => {
    console.log(`removing ${nameToDelete}`);
    //setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen`);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get("/tinder/card");
      setPeople([...req.data]);
    };
    fetchData();
  }, []);
  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(people) => swiped(people, person.name)}
            onCardLeftScreen={() => outOfFrame(people.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.imgUrl})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
