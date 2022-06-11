import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from '@heroicons/react/outline';

import { whatDoWeDoContent, whyDoWeDoContent } from '@/about_us';
import FeatureCardSection from '@/components/molecules/FeatureCardSection';
import LargeImageSplitCard from '@/components/molecules/LargeImageSplitCard';
import SimpleOnBrand from '@/components/molecules/SimpleOnBrand';
import { Meta } from '@/layout/Meta';
import PageLayout from '@/layout/PageLayout';
import { Main } from '@/templates/Main';

const aboutUsBody = `instudia is a technology focussed education training centre enabling talents to acquire skills which are in-demand with regards current job market scenario.`;

const infoCardLinks = [
  {
    name: 'Association',
    description: `
    Associated with 
    National Institute For Advanced Computer Technology (NIACT)
    ISO 9001:2015 Certified  
    `,
    icon: PhoneIcon,
  },
  {
    name: 'Curriculum',
    description: 'In-depth curriculum focussing on clarity of concepts',
    icon: SupportIcon,
  },
  {
    name: 'Mentorship',
    description:
      'Offers Short and Long Term Courses with mentor-led curriculum',
    icon: NewspaperIcon,
  },
];

const About = () => (
  <Main
    meta={
      <Meta
        title="About Us | instudia"
        description="About us page for instudia"
      />
    }
  >
    <PageLayout>
      <FeatureCardSection
        mainText={`We are `}
        highlightText={'instudia'}
        secondaryText={aboutUsBody}
        supportLinks={infoCardLinks}
      />

      <LargeImageSplitCard
        cardHeader="What do we do?"
        cardBody={whatDoWeDoContent}
      />
    </PageLayout>
    <SimpleOnBrand
      className="mt-5"
      mainText="Why do we do?"
      secondaryText={whyDoWeDoContent}
    />
    {/* TODO: Update this section when in news */}
    {/* <PageLayout>
      <div className="mt-8">
        <InNewsCard mainText="instudia in news" />
      </div>
    </PageLayout> */}
  </Main>
);

export default About;
