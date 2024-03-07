'use client';
// Create new next component

import { Eraser } from 'lucide-react';
import { Metadata } from 'next';

import BlockEditForm from '@/components/BlockEditForm';
import BlockMenuBar from '@/components/BlockMenuBar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { useGlobalContext } from '@/store/GlobalStateContext';

export const metadata: Metadata = {
  title: 'Block Selector',
};

export default function BlockSection() {
  const globalStore = useGlobalContext();
  const { deleteLastBlock, selectedBlockArray, handleUpdatingBlock } =
    globalStore;
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
          <BlockMenuBar />
          <div className='flex flex-row items-center justify-start gap-2 flex-wrap w-full max-w-[320px] max-h-[600px] overflow-y-auto'>
            {selectedBlockArray &&
              selectedBlockArray.map((block, index) => (
                <BlockEditForm
                  key={index}
                  block={block}
                  onUpdate={handleUpdatingBlock}
                />
              ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className='mt-auto py-10 flex justify-center items-center'>
        {selectedBlockArray && selectedBlockArray.length > 0 && (
          <div className='flex items-center justify-center flex-grow'>
            <Button
              variant='outline'
              size='icon'
              onClick={() => deleteLastBlock && deleteLastBlock()}
            >
              <Eraser />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
