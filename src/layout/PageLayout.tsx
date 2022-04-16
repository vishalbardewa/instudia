import React from 'react';

import { motion } from 'framer-motion';

import { Main } from '@/templates/Main';

import { Meta } from './Meta';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function PageLayout(props: any) {
  return (
    <Main meta={<Meta title="instudia" description="Layout page" />}>
      <div className="mx-auto max-w-7xl bg-white sm:px-6 lg:px-8">
        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: 'linear' }}
          className="flex h-full w-full"
        >
          {props.children}
        </motion.main>
      </div>
    </Main>
  );
}
