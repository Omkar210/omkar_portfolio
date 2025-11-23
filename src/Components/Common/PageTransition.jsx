import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Stairs from './Stairs';

const PageTransition = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      {children}
      <Stairs />
    </AnimatePresence>
  );
};

export default PageTransition;