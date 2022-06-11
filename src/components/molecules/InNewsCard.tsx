const people = [
  {
    name: 'Nagaland Post',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://www.nagalandpost.com/wp-content/uploads/2021/09/Footlogo.png',
    imageDimensions: {
      h: 12,
      w: 32,
    },
  },
  {
    name: 'Nagaland Post',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://www.nagalandpost.com/wp-content/uploads/2021/09/Footlogo.png',
    imageDimensions: {
      h: 12,
      w: 32,
    },
  },
  {
    name: 'Nagaland Post',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://www.nagalandpost.com/wp-content/uploads/2021/09/Footlogo.png',
    imageDimensions: {
      h: 12,
      w: 32,
    },
  },
  {
    name: 'Nagaland Post',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://www.nagalandpost.com/wp-content/uploads/2021/09/Footlogo.png',
    imageDimensions: {
      h: 12,
      w: 32,
    },
  },
  {
    name: 'Nagaland Post',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://www.nagalandpost.com/wp-content/uploads/2021/09/Footlogo.png',
    imageDimensions: {
      h: 12,
      w: 32,
    },
  },
  {
    name: 'Nagaland Post',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://www.nagalandpost.com/wp-content/uploads/2021/09/Footlogo.png',
    imageDimensions: {
      h: 12,
      w: 32,
    },
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
        {people.map((person) => (
          <div
            key={person.email}
            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-yellow-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div className="shrink-0">
              <img
                className={`h-${person.imageDimensions.h} w-${person.imageDimensions.w}`}
                src={person.imageUrl}
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="!my-0 text-sm font-medium text-gray-900">
                  {person.name}
                </p>
                <p className="!my-0 truncate text-sm text-gray-500">
                  {person.role}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
