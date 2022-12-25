import React from 'react';

import {
  BadgeCheckIcon,
  LibraryIcon,
  AcademicCapIcon,
  ClockIcon,
} from '@heroicons/react/outline';

import IconButton from '@/components/atom/IconButton';
import PageLayout from '@/layout/PageLayout';

const features = [
  {
    name: 'Language',
    description: 'English, Hindi & Nagamese',
    icon: BadgeCheckIcon,
  },
  {
    name: 'Certificate',
    description: 'On Completion',
    icon: AcademicCapIcon,
  },
  {
    name: 'Duration',
    description: '6 months',
    icon: ClockIcon,
  },
  {
    name: 'Recommended Qualifications',
    description: 'Grade 6 and Above',
    icon: LibraryIcon,
  },
];

const reasonsWhy = [
  {
    id: 1,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis pariatur cupiditate consequuntur ipsa nam, cum aliquam quisquam ipsam laborum, a aperiam enim recusandae at veritatis iure voluptatum explicabo, id quia!',
  },
  {
    id: 2,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis pariatur cupiditate consequuntur ipsa nam, cum aliquam quisquam ipsam laborum, a aperiam enim recusandae at veritatis iure voluptatum explicabo, id quia!',
  },
  {
    id: 3,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis pariatur cupiditate consequuntur ipsa nam, cum aliquam quisquam ipsam laborum, a aperiam enim recusandae at veritatis iure voluptatum explicabo, id quia!',
  },
  {
    id: 4,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis pariatur cupiditate consequuntur ipsa nam, cum aliquam quisquam ipsam laborum, a aperiam enim recusandae at veritatis iure voluptatum explicabo, id quia!',
  },
];

const relatedCourses = [
  {
    title: 'Programming with Python I',
    description:
      'This is the most comprehensive, yet straight-forward, course for the Python programming language in town! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python! In this course we will teach you Python 3.',
    shortDescription:
      'Comprehensive programming course covering basics into the world of Python',
    price: { original: 4999, discountedPrice: 2999 },
    features: {
      duration: '1 month',
      prerequisites: ['Basics of Computer'],
      level: 'Entry',
      keySkills: ['Tally', 'Networking', 'Python'],
    },
    imageUrl: '/assets/images/python-level-1.png',
  },
  {
    title: 'Programming with Python II',
    description:
      'This is the most comprehensive, yet straight-forward, course for the Python programming language in town! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python! In this course we will teach you Python 3.',
    shortDescription:
      'Comprehensive programming course covering basics into the world of Python',

    price: { original: 4999, discountedPrice: 2999 },
    features: {
      duration: '1 month',
      prerequisites: ['Basics of Computer'],
      level: 'Entry',
      keySkills: ['Tally', 'Networking', 'Python'],
    },
    imageUrl: '/assets/images/python-level-2.png',
  },
];

