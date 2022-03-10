import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Biryani",
    description: " It is a layered rice preparation, traditionally made with cooked meat and rice. The meat is flavoured with warm spices (garam masala) and a gravy with tomato or onion.",
    price: 180.00,
  },
  {
    id: "m2",
    name: "Tandoori Chicken",
    description: "A dish of roasted chicken marinated in yogurt and generously spiced, giving the meat its trademark red colour.",
    price: 400.00,
  },
  {
    id: "m3",
    name: "Masala Chai",
    description: "A tea beverage made by boiling black tea in milk and water with a mixture of aromatic herbs and spices",
    price: 30.00,
  },
  {
    id: "m4",
    name: "Masala Dosa",
    description: "It is made from rice, lentils, potato, fenugreek, ghee and curryleaves, and served with chutneys and sambar.",
    price: 80.00,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
    
      key={meal.id}
      id ={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
