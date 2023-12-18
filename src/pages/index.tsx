import { useEffect, useState } from 'react';

import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Snowfall from 'react-snowfall';

import CTAWithText from '@/components/atom/CTAWithText';
import FeatureWithColumns from '@/components/molecules/FeatureWithThreeCoulmns';
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
          metaTitle="instudia - empowering lives through skill-based trainings"
          description="A Premier Computer and Skill Training Institute in Dimapur, Nagaland. Boost your skills and career with our cutting-edge courses in programming, web development, project management, skill development, and digital marketing. Join us for hands-on training from industry experts and unleash your full potential."
        >
          <div className="bg-white">
            <main>
              <LandingTop />
              {/* <CardSection /> */}
              <TestimonialWithStats />
              <Stats stats={stats} />
              <FeatureWithColumns />
              <ReasonStepper />
              <CTAWithText href={routes.COURSES} />
              <Snowfall />
            </main>
          </div>
        </PageLayout>
        )
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default Index;
