import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  const displayItems = items.map((item) => {
    return {
      ...item,
      total: item.price * item.quantity,
    };
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {displayItems.map((item) => (
          <CartItem item={item} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
