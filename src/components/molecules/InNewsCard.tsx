import moment from 'moment';

const MEDIA_LOGO = {
  MORUNG_EXPRESS:
    'https://pbs.twimg.com/profile_images/1554864969032028161/w-4H-ulQ_400x400.jpg',
  NAGALAND_POST: '/assets/images/nagaland-post.jpeg',
  EASTERN_MIRROR:
    'https://pbs.twimg.com/profile_images/1675826977985667073/evKiBnFA_400x400.jpg',
  MOKOKCHUNG_TIMES:
    'https://pbs.twimg.com/profile_images/1496406495818252288/OA1MxSzf_400x400.jpg',
};

const people = [
  {
    name: 'Instudia organises workshop on Photography',
    link: 'https://www.nagalandpost.com/index.php/instudia-organises-workshop-on-photography/',
    email: '',
    role: 'Nagaland Post',
    imageUrl: MEDIA_LOGO.NAGALAND_POST,
    imageDimensions: {
      h: 24,
      w: 24,
    },
    dateOfPublication: moment('2022-06-25').format('LL'),
  },
  {
    name: 'Workshop on Photography and Python Programming',
    email: '',
    link: 'https://morungexpress.com/workshop-on-photography-and-python-programming',
    role: 'Morung Express',
    imageUrl: MEDIA_LOGO.MORUNG_EXPRESS,
    imageDimensions: {
      h: 12,
      w: 32,
    },
    dateOfPublication: moment('2022-06-25').format('LL'),
  },
  {
    name: 'Instudia organises workshop on Photography',
    email: '',
    link: 'https://easternmirrornagaland.com/nagaland-instudia-organises-workshop-on-photography/',
    role: 'Eastern Mirror',
    imageUrl: MEDIA_LOGO.EASTERN_MIRROR,
    imageDimensions: {
      h: 24,
      w: 24,
    },
    dateOfPublication: moment('2022-06-25').format('LL'),
  },
  {
    name: 'instudia organizes ‘JobEx’ job fair',
    email: '',
    link: 'https://mokokchungtimes.com/instudia-organizes-jobex-job-fair/',
    role: 'Mokokchung Times',
    imageUrl: MEDIA_LOGO.MOKOKCHUNG_TIMES,
    imageDimensions: {
      h: 24,
      w: 24,
    },
    dateOfPublication: moment('2023-03-12').format('LL'),
  },
];

export default function InNewsCard({ mainText }: any) {
  return (
    <>
      <div className="mx-auto mb-7 max-w-6xl">
        <h1 className="ml-4 text-3xl font-extrabold text-black sm:text-5xl lg:ml-0">
          {mainText}
        </h1>
      </div>
      <div className="mx-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {people.map((person, idx) => (
          <div
            key={`${person.email}${idx}`}
            className="relative flex flex-col items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-yellow-500 focus-within:ring-offset-2 hover:border-gray-400 lg:flex-row"
          >
            <div className="mb-5 shrink-0 lg:mb-0">
              <img
                className={`h-${person.imageDimensions.h} w-${person.imageDimensions.w}`}
                src={person.imageUrl}
                alt="Nagaland Post Logo"
              />
            </div>
            <div className="min-w-0 flex-1">
              <a
                href={person.link}
                target="_blank"
                className="focus:outline-none"
                rel="noreferrer"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="!my-0 text-sm font-medium text-gray-900">
                  {person.name}
                </p>
                <p className="!my-0 truncate text-sm text-gray-500">
                  {person.role}
                </p>
                <p className="!my-0 truncate text-sm text-gray-500">
                  {person.dateOfPublication}
                </p>
                {/* <a
                  href={person.link}
                  target="_blank"
                  className=""
                  rel="noreferrer"
                ></a> */}
                <p className="!my-0 truncate text-sm text-yellow-500">
                  Read the whole story
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
