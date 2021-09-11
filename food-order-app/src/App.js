import AvailableMeals from './components/Meal/AvailableMeals';
import MealsSummary from './components/Meal/MealsSummary';
import Header from './components/UI/Header/Header';

const App = () => {
  return (
    <>
      <Header></Header>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </>
  );
};

export default App;
