import React, { useState, useEffect } from 'react';

import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
import Card from '../UI/Card';

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/meals')
      .then((response) => response.json())
      .then((data) => setMeals(data));
  }, []);

  return (
    <Card className={classes.meals}>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <MealItem meal={meal}></MealItem>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
