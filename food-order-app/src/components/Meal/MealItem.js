import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  return (
    <div className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <p className={classes.description}>{props.meal.description}</p>
        <p className={classes.price}>{props.meal.price}</p>
      </div>
      <MealItemForm meal={props.meal}></MealItemForm>
    </div>
  );
};

export default MealItem;
