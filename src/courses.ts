import { routes, slugs } from '@/routes';

export const courses = [
  {
    slug: 'dca',
    title: 'Diploma in Computer Applications',
    description:
      'DCA is a one year diploma course to study computer applications in depth.The course imparts scientific, practical and technical knowledge to its learners about various computer tools that are used in day to day life.',
    category: { name: 'Article', href: '#' },
    href: `${routes.COURSES}/${slugs.DCA}`,
    price: { original: 10999, discountedPrice: 7999 },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    features: {
      duration: '6 to 12 months',
      prerequisites: ['Basics of Computer'],
      level: 'Entry',
      keySkills: ['Tally', 'Networking', 'Python'],
    },
    duration: 6,
    durationUnit: 'months',
    featured: true,
    showOnCoursesDropdown: true,
  },

  {
    slug: 'python-level-1',
    title: 'Programming with Python I',
    description:
      'This is the most comprehensive, yet straight-forward, course for the Python programming language in town! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python! In this course we will teach you Python 3.',
    category: { name: 'Article', href: '#' },
    href: `${routes.COURSES}/${slugs.PYTHON1}`,
    price: { original: 4999, discountedPrice: 2999 },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    features: {
      duration: '1 month',
      prerequisites: ['Basics of Computer'],
      level: 'Entry',
      keySkills: ['Tally', 'Networking', 'Python'],
    },
    duration: 6,
    durationUnit: 'months',
    showOnCoursesDropdown: true,
  },

  {
    slug: 'python-level-2',
    title: 'Programming with Python II',
    description:
      'This is the most comprehensive, yet straight-forward, course for the Python programming language in town! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python! In this course we will teach you Python 3.',
    category: { name: 'Article', href: '#' },
    href: `${routes.COURSES}/${slugs.PYTHON2}`,
    price: { original: 7999, discountedPrice: 5999 },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    features: {
      duration: '3 to 4 months',
      prerequisites: ['Basics of Computer', 'Programming with Python I'],
      level: 'Intermediate',
      keySkills: ['Tally', 'Networking', 'Python'],
    },
    duration: 6,
    durationUnit: 'months',
    showOnCoursesDropdown: true,
  },

  {
    slug: 'python-level-3',
    title: 'Programming with Python III',
    description:
      'This is the most comprehensive, yet straight-forward, course for the Python programming language in town! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python! In this course we will teach you Python 3.',
    category: { name: 'Article', href: '#' },
    href: `${routes.COURSES}/${slugs.PYTHON3}`,
    price: { original: 11999, discountedPrice: 9999 },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    features: {
      duration: '3 to 4 months',
      prerequisites: ['Basics of Computer', 'Programming with Python II'],
      level: 'Advanced',
      keySkills: ['Tally', 'Networking', 'Python'],
    },
    duration: 6,
    durationUnit: 'months',
  },

  {
    slug: 'gst',
    title: 'Tally ERP9 with GST',
    description:
      'Learn Tally ERP9 with GST, in this course we have covered all the Topics in Tally application',
    category: { name: 'Article', href: '#' },
    href: `${routes.COURSES}/${slugs.GST}`,
    price: { original: 9999, discountedPrice: 6999 },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    features: {
      duration: '3 months',
      prerequisites: ['Basics of Computer', 'Basics of Tally'],
      level: 'Intermediate',
      keySkills: ['Tally', 'Networking', 'Python'],
    },
    duration: 6,
    durationUnit: 'months',
    featured: true,
    showOnCoursesDropdown: true,
  },

  {
    slug: 'tally',
    title: 'Accounting with Tally ERP9',
    description:
      'Learn Tally with GST, in this course we have covered all the Topics in Tally application',
    category: { name: 'Article', href: '#' },
    href: `${routes.COURSES}/${slugs.TALLY}`,
    price: { original: 4999, discountedPrice: 2999 },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    features: {
      duration: '3 to 4 months',
      prerequisites: ['Basics of Computer'],
      level: 'Entry',
      keySkills: ['Tally', 'Python'],
    },
    duration: 6,
    durationUnit: 'months',
    showOnCoursesDropdown: true,
  },

  {
    slug: 'pgdca',
    title: 'Post Graduate Diploma in Computer Applications',
    description: 'PGDCA',
    category: { name: 'Article', href: '#' },
    href: `${routes.COURSES}/${slugs.DCA}`,
    price: { original: 17999, discountedPrice: 14999 },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    features: {
      duration: '12 to 15 months',
      prerequisites: ['Basics of Computer'],
      level: 'Entry',
      keySkills: ['Tally', 'Python'],
    },
    duration: 6,
    durationUnit: 'months',
  },

  {
    slug: 'adca',
    title: 'Advanced Diploma in Computer Applications',
    description: 'ADCA',
    category: { name: 'Article', href: '#' },
    href: `${routes.COURSES}/${slugs.DCA}`,
    price: { original: 13999, discountedPrice: 9999 },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    features: {
      duration: '4 to 6 months',
      prerequisites: ['Basics of Computer'],
      level: 'Entry',
      keySkills: ['Tally', 'Python'],
    },
    duration: 6,
    durationUnit: 'months',
  },

  {
    slug: 'pca',
    title: 'Program in Computer Applications',
    description: 'PCA',
    category: { name: 'Article', href: '#' },
    href: `${routes.COURSES}/${slugs.DCA}`,
    price: { original: 13999, discountedPrice: 11999 },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    features: {
      duration: '4 to 6 months',
      prerequisites: ['Basics of Computer'],
      level: 'Entry',
      keySkills: ['Tally', 'Python'],
    },
    duration: 6,
    durationUnit: 'months',
  },

  {
    slug: 'advanced-excel',
    title: 'Advanced Excel',
    description: 'Excel',
    category: { name: 'Article', href: '#' },
    href: `${routes.COURSES}/${slugs.DCA}`,
    price: { original: 4999, discountedPrice: 3199 },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    features: {
      duration: '1 to 2 months',
      prerequisites: ['Basics of Computer'],
      level: 'Advanced',
      keySkills: ['Excel'],
    },
    duration: 6,
    durationUnit: 'months',
  },

  {
    slug: 'graphic-level-1',
    title: 'Graphic Designing I',
    description: 'Graphic Designing.',
    category: { name: 'Article', href: '#' },
    href: `${routes.COURSES}/${slugs.DCA}`,
    price: { original: 6999, discountedPrice: 4999 },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    features: {
      duration: '1 month',
      prerequisites: ['Basics of Computer'],
      level: 'Entry',
      keySkills: ['Tally', 'Networking', 'Python'],
    },
    duration: 6,
    durationUnit: 'months',
  },

  {
    slug: 'graphic-level-2',
    title: 'Graphic Designing II',
    description: 'Graphic Designing.',
    category: { name: 'Article', href: '#' },
    href: `${routes.COURSES}/${slugs.DCA}`,
    price: { original: 9999, discountedPrice: 7999 },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    features: {
      duration: '3 to 4 months',
      prerequisites: ['Basics of Computer', 'Programming with Python I'],
      level: 'Intermediate',
      keySkills: ['Tally', 'Networking', 'Python'],
    },
  },

  {
    slug: 'graphic-level-3',
    title: 'Graphic Designing III',
    description: 'Graphic Designing.',
    category: { name: 'Article', href: '#' },
    href: `${routes.COURSES}/${slugs.DCA}`,
    price: { original: 15999, discountedPrice: 12999 },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    features: {
      duration: '3 to 4 months',
      prerequisites: ['Basics of Computer', 'Programming with Python I'],
      level: 'Intermediate',
      keySkills: ['Tally', 'Networking', 'Python'],
    },
  },
];
