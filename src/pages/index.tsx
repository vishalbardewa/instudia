import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

import CTAWithText from '@/components/atom/CTAWithText';
import CardSection from '@/components/molecules/CardSection';
import FeatureWithColumns from '@/components/molecules/FeatureWithThreeCoulmns';
import ReasonStepper from '@/components/molecules/ReasonStepper';
import Stats from '@/components/molecules/Stats';
import TestimonialWithStats from '@/components/molecules/TestimonialWithStats';
import LandingTop from '@/components/organisms/LandingTop';
import { Meta } from '@/layout/Meta';
import PageLayout from '@/layout/PageLayout';
import { routes } from '@/routes';
import { Main } from '@/templates/Main';

const stats = [
  { label: 'Founded', value: '2018' },
  { label: 'Courses', value: '12' },
  { label: 'Offices', value: '1' },
  { label: 'Team Experience', value: '10 Years' },
];

const Index = () => {
  return (
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter>
        (
        <PageLayout>
          <Main
            meta={
              <Meta
                title="instudia - empowering lives through skill-based trainings"
                description="A Premier Computer and Skill Training Institute in Dimapur, Nagaland. Boost your skills and career with our cutting-edge courses in programming, web development, project management, skill development, and digital marketing. Join us for hands-on training from industry experts and unleash your full potential."
              />
            }
          >
            <div className="bg-white">
              <main>
                <LandingTop />
                <CardSection />
                <TestimonialWithStats />
                <Stats stats={stats} />
                <FeatureWithColumns />
                <ReasonStepper />
                <CTAWithText href={routes.COURSES} />
              </main>
            </div>
          </Main>
        </PageLayout>
        )
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default Index;
