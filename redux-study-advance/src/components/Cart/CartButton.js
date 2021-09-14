import { useDispatch, useSelector } from 'react-redux';
import { toggleActions } from '../../store/toggle';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const items = useSelector((state) => state.cart.items);
  const totalProduct = items.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleActions.toggle());
  };
  return (
    <button onClick={toggle} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalProduct}</span>
    </button>
  );
};

export default CartButton;
