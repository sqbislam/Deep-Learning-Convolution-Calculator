import { Edit2 } from 'lucide-react';
import { useEffect, useState } from 'react';

import { ISpatialBlock } from '@/lib/types';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export default function BlockEditForm(props: {
  block: ISpatialBlock;
  onUpdate: ((newblock: ISpatialBlock, blockId: string) => void) | undefined;
}) {
  const { block, onUpdate } = props;

  const [currBlock, setCurrentBlock] = useState<ISpatialBlock>(block);

  useEffect(() => {
    setCurrentBlock(block);
  }, []);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setCurrentBlock((prevState) => ({
      ...prevState,
      properties: { ...prevState?.properties, [name]: value },
    }));
  };

  const handleSubmit = (event: any) => {
    event && event?.preventDefault();
    onUpdate && onUpdate(currBlock, currBlock._id as string);
  };

  return (
    <Popover onOpenChange={(b) => handleSubmit(undefined)}>
      <PopoverTrigger asChild className='relative '>
        <div>
          <div
            className={`button-hover-effect h-[120px] w-[30px] ${
              block?.color ?? 'bg-lime-200'
            }  border-black opacity-80 relative`}
          >
            <span className='font-bold absolute bottom-[0.2em] left-[0.3em]'>
              {block?.shortcut as any}
            </span>
            <Edit2 color='black' />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <h4 className='font-medium leading-none'>
              {currBlock?.name as any}
            </h4>
            <p className='text-sm text-muted-foreground'>
              {`Set the properties for the ${currBlock?.name}.`}
            </p>
          </div>
          <form className='grid gap-2' onSubmit={handleSubmit}>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='input'>Input</Label>
              <Input
                disabled
                id='input'
                defaultValue={currBlock?.input as any}
                className='col-span-2 h-8'
              />
            </div>
            {currBlock &&
              currBlock?.properties &&
              Object.entries(currBlock?.properties).map(([key, value]) => (
                <div key={key} className='grid grid-cols-3 items-center gap-4'>
                  <Label htmlFor={key}>{key}</Label>
                  <Input
                    id={key}
                    name={key}
                    defaultValue={value as any}
                    value={value as any}
                    onChange={handleChange}
                    className='col-span-2 h-8'
                  />
                </div>
              ))}
            <Button type='submit'>Update</Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
}
