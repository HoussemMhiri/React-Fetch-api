import React from "react";
import { Button, Card } from "react-bootstrap";

const CardItem = ({ el, del }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={el.food.image} />
        <Card.Body>
          <Card.Title>{el.food.knownAs}</Card.Title>
          <Card.Text>Calories: {el.food.nutrients.ENERC_KCAL}</Card.Text>
          <Button variant="primary">More</Button>
          <Button variant="danger" onClick={() => del(el.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
