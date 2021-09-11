import classes from './AvailableMeals.module.css';
import meals from '../../common/dummy-meals';
import MealItem from './MealItem';
import Card from '../UI/Card';

const AvailableMeals = (props) => {
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
