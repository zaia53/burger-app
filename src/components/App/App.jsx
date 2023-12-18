import React from 'react';
import AppHeader from '../AppHeader/appHeader';
import BurgerConstructor from '../BurgerConstructor/burgerConstructor';
import BurgerIngredients from '../BurgerIngredients/burgerIngredients';
import app from './app.module.css';

function App() {
  return (
    <main>
      <AppHeader />
      <section  className={app.main}>
        <h1 className='text text_type_main-large pb-5 pt-10'>Соберите бургер</h1>
        <div style={{ display: 'flex' }} className='text text_type_main-default'>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </section>
    </main>
  );
}

export default App;
