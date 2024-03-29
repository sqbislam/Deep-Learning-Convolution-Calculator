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

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Conv Calculator</title>
      </Head>
      <section className='bg-white p-5 '>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <h1 className='text-xl mt-4 lg:text-4xl'>Convolution Calculator</h1>
          <p className='mt-2 text-sm text-gray-800'>
            A tool to calculate convolution output for neural networks{' '}
          </p>
          <div className='flex flex-1 min-h-[400px] w-[100%] justify-center mx-auto gap-5 flex-col p-0 lg:flex-row lg:w-[90vw] mt-5 max-w-[1400px]'>
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
