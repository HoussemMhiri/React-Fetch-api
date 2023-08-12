import React from "react";
import CardItem from "../cardItem/CardItem";
import "./CardsStyle.css";

const CardCont = ({ data, del }) => {
  return (
    <div>
      <h1>Cheese types</h1>
      <section className="cont">
        {data.map((el) => (
          <CardItem key={el.food.foodId} el={el} del={del} />
        ))}
      </section>
    </div>
  );
};

export default CardCont;
