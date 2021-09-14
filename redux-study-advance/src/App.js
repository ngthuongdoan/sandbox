import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { fetchItems } from './store/items';
let initial = true;

function App() {
  const isShow = useSelector((state) => state.toggle.isShow);
  const dispatch = useDispatch();
  useEffect(() => {
    if (initial) {
      dispatch(fetchItems());
      initial = false;
      return;
    }
  }, [dispatch]);
  return (
    <Layout>
      {isShow && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
