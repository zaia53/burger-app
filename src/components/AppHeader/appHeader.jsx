import React from 'react';
import {
  Logo, ProfileIcon, ListIcon, BurgerIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import header from './header.module.css';

function AppHeader() {
  return (
    <header className={header.header}>
      <nav>
        <a className='mr-2 pl-5 pr-5 pb-4 pt-4' href='./'>
          <BurgerIcon />
          <span className='pl-2 text text_type_main-default'>Конструктор</span>
        </a>
        <a className='pl-5 pr-5 pb-4 pt-4' href='./'>
          <ListIcon type='secondary' />
          <span className='pl-2 text text_type_main-default text_color_inactive'>Лента заказов</span>
        </a>
      </nav>
      <Logo />
      <a className='pl-5 pr-5 pb-4 pt-4' href='./'>
        <ProfileIcon type='secondary' />
        <span className='pl-2 text text_type_main-default text_color_inactive'>Личный кабинет</span>
      </a>
    </header>
  );
}

AppHeader.propTypes = {
};

export default AppHeader;
