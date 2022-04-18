import fs from 'fs';
import path from 'path';

import React from 'react';

import { motion } from 'framer-motion';

import IconButton from '@/components/atom/IconButton';
import FeatureList from '@/components/molecules/FeatureList';
import PageLayout from '@/layout/PageLayout';

export default function Course({
  courseDetails: { title, description, price, discountedPrice, features },
}: any) {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-1">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between sm:w-2/3 lg:w-full">
              <div className="lg:w-2/3">
                <h2 className="text-6xl font-bold text-black overline decoration-4">
                  {title}:
                </h2>
                <p className="mt-1">{description}</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-yellow-300 px-8 py-6">
                <h5 className="text-2xl font-bold text-black">Total Payment</h5>
                <motion.p className="!mb-0 text-5xl font-bold text-slate-50 line-through">
                  ₹{price}/-
                </motion.p>
                <p className="!my-0 text-2xl font-bold text-black">
                  ₹{discountedPrice}/-
                </p>
                <IconButton text="Enroll Now" />
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
          <FeatureList features={features} />
        </div>
      </div>
    </PageLayout>
  );
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const courseSlug = params.slug;
  const fileToRead = path.join(process.cwd(), 'courses.json');
  const data = JSON.parse(await fs.readFileSync(fileToRead, 'utf-8'));
  const course = data.courses.find((item: any) => item.slug === courseSlug);
  return {
    props: {
      courseDetails: course,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'dca' } },
      { params: { slug: 'python' } },
      { params: { slug: 'gst' } },
      { params: { slug: 'tally' } },
    ],
    fallback: false,
  };
}
