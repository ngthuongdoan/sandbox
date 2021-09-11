import classes from './HeaderCartButton.module.css';
import CartIcon from '../../Cart/CartIcon';

const HeaderCartButton = () => {
  return (
    <div className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.title}>Your Cart</span>
      <span className={classes.badge}>0</span>
    </div>
  );
};

export default HeaderCartButton;
