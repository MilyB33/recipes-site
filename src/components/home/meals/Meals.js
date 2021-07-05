import React from 'react';
import MealCard from './MealCard';

const Meals = () => {
  return (
    <section className="meals">
      <h1>Meal Types :</h1>
      <div className="meals__box">
        <MealCard
          url="main_course.jpg"
          type="Main Course"
          className="bigger"
        />

        <MealCard url="soup.jpg" type="Soup" className="bigger" />

        <MealCard
          url="dessert.jpg"
          type="Dessert"
          className="smaller"
        />

        <MealCard
          url="side_dish.jpg"
          type="Side Dish"
          className="smaller"
        />

        <MealCard
          url="appetizer.jpg"
          type="Appetizer"
          className="smaller"
        />

        <MealCard
          url="breakfast.jpg"
          type="Breakfast"
          className="smaller"
        />

        <MealCard
          url="beverage.jpg"
          type="Beverage"
          className="smaller"
        />

        <MealCard
          url="marinade.jpg"
          type="Marinade"
          className="smaller"
        />

        <MealCard
          url="fingerfood.jpg"
          type="FingerFood"
          className="smaller"
        />

        <MealCard url="snack.jpg" type="Snacks" className="smaller" />
        <MealCard url="salad.jpg" type="Salad" className="smaller" />
        <MealCard url="bread.jpg" type="Bread" className="smaller" />

        <MealCard url="sauce.jpg" type="Sauce" className="smaller" />
        <MealCard url="drink.jpg" type="Drinks" className="smaller" />
      </div>
    </section>
  );
};

export default Meals;
