import { useEffect, useState } from 'react';

import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

import CTAWithText from '@/components/atom/CTAWithText';
import FeatureWithColumns from '@/components/molecules/FeatureWithThreeCoulmns';
import Incentives from '@/components/molecules/Incentives';
import ReasonStepper from '@/components/molecules/ReasonStepper';
import Stats from '@/components/molecules/Stats';
import TestimonialWithStats from '@/components/molecules/TestimonialWithStats';
import LandingTop from '@/components/organisms/LandingTop';
import PageLayout from '@/layout/PageLayout';
import { routes } from '@/routes';

const stats = [
  { label: 'Founded', value: '2018' },
  { label: 'Courses', value: '12+' },
  { label: 'Offices', value: '2' },
  { label: 'Team Experience', value: '10+ Years' },
];

const Index = () => {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter>
        (
        <PageLayout
          metaTitle="Trainings on Programming and Skill Development Courses in Dimapur | instudia "
          description="Elevate your career with leading computer and skill training in Dimapur, Nagaland. Explore cutting-edge courses in programming, web development, project management, skill development, and digital marketing. Unlock your full potential with hands-on training from industry experts."
        >
          <div className="bg-white">
            <main>
              <LandingTop />
              {/* <CardSection /> */}
              <TestimonialWithStats />
              <Stats stats={stats} />
              <Incentives />
              <FeatureWithColumns />
              <ReasonStepper />
              <CTAWithText href={routes.COURSES} />
            </main>
          </div>
        </PageLayout>
        )
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default Index;
