import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

const links = [
  { href: '/', name: 'Home' },
  { href: '/', name: 'Explore' },
  { href: '/', name: 'About' },
  { href: '/', name: 'Menu' },
  { href: '/', name: 'Contact' },
];

const letterAnim = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1], delay: 0.03 },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1], delay: 0.03 },
  },
}

const getLetter = (name) => {
  let letters = [];
  name.split('').forEach((letter, index) => {
    letters.push(<motion.span varians={letterAnim} initial="initial" animate="enter" exit="exit" key={index}>{letter}</motion.span>);
  });

  return letters;
};

const NavList = () => {
  return (
    <ul className='flex flex-col gap-8 font-primary text-4xl font-semibold text-accent items-center uppercase'>
      {links.map((link, index) => {
        return (
          <Link href={link.href} key={index} className='flex overflow-hidden hover:text-white transition-all'>
            {getLetter(link.name)}
          </Link>
        );
      })}
    </ul>
  )
}

export default NavList;
