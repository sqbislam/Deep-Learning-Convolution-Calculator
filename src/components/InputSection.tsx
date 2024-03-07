'use client';

import { Label } from '@radix-ui/react-label';
import { Link, Unlink } from 'lucide-react';
import { Metadata } from 'next';
import { useEffect, useState } from 'react';

import ImageBlock from '@/components/ImageBlock';
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
import { Toggle } from '@/components/ui/toggle';

import { useGlobalContext } from '@/store/GlobalStateContext';

export const metadata: Metadata = {
  title: 'Input Selector',
};

const commonDims = ['16', '32', '64', '128', '256', '512', '1024'];

const commonChannels = ['1', '3', '4', '6', '12'];

export default function InputSection() {
  // Create states for height, width and channels
  const [height, setHeight] = useState(commonDims[0]);
  const [width, setWidth] = useState(commonDims[0]);
  const [channels, setChannels] = useState(commonChannels[0]);
  const [bindDimensions, setBindDimensions] = useState(true);
  const globalContext = useGlobalContext();

  useEffect(() => {
    // Update global context when any of the following changes

    if (globalContext?.setInput)
      globalContext.setInput({ height, width, channels });
    if (
      globalContext &&
      globalContext?.setOutput &&
      globalContext?.selectedBlockArray?.length == 0
    ) {
      globalContext.setOutput({ height, width, channels });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channels, height, width]);

  // Create a function to handle the selection of height
  const handleHeightSelection = (value: string) => {
    if (bindDimensions) {
      setWidth(value);
      setHeight(value);
    } else {
      setHeight(value);
    }
  };
  // Create a function to handle the selection of width
  const handleWidthSelection = (value: string) => {
    if (bindDimensions) {
      setWidth(value);
      setHeight(value);
    } else {
      setWidth(value);
    }
  };
  // Create a function to handle the selection of channels
  const handleChannelsSelection = (value: string) => {
    setChannels(value);
  };
  // Create function to toggle the bind dimensions
  const handleBindDimensions = (pressed: boolean) => {
    setBindDimensions(!pressed);
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
            <div className='flex flex-row flex-1 p-2 justify-center gap-2 items-center'>
              <div className='flex flex-col space-y-1.5 min-w-[80px] relative'>
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
              <Toggle
                variant='outline'
                size='xs'
                onPressedChange={handleBindDimensions}
                className='mt-8'
              >
                {bindDimensions ? <Link /> : <Unlink />}
              </Toggle>
              <div className='flex flex-col space-y-1.5 min-w-[80px]'>
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
              <div className='flex flex-col space-y-1.5 min-w-[80px]'>
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
            <ImageBlock dimensions={{ height, width, channels }} />
          </div>
        </form>
      </CardContent>
      <CardFooter className='mt-auto py-10 flex justify-center items-center'>
        <Button>Calculate</Button>
      </CardFooter>
    </Card>
  );
}
