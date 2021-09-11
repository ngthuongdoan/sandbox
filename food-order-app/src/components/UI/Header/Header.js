import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import meals from '../../../assets/img/meals.jpg';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <div>
          <HeaderCartButton></HeaderCartButton>
        </div>
      </header>
      <div className={classes['main-image']}>
        <img src={meals} />
      </div>
    </>
  );
};

export default Header;
