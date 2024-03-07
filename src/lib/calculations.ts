import { IDimensions, ISpatialBlock } from '@/lib/types';

// Function to calculate the output dimensions of a 2D Convolution block operation
export function convolution2D(input: IDimensions, block: ISpatialBlock) {
  const inputHeight = parseInt(input.height);
  const inputWidth = parseInt(input.width);

  if (block.properties) {
    // Do all the calculations in a seperate function

    const padding = parseInt(block.properties.padding);
    const stride = parseInt(block.properties.stride);
    const size = parseInt(block.properties.size);
    const kernels = parseInt(block?.properties?.kernels ?? '1');

    // Calculate output dimension using the formula:
    // output_dimension = ((input_dimension - kernel_size + 2*padding) / stride) + 1
    const outputHeight =
      Math.floor((inputHeight - size + 2 * padding) / stride) + 1;
    const outputWidth =
      Math.floor((inputWidth - size + 2 * padding) / stride) + 1;
    const outputChannels = kernels;

    // // Console print all variables
    // console.debug({ inputHeight, inputWidth });
    // console.debug({ padding, stride, size });
    // console.debug({ outputHeight, outputWidth, outputChannels });
    return { outputHeight, outputWidth, outputChannels };
  } else {
    return { outputHeight: 0, outputWidth: 0, outputChannels: 0 };
  }
}

export function pooling2D(input: IDimensions, block: ISpatialBlock) {
  const inputHeight = parseInt(input.height);
  const inputWidth = parseInt(input.width);

  if (block.properties) {
    // Do all the calculations in a seperate function

    const padding = parseInt(block.properties.padding);
    const stride = parseInt(block.properties.stride);
    const size = parseInt(block.properties.size);
    const kernels = parseInt(input.channels);

    // Calculate output dimension using the formula:
    // output_dimension = ((input_dimension - kernel_size + 2*padding) / stride) + 1
    const outputHeight =
      Math.floor((inputHeight - size + 2 * padding) / stride) + 1;
    const outputWidth =
      Math.floor((inputWidth - size + 2 * padding) / stride) + 1;
    const outputChannels = kernels;

    // Console print all variables
    // console.debug({ inputHeight, inputWidth });
    // console.debug({ padding, stride, size });
    // console.debug({ outputHeight, outputWidth, outputChannels });
    return { outputHeight, outputWidth, outputChannels };
  } else {
    return { outputHeight: 0, outputWidth: 0, outputChannels: 0 };
  }
}

export function transposeConv2D(input: IDimensions, block: ISpatialBlock) {
  const inputHeight = parseInt(input.height);
  const inputWidth = parseInt(input.width);

  if (block.properties) {
    // Do all the calculations in a seperate function

    const padding = parseInt(block.properties.padding);
    const stride = parseInt(block.properties.stride);
    const size = parseInt(block.properties.size);
    const kernels = parseInt(input.channels);

    // Calculate output dimension using the formula:
    // output_dimension = ((input_dimension - kernel_size + 2*padding) / stride) + 1
    const outputHeight = Math.floor(
      stride * (inputHeight - 1) + size - 2 * padding
    );
    const outputWidth = Math.floor(
      stride * (inputWidth - 1) + size - 2 * padding
    );

    const outputChannels = kernels;

    return { outputHeight, outputWidth, outputChannels };
  } else {
    return { outputHeight: 0, outputWidth: 0, outputChannels: 0 };
  }
}
