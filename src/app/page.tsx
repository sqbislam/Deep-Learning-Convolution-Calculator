'use client';

import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import '@/lib/env';

import BlockSection from '@/components/BlockSection';
import InputSection from '@/components/InputSection';
import OutputSection from '@/components/OutputSection';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Conv Calculator</title>
      </Head>
      <section className='bg-white p-10'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <h1 className='text-xl mt-4 lg:text-4xl'>Convolution Calculator</h1>
          <p className='mt-2 text-sm text-gray-800'>
            A tool to calculate convolution output for neural networks{' '}
          </p>
          <div className='flex flex-1 min-h-[400px] w-[90vw] justify-center mx-auto gap-5 p-10 flex-col lg:flex-row'>
            <InputSection />
            <BlockSection />
            <OutputSection />
          </div>
          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <Link
              href='https://github.com/sqbislam'
              tabIndex={1}
              target='_blank'
            >
              Saqib Islam
            </Link>
          </footer>
        </div>
      </section>
    </main>
  );
}
