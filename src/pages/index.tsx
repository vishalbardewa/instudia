import CTAWithText from '@/components/atom/CTAWithText';
import CardSection from '@/components/molecules/CardSection';
import TestimonialWithStats from '@/components/molecules/TestimonialWithStats';
import LandingTop from '@/components/organisms/LandingTop';
import { Meta } from '@/layout/Meta';
import PageLayout from '@/layout/PageLayout';
import { Main } from '@/templates/Main';

const stats = [
  { label: 'Founded', value: '2022' },
  { label: 'Courses', value: '12' },
  { label: 'Offices', value: '1' },
  { label: 'Team Experience', value: '10 Years' },
];

const Index = () => {
  return (
    <PageLayout>
      <Main
        meta={
          <Meta
            title="instudia"
            description="instudia official website | coming soon"
          />
        }
      >
        <div className="bg-white">
          <main>
            <LandingTop />
            <CardSection />
            <TestimonialWithStats stats={stats} />
            <CTAWithText />
          </main>
        </div>
      </Main>
    </PageLayout>
  );
};

export default Index;
