// Create new next component

import { Metadata } from 'next';
import { useState } from 'react';

import BlockMenuBar from '@/components/ui/BlockMenuBar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Block Selector',
};

export default function BlockSection() {
  const [selectedBlockArray, setSelectedBlockArray] = useState<any[]>([]);

  return (
    <Card className='flex-grow'>
      <CardHeader>
        <CardTitle>Add blocks</CardTitle>
        <CardDescription>
          Choose the type of blocks you want in the middle
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col w-full items-center gap-2 space-y-20'>
          <BlockMenuBar
            selectedBlockArray={selectedBlockArray}
            setSelectedBlockArray={setSelectedBlockArray}
          />
          <div className='flex flex-row items-center justify-start gap-2 flex-wrap max-w-[300px]'>
            {selectedBlockArray.map((block, index) => (
              <div
                key={index}
                className={`h-[50px] w-[15px] ${
                  block?.color ?? 'bg-lime-200'
                }  border-black opacity-80 relative`}
              >
                <span className='text-xs absolute bottom-[-2em] left-[-0.2em]'>
                  {block?.shortcut}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className='mt-auto py-10 flex justify-center items-center'></CardFooter>
    </Card>
  );
}
