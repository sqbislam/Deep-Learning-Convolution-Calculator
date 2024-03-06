// Create new next component

import { Metadata } from 'next';

import ImageBlock from '@/components/ImageBlock';
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
  title: 'Output Selector',
};

export default function OutputSection() {
  const globalContext = useGlobalContext();

  const { height, width, channels } = globalContext?.output ?? {
    height: '5',
    width: '5',
    channels: '5',
  };
  return (
    <Card className='flex-grow'>
      <CardHeader>
        <CardTitle>Output</CardTitle>
        <CardDescription>
          The output dimension based on the model defined
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col w-full items-center gap-2 space-y-20'>
          <div className='flex flex-row flex-1 p-2 justify-center gap-2 items-center'>
            <div className='flex flex-col space-y-1.5 min-w-[80px] relative'></div>
          </div>
          <ImageBlock
            dimensions={{ height, width, channels }}
            classNames='bg-red-200'
          />
        </div>
      </CardContent>
      <CardFooter className='mt-auto py-10 flex justify-center items-center'></CardFooter>
    </Card>
  );
}
