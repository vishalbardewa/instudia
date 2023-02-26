import React from 'react';

import { motion } from 'framer-motion';

export default function UnderConstruction() {
  return (
    <div className="flex flex-col">
      <h1 className="mx-10 text-center text-xl font-bold">
        Oops!! We understand your curiosity but this page is under construction
      </h1>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative mx-auto h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem] lg:h-[50rem] lg:w-[50rem]"
      >
        <img
          className="h-auto w-auto object-cover"
          src="/assets/images/coming-soon.png"
          alt="Instudia"
          height="320px"
          width="320px"
        />
      </motion.div>
    </div>
  );
}
