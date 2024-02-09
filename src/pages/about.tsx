import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from '@heroicons/react/outline';

import { whatDoWeDoContent, whyDoWeDoContent } from '@/about_us';
import FeatureCardSection from '@/components/molecules/FeatureCardSection';
import InNewsCard from '@/components/molecules/InNewsCard';
import LargeImageSplitCard from '@/components/molecules/LargeImageSplitCard';
import SimpleOnBrand from '@/components/molecules/SimpleOnBrand';
import PageLayout from '@/layout/PageLayout';

const aboutUsBody = `instudia is a technology focused education training centre enabling talents to acquire skills which are in-demand with regards current job market scenario.`;

const infoCardLinks = [
  {
    name: 'Association',
    description: `
    Associated with AISECT | 
    National Institute For Advanced Computer Technology (NIACT) |
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
  <>
    <PageLayout
      metaTitle="About Us | instudia"
      description="instudia is a dedicated learning platform in Dimapur, Nagaland, with a focus on transforming tech professionals by helping them enhance their skills and advance their careers."
    >
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
      <SimpleOnBrand
        className="mt-5"
        mainText="Why do we do?"
        secondaryText={whyDoWeDoContent}
      />
      {/* <JoinUs /> */}
      <div className="mt-8">
        <InNewsCard mainText="instudia in news" />
      </div>
    </PageLayout>

    {/* TODO: Update this section when in news */}
  </>
);

export default About;
