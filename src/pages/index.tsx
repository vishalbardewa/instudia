import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

import CTAWithText from '@/components/atom/CTAWithText';
import CardSection from '@/components/molecules/CardSection';
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
      <AnimatePresence>
        (
        <PageLayout>
          <Main
            meta={
              <Meta
                title="instudia"
                description="instudia official website | computer training institute"
              />
            }
          >
            <div className="bg-white">
              <main>
                <LandingTop />
                <CardSection />
                <TestimonialWithStats stats={stats} />
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