const ContentHead = () => (
  <section className="mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-16">
    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
      <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
        <h1>
          <span className="block text-base font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg">
            Technology
          </span>
          <span className="mt-1 block text-6xl font-bold leading-none tracking-tight sm:text-5xl lg:text-6xl xl:text-6xl">
            <span className="block text-gray-900">Diploma in</span>
            <span className="block text-yellow-600">Computer Applications</span>
          </span>
        </h1>

        <div className="relative sm:mt-10 lg:mt-20 lg:grid lg:grid-cols-3 lg:gap-x-12">
          <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-4 lg:mt-0 lg:gap-y-6">
            {features.map((feature) => (
              <div key={feature.name} className="flex">
                <dt>
                  <div className="flex h-12 w-12 items-center rounded-md bg-white text-yellow-700">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </dt>
                <dd className="text-base text-gray-500">
                  <p className="!my-0.5 text-base font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                  <p className="!my-0 leading-tight">
                    <span className="text-sm ">{feature.description}</span>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="mt-6 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"></p>
      </div>
      <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-xl">
          <span className="sr-only">Watch our video to learn more</span>
          <span className="absolute top-3 right-2 inline-flex items-center rounded-full bg-yellow-100 px-3 py-0.5 text-sm font-medium text-yellow-800">
            In Demand
          </span>
          <img
            className="w-full rounded-lg"
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
      </div>
    </div>

    <p className="!my-12 text-2xl font-semibold lg:text-4xl">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum voluptatem
      doloribus odit temporibus nostrum quo ipsam? Voluptates accusantium omnis
      dolorem ratione, vel debitis esse magnam perspiciatis in rerum commodi
      architecto!
    </p>
  </section>
);

const FourParaGrid = () => (
  <div className="mt-24 px-4 font-bold">
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-3 text-2xl font-medium text-gray-900">
          In This Course
        </span>
      </div>
    </div>
    <section className="font-light lg:grid lg:grid-cols-2 lg:gap-x-24 lg:gap-y-4">
      {reasonsWhy.map((reason) => (
        <p className="sm:grid-cols-2" key={reason.id}>
          {reason.description}
        </p>
      ))}
    </section>
  </div>
);

const RelatedCoursesGrid = () => (
  <div className="mt-48 px-4 font-bold">
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-3 text-2xl font-medium text-gray-900">
          Related Courses
        </span>
      </div>
    </div>
    <div>
      <h1>
        <span className="mt-1 block text-3xl font-bold leading-none tracking-tight sm:text-5xl lg:text-3xl xl:text-3xl">
          <span className="block text-gray-900 sm:max-w-sm lg:max-w-[25%]">
            Find More Courses Like This One.
          </span>
        </span>
      </h1>
    </div>
    <section className="font-light lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-4">
      {relatedCourses.map((course) => (
        <div key={Date.now()} className="mt-12 space-y-1 sm:grid-cols-6">
          <figure className="relative max-w-xl cursor-pointer">
            <img
              className="rounded-lg"
              src="/assets/images/python-level-1.png"
              alt="image description"
            />
            <figcaption className="absolute bottom-0 rounded-tr-xl bg-slate-500 px-4 text-lg font-bold text-white hover:bg-yellow-500">
              <p className="text-3xl">{course.title}</p>
            </figcaption>
          </figure>

          <div className="space-y-2">
            <div className="space-y-1 text-lg font-medium leading-6">
              <p className="font-medium text-black">
                {course.shortDescription}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  </div>
);

const FixedMarquee = () => (
  <div className="relative mx-5 flex overflow-x-hidden text-black">
    <div className="animate-marquee whitespace-nowrap py-12 font-extrabold ">
      <span className="ml-3 text-6xl">Start the </span>
      <span className="text-6xl">course and upskill </span>
      <span className="text-6xl">your </span>
      <span className="text-6xl">professional </span>
      <span className="text-6xl">career. </span>
    </div>

    <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12 font-extrabold">
      <span className="ml-3 text-6xl"> Start the </span>
      <span className="text-6xl">course and upskill </span>
      <span className="text-6xl">your </span>
      <span className="text-6xl">professional </span>
      <span className="text-6xl">career. </span>
    </div>
  </div>
);

const EnrollStrip = () => (
  <div className="mt-16 flex flex-col items-center px-4">
    <h1 className="block  text-xl font-semibold italic text-black lg:text-3xl">
      Wanna Start Today?
    </h1>
    <p className="px-4">
      <IconButton
        text="Enroll Now"
        formLink="https://sprw.io/stt-1e2358431b"
        buttonSize="px-4 py-2 mt-0 lg:px-8 lg:py-4 lg:mt-4"
        textSize="text-base lg:text-2xl"
        iconSize="8"
      />
    </p>
  </div>
);

export default function Course() {
  return (
    <PageLayout>
      <ContentHead />
      <FourParaGrid />
      <EnrollStrip />
      <FixedMarquee />
      <RelatedCoursesGrid />
    </PageLayout>
  );
}
