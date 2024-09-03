import React from 'react'

import Separator from './Separator';
import MenuItem from './MenuItem';

const menuItems = [
  {
    imgSrc: '/assets/menu/coffee-1.png',
    name: 'Espresso',
    descritpion: 'Rich and bold shot of coffee',
    price: 3.3,
  },
  {
    imgSrc: '/assets/menu/coffee-2.png',
    name: 'Cappuccino',
    descritpion: 'Espresso with steamed milk and foam',
    price: 4.5,
  },
  {
    imgSrc: '/assets/menu/coffee-3.png',
    name: 'Latte',
    descritpion: 'Espresso with steamed milk',
    price: 4.2,
  },
  {
    imgSrc: '/assets/menu/coffee-4.png',
    name: 'Americano',
    descritpion: 'Espresso with hot water',
    price: 3.5,
  },
  {
    imgSrc: '/assets/menu/coffee-5.png',
    name: 'Mocha',
    descritpion: 'Espresso with chocolate and steamed milk',
    price: 5.4,
  },
  {
    imgSrc: '/assets/menu/coffee-1.png',
    name: 'Macchiato',
    descritpion: 'Espresso with a dollop of foam',
    price: 3.75,
  },
  {
    imgSrc: '/assets/menu/coffee-2.png',
    name: 'Flat White',
    descritpion: 'Espresso with microfoam milk',
    price: 4.25,
  },
  {
    imgSrc: '/assets/menu/coffee-3.png',
    name: 'Iced Coffee',
    descritpion: 'Chilled coffee over ice',
    price: 3.75,
  },
  {
    imgSrc: '/assets/menu/coffee-4.png',
    name: 'Affogato',
    descritpion: 'Espresso shot over vanilla ice cream',
    price: 5.5,
  },
  {
    imgSrc: '/assets/menu/coffee-5.png',
    name: 'Irish Coffee',
    descritpion: 'Coffee with Irish whiskey and cream',
    price: 6.5,
  },
]

const Menu = () => {
  return (
    <section className='pt-12 pb-16 xl:pt-16 xl:pb-36'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-4 mb-12 xl:mb-24'>
          <h2 className='h2 text-center'>Our Menu</h2>
          <div className="mb-4">
            <Separator bg='accent' />
          </div>
          <p className='text-center max-w-[620px] mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste beatae deleniti 
            assumenda autem laborum harum! In aliquid molestias enim modi commodi suscipit 
            doloremque necessitatibus soluta et aliquam, debitis saepe veritatis?
          </p>
        </div>
        <div className='flex flex-col items-center gap-12 xl:gap-24'>
          <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center'>
            {menuItems.map((item, index) => {
              const { name, descritpion, price, imgSrc } = item;
              return <MenuItem name={name} description={descritpion} price={price} imgSrc={imgSrc} key={index} />
            })}
          </div>
          <button className='btn'>View full <menu></menu></button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
