import React from 'react';

import { PaperAirplaneIcon } from '@heroicons/react/outline';

interface IIconButton {
  text: string;
  formLink: string;
}

export default function IconButton({ text, formLink }: IIconButton) {
  return (
    <button
      type="button"
      className="mt-4 inline-flex items-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
    >
      <a
        className="text-white"
        href={formLink}
        // typeform "https://2vbjldc556s.typeform.com/to/UV8mGea7"
      >
        {text}
      </a>
      <PaperAirplaneIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
    </button>
  );
}
