'use client';

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { convolution2D, pooling2D, transposeConv2D } from '@/lib/calculations';
import { GlobalContextType, ISpatialBlock } from '@/lib/types';
import { nestedCopy } from '@/lib/utils';

const GlobalStateContext = createContext<GlobalContextType | null>(null);

export const useGlobalContext = (): GlobalContextType => {
  // 2. use the useContext hook
  const context = useContext(GlobalStateContext);

  // 3. Make sure it's not null!
  if (!context) {
    throw new Error('Please use ContextProvider in parent component');
  }

  return context;
};

export const GlobalStateProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [input, setInput] = useState({
    height: '16',
    width: '16',
    channels: '1',
  });
  const [output, setOutput] = useState({
    height: '16',
    width: '16',
    channels: '1',
  });
  const [selectedBlockArray, setSelectedBlockArray] = useState<ISpatialBlock[]>(
    []
  );
  useEffect(() => {
    calculateOutputDimension();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(selectedBlockArray), input]);

  // Function to calculate change in output dimension when blocks change
  const calculateOutputDimension = useCallback(
    () => {
      const newSelectedArray = nestedCopy(selectedBlockArray);
      let output = input;
      let calculatedOutput: any;
      selectedBlockArray.forEach((block: ISpatialBlock, idx) => {
        switch (block.type) {
          case 'conv2d':
            calculatedOutput = convolution2D(output, block);
            break;
          case 'pool':
            calculatedOutput = pooling2D(output, block);
            break;
          case 'transpose2d':
            calculatedOutput = transposeConv2D(output, block);
            break;
          default:
            break;
        }
        const { outputHeight, outputWidth, outputChannels } = calculatedOutput;
        // Calculate the current output
        const curr_output = {
          height: outputHeight.toString(),
          width: outputWidth.toString(),
          channels: outputChannels.toString(),
        };
        newSelectedArray[idx] = {
          ...block,
          input: `${curr_output.height}x${curr_output.width}x${curr_output.channels}`,
        };
        output = curr_output;
      });
      setSelectedBlockArray(newSelectedArray);
      setOutput(output);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [input, selectedBlockArray, output]
  );

  const handleAddingNewBlock = useCallback((block: ISpatialBlock) => {
    setSelectedBlockArray((prev) => {
      return [...prev, block];
    });
    //calculateOutputDimension();
  }, []);

  const handleUpdatingBlock = useCallback(
    (newblock: ISpatialBlock, blockId: string) => {
      setSelectedBlockArray((prev) => {
        const newArray = [...prev];
        const index = newArray.findIndex((block) => block._id === blockId);
        newArray[index] = newblock;
        return newArray;
      });
      //calculateOutputDimension();
    },
    []
  );

  // Delete last block in array
  const deleteLastBlock = () => {
    setSelectedBlockArray((prev) => {
      const newArray = [...prev];
      newArray.pop();
      return newArray;
    });
  };

  return (
    <GlobalStateContext.Provider
      value={{
        input,
        setInput,
        setSelectedBlockArray,
        selectedBlockArray,
        output,
        setOutput,
        handleAddingNewBlock,
        deleteLastBlock,
        handleUpdatingBlock,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
