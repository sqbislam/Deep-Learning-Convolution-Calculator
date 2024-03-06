// Create new next component

import { Metadata } from 'next';

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
        </div>
      </CardContent>
      <CardFooter className='mt-auto py-10 flex justify-center items-center'></CardFooter>
    </Card>
  );
}
