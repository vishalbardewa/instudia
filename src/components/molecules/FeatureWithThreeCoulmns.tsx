/* This example requires Tailwind CSS v2.0+ */
import {
  LockClosedIcon,
  RefreshIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Help to figure the right role for you',
    description:
      'Seeking guidance and support from a career counselor or mentor can help you discover and navigate the path to finding the right role for you.',
    icon: OfficeBuildingIcon,
  },
  {
    name: 'Help with CV and Interview Prep',
    description:
      'Professional resume and interview coaching services can provide valuable assistance in crafting an effective CV and preparing for interviews, improving your chances of landing your desired job.',
    icon: LockClosedIcon,
  },
  {
    name: 'Referrals to good companies',
    description:
      'Networking with a recruiter or staffing agency can open doors to job opportunities and potential referrals in your field.',
    icon: RefreshIcon,
  },
  {
    name: 'Coaching on salary negotiation',
    description:
      'Working with a career coach who specializes in salary negotiation can help you gain confidence and develop effective strategies to negotiate a fair and competitive compensation package.',
    icon: RefreshIcon,
  },
];

export default function FeatureWithColumns() {
  return (
    <div className="relative bg-white py-6 sm:py-24 lg:py-24">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold uppercase tracking-wider text-yellow-600">
          instudia career services
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Exclusive Career Prep and Job Readiness for{' '}
          <span className="text-yellow-500">instudians</span>
        </p>
        <p className="mx-auto max-w-prose text-base text-gray-500">
          instidians get access to exclusive job openings at our partner
          companies and guidance + help from our Career Preparation team.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-yellow-500 p-3 shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}