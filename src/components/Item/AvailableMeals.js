import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItem from "./Meals/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = (props) => {
  const meals = DUMMY_MEALS.map((element) => (
    <MealItem
      key={element.id}
      name={element.name}
      description={element.description}
      price={element.price}
      id={element.id}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
