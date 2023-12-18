import React from 'react';
import {
  Tab, CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './style.css';

function BurgerIngredients() {
  const [current, setCurrent] = React.useState('buns')
  return (
  <div>
    <div style={{ display: 'flex' }}>
        <Tab value='buns' active={current === 'buns'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value='sauces' active={current === 'sauces'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value='mains' active={current === 'mains'} onClick={setCurrent}>
          Начинки
        </Tab>
    </div>
    {current === 'buns' &&
      <>
        <h2  className='text text_type_main-medium pb-6 pt-10'>Булки</h2>
        <div>
          <div> 
            <img src='' alt='' />
            <span>20</span> <CurrencyIcon />
            <div>vjshdvjhdv</div>
          </div>
        </div>
      </>
    }
    {current === 'sauces' &&
      <>
        <h2  className='text text_type_main-medium pb-6 pt-10'>Соусы</h2>
        <div>
          <div> 
            <img src='' alt='' />
            <span>20</span> <CurrencyIcon />
            <div>vjshdvjhdv</div>
          </div>
        </div>
      </>
    }
    {current === 'mains' &&
      <>
        <h2  className='text text_type_main-medium pb-6 pt-10'>Начинки</h2>
        <div>
          <div> 
            <img src='' alt='' />
            <span>20</span> <CurrencyIcon />
            <div>vjshdvjhdv</div>
          </div>
        </div>
      </>
    }
   </div>
  );
}

BurgerIngredients.propTypes = {
};

export default BurgerIngredients;
