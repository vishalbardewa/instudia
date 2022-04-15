import React from 'react';

export default function CTAWithText() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block bg-gradient-to-r from-yellow-600 to-yellow-600 bg-clip-text text-transparent">
            Get in touch or stay confused.
          </span>
        </h2>
        <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-yellow-600 to-yellow-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
          >
            Learn more
          </a>
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-yellow-50 px-4 py-3 text-base font-medium text-yellow-800 shadow-sm hover:bg-yellow-100"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}
