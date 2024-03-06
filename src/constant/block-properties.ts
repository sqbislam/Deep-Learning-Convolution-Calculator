interface IBlockProperties {
  [key: string]: {
    name: string;
    description: string;
    properties: {
      [key2: string]: { name: string; description: string; value: string };
    };
  };
}

export const blockProperties: IBlockProperties = {
  conv_block: {
    name: 'Convolutional Layer',
    description:
      'A convolutional layer is a type of neural network layer that applies a set of filters to the input data. The filters are learned during the training process.',
    properties: {
      input: {
        name: 'Input Size',
        description:
          'The size of the input image. For example, 28x28 for MNIST dataset.',
        value: '28x28',
      },
      filter: {
        name: 'Filter Size',
        description: 'The size of the filter. For example, 3x3.',
        value: '3x3',
      },
      stride: {
        name: 'Stride',
        description:
          'The number of pixels to move the filter at each step. For example, 1.',
        value: '2',
      },
      padding: {
        name: 'Padding',
        description:
          'The number of pixels to add to the input image. For example, 1.',
        value: '2',
      },
    },
  },
};
