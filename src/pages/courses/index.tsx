import React, { useEffect, useState } from 'react';

import CourseCard from '@/components/atom/CourseCard';
import ImageBanner from '@/components/molecules/ImageBanner';
import { courses } from '@/courses';
import { ICourse } from '@/interfaces';
import PageLayout from '@/layout/PageLayout';

const rearrangeForFeatured = () => {
  const featuredCourses = courses.filter((course) => course.featured);
  let nonFeaturedCourses: any[] = courses.filter((course) => !course.featured);
  for (let i = 0; i < featuredCourses.length; i += 1) {
    nonFeaturedCourses = [
      ...nonFeaturedCourses.slice(0, 3.5 * (i + 1)),
      featuredCourses[i],
      ...nonFeaturedCourses.slice(3.5 * (i + 1)),
    ];
  }
  return nonFeaturedCourses;
};

export default function Courses({ courseList }: any) {
  const [courseItems, setCourseItems] = useState(courseList);
  useEffect(() => {
    setCourseItems(rearrangeForFeatured());
  }, []);

  return (
    <PageLayout>
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:grid lg:max-w-none lg:grid-cols-3">
          {courseItems?.map((course: ICourse, index: number) => {
            if (course.featured)
              return (
                <ImageBanner
                  key={index}
                  title={course.title}
                  imageUrl={course.imageUrl}
                  category={course.category}
                  href={course.href}
                  description={course.description}
                  slug={course.slug}
                  price={course.price}
                  duration={course.duration}
                  durationUnit={course.durationUnit}
                />
              );
            return (
              <CourseCard
                key={index}
                title={course.title}
                imageUrl={course.imageUrl}
                category={course.category}
                href={course.href}
                description={course.description}
                slug={course.slug}
                price={course.price}
                duration={course.duration}
                durationUnit={course.durationUnit}
              />
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      courseList: courses,
    },
  };
}
