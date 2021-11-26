import React from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import { SwipeDown } from "@mui/icons-material";
function TinderCards() {
  const [people, setPeople] = React.useState([
    {
      name: "Elon Musk",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hnSg_DqrGWMwT0H7zNn3rYnsgHzpDbIHvw&usqp=CAU",
    },
    {
      name: "Jeff Bezos",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfKaMc7ceonmChuzTZgZjrn7tJ4Qk5yfn1Q&usqp=CAU",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log(`removing ${nameToDelete}`);
    //setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen`);
  };
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
              style={{ backgroundImage: `url(${person.url})` }}
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
