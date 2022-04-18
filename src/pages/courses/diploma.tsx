import React from 'react';

import { motion } from 'framer-motion';

import PageLayout from '@/layout/PageLayout';

// interface ICourse {
//   dca: string;
//   tally: string;
//   python: string;
//   gst: string;
// }

// interface ICourseDetails {
//   name: string;
//   price: number;
//   discountedPrice: number;
//   features: any;
// }

// const courseMap = {
//   dca: {
//     name: 'Diploma in Computer Applications',
//     price: 7999,
//     discountedPrice: 5999,
//     features: {
//       duration: '3 to 4 months',
//       prerequisites: ['Basics of Computer'],
//       level: 'Entry',
//       keySkills: ['Tally', 'Networking', 'Python'],
//     },
//   },
//   tally: {
//     name: 'Accounting with Tally',
//     price: 4999,
//     discountedPrice: 2999,
//     features: {
//       duration: '3 to 4 months',
//       prerequisites: ['Basics of Computer'],
//       level: 'Entry',
//       keySkills: ['Tally', 'Networking', 'Python'],
//     },
//   },
//   python: {
//     name: 'Python',
//     price: 4999,
//     discountedPrice: 2999,
//     features: {
//       duration: '3 to 4 months',
//       prerequisites: ['Basics of Computer'],
//       level: 'Entry',
//       keySkills: ['Tally', 'Networking', 'Python'],
//     },
//   },
//   gst: {
//     name: 'Tally with GST',
//     price: 6999,
//     discountedPrice: 5999,
//     features: {
//       duration: '3 to 4 months',
//       prerequisites: ['Basics of Computer'],
//       level: 'Entry',
//       keySkills: ['Tally', 'Networking', 'Python'],
//     },
//   },
// };

// const getCourseDetails = (slug: any): ICourseDetails => {
//   return courseMap[slug as keyof ICourse];
// };

export default function Course() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-1">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between sm:w-2/3 lg:w-full">
              <div className="lg:w-2/3">
                <h2 className="text-6xl font-bold text-black overline decoration-4">
                  Diploma in Computer Applications:
                </h2>
                <p className="mt-1">
                  Repudiandae sint consequuntur vel. Amet ut nobis explicabo
                  numquam expedita quia omnis voluptatem. Minus quidem ipsam
                  quia iusto.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-yellow-300 px-8 py-6">
                <h5 className="text-2xl font-bold text-black">Total Payment</h5>
                <motion.p className="!mb-0 text-5xl font-bold text-slate-50 line-through">
                  ₹7999/-
                </motion.p>
                <p className="!my-0 text-2xl font-bold text-black">₹5999/-</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 flex justify-around">
          {/* <Image
            src="/assets/images/programming.jpg"
            alt="python"
            width={720}
            height={420}
            priority
            className="!mr-5"
          /> */}
          {/* <FeatureList features={features} /> */}
        </div>
      </div>
    </PageLayout>
  );
}
