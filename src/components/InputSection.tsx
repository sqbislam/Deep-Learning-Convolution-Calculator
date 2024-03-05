'use client';

import { Label } from '@radix-ui/react-label';
import { Metadata } from 'next';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const metadata: Metadata = {
  title: 'Input Selector',
};

//const commonDims = [16, 32, 64, 128, 256, 512, 1024];
const commonDims = ['16', '32', '64', '128', '256', '512', '1024'];

const commonChannels = ['1', '3', '4', '6', '12'];

export default function InputSection() {
  const MAX_CHANNEL_DISPLAY = 10;
  // Create states for height, width and channels
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [channels, setChannels] = useState('1');

  // Create a function to handle the selection of height
  const handleHeightSelection = (value: string) => {
    setHeight(value);
  };
  // Create a function to handle the selection of width
  const handleWidthSelection = (value: string) => {
    setWidth(value);
  };
  // Create a function to handle the selection of channels
  const handleChannelsSelection = (value: string) => {
    setChannels(value);
  };

  return (
    <Card className='flex-grow'>
      <CardHeader>
        <CardTitle>Input</CardTitle>
        <CardDescription>Choose the type of Input you want</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='flex flex-col w-full items-center gap-2 space-y-20'>
            <div className='flex flex-row flex-1 p-2 justify-center gap-2'>
              <div className='flex flex-col space-y-1.5 min-w-[100px]'>
                <Label htmlFor='height'>Height</Label>
                <Select onValueChange={handleHeightSelection} value={height}>
                  <SelectTrigger id='height'>
                    <SelectValue placeholder='Height' />
                  </SelectTrigger>
                  <SelectContent position='popper'>
                    {commonDims.map((dim) => (
                      <SelectItem key={dim} value={dim}>
                        {dim}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className='flex flex-col space-y-1.5 min-w-[100px]'>
                <Label htmlFor='width'>Width</Label>
                <Select onValueChange={handleWidthSelection} value={width}>
                  <SelectTrigger id='width'>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent position='popper'>
                    {commonDims.map((dim) => (
                      <SelectItem key={dim} value={dim}>
                        {dim}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className='flex flex-col space-y-1.5 min-w-[100px]'>
                <Label htmlFor='channels'>Channels</Label>
                <Select
                  onValueChange={handleChannelsSelection}
                  value={channels}
                >
                  <SelectTrigger id='channels'>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent position='popper'>
                    {commonChannels.map((chn) => (
                      <SelectItem key={chn} value={chn}>
                        {chn}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className=' w-32 h-32 bg-purple-200 border-2 border-white shadow-lg shadow-gray-200 col-span-3 relative '>
              <p className='absolute text-md font-bold top-[-40px] right-[3em]'>
                {`W  ${width}`}
              </p>
              <p className='absolute text-md font-bold top-[2.5em] left-[-4em]'>
                {`H  ${height}`}
              </p>
              <p className='absolute text-md font-bold top-[-40px] right-[-3em]'>
                {`C  ${channels}`}
              </p>

              {[...Array(parseInt(channels) - 1)].map(
                (_, i) =>
                  i < MAX_CHANNEL_DISPLAY && (
                    <div
                      key={i}
                      className='absolute w-32 h-32 bg-slate-500 border-black opacity-70'
                      style={{
                        top: `${i * 5 + 20}px`,
                        left: `${i * 5 + 20}px`,
                      }}
                    ></div>
                  )
              )}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='mt-auto py-10 flex justify-center items-center'>
        <Button>Calculate</Button>
      </CardFooter>
    </Card>
  );
}
