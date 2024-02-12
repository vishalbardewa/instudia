import React from 'react';

import { Button } from '@/components/atom/Button';
import { Container } from '@/components/atom/Container';
import { Offices } from '@/components/atom/Offices';
import { AppConfig } from '@/utils/AppConfig';

export default function Career() {
  return (
    <>
      <h2 className="text-center text-[5rem] font-medium text-black [text-wrap:balance] lg:text-[8rem]">
        Careers
      </h2>
      <Container className="mt-16 bg-black sm:mt-32 lg:mt-20 lg:rounded-xl">
        <div className="px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                Be a part of our team!
              </h2>
              <span className="text-white">Fill out the application form.</span>
              <div className="mt-6 flex">
                <Button
                  target="_blank"
                  rel="noopener"
                  href={AppConfig.hiringLink}
                  invert
                >
                  Join Us
                </Button>
              </div>
              <div className="mt-10 border-t border-white/10 pt-10">
                <h3 className="font-display text-base font-semibold text-white">
                  Our offices
                </h3>
                <Offices
                  invert
                  className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
