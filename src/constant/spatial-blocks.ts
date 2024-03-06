interface ISpatialBlock {
  [key: string]: {
    name: string;
    shortcut?: string;
    disabled?: boolean;
    color?: string;
    inset?: boolean;
    properties?: { [key: string]: string };
  }[];
}
export const spatialBlocks: ISpatialBlock = {
  Convolution: [
    {
      name: '2D Convolution',
      shortcut: '2C',
      color: 'bg-red-200',
      properties: {
        input: '28x28',
        filter: '3x3',
        stride: '2',
        padding: '2',
      },
    },
    {
      name: 'Depthwise Convolution',
      shortcut: 'DC',
      color: 'bg-red-300',
      properties: {
        input: '28x28',
        filter: '3x3',
        stride: '2',
        padding: '2',
      },
    },
    {
      name: '1D Convolution',
      shortcut: '1C',
      disabled: true,
      color: 'bg-red-400',
      properties: {
        input: '28x28',
        filter: '3x3',
        stride: '2',
        padding: '2',
      },
    },
    {
      name: 'Deconvolution',
      shortcut: 'dC',
      color: 'bg-red-700',
      properties: {
        input: '28x28',
        filter: '3x3',
        stride: '2',
        padding: '2',
      },
    },
  ],
  Pooling: [
    {
      name: 'Max Pooling',
      shortcut: 'MP',
      color: 'bg-cyan-400',
      properties: {
        input: '28x28',
        filter: '3x3',
        stride: '2',
        padding: '2',
      },
    },
    {
      name: 'Average Pooling',
      shortcut: 'AP',
      color: 'bg-cyan-600',
      properties: {
        input: '28x28',
        filter: '3x3',
        stride: '2',
        padding: '2',
      },
    },
  ],
  Upsampling: [
    {
      name: 'Transpose Convolution',
      shortcut: 'TC',
      color: 'bg-lime-200',
      properties: {
        input: '28x28',
        filter: '3x3',
        stride: '2',
        padding: '2',
      },
    },
    {
      name: 'Bilinear Upsampling',
      shortcut: 'BU',
      color: 'bg-lime-400',
      properties: {
        input: '28x28',
        filter: '3x3',
        stride: '2',
        padding: '2',
      },
    },
    {
      name: 'Nearest Neighbor Upsampling',
      shortcut: 'NU',
      color: 'bg-lime-600',
      properties: {
        input: '28x28',
        filter: '3x3',
        stride: '2',
        padding: '2',
      },
    },
    {
      name: 'Pixel Shuffle',
      shortcut: 'PS',
      color: 'bg-lime-800',
      properties: {
        input: '28x28',
        filter: '3x3',
        stride: '2',
        padding: '2',
      },
    },
  ],
};
