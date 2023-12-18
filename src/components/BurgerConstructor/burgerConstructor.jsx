import React from 'react';
import {
  Button,
 ConstructorElement, DragIcon, CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <ConstructorElement
        type='top'
        isLocked={true}
        text='Краторная булка N-200i (верх)'
        price={200}
      />
      <div style={{ display: 'flex' }}>
        <DragIcon />
        <ConstructorElement
          text='Краторная булка N-200i (верх)'
          price={50}
        />
      </div>
      <ConstructorElement
        type='bottom'
        isLocked={true}
        text='Краторная булка N-200i (низ)'
        price={200}
      />
      <div style={{ textAlign: 'right'}} className='text text_type_digits-large'>
        <span>610</span> 
        <CurrencyIcon /> 
        <Button htmlType="button" type="primary" size="large">Оформить заказ</Button>
      </div>
    </div>
  );
}

BurgerConstructor.propTypes = {
};

export default BurgerConstructor;
