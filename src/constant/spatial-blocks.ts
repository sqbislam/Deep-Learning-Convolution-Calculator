import { ISpatialBlocks } from '@/lib/types';

export const spatialBlocks: ISpatialBlocks = {
  Convolution: [
    {
      name: '2D Convolution',
      shortcut: '2C',
      color: 'bg-red-200',
      type: 'conv2d',
      properties: {
        size: '3',
        stride: '2',
        padding: '2',
        kernels: '32',
      },
    },
    {
      name: 'Depthwise Convolution',
      shortcut: 'DC',
      color: 'bg-red-300',
      properties: {
        size: '3',
        stride: '2',
        padding: '2',
        kernels: '32',
      },
    },

    {
      name: 'Deconvolution',
      shortcut: 'dC',
      color: 'bg-red-700',
      properties: {
        size: '3',
        stride: '2',
        padding: '2',
        kernels: '32',
      },
    },
  ],
  Pooling: [
    {
      name: 'Max Pooling',
      shortcut: 'MP',
      type: 'pool',
      color: 'bg-cyan-400',
      properties: {
        size: '3',
        stride: '2',
        padding: '0',
      },
    },
    {
      name: 'Average Pooling',
      shortcut: 'AP',
      type: 'pool',
      color: 'bg-cyan-600',
      properties: {
        size: '3',
        stride: '2',
        padding: '0',
      },
    },
  ],
  Upsampling: [
    {
      name: 'Transpose Convolution',
      shortcut: 'TC',
      color: 'bg-lime-200',
      type: 'transpose2d',
      properties: {
        size: '3',
        stride: '2',
        padding: '2',
        kernels: '32',
      },
    },
    {
      name: 'Bilinear Upsampling',
      shortcut: 'BU',
      color: 'bg-lime-400',
      type: 'transpose2d',
      properties: {
        size: '3',
        stride: '2',
        padding: '2',
        kernels: '32',
      },
    },
    {
      name: 'Nearest Neighbor Upsampling',
      shortcut: 'NU',
      color: 'bg-lime-600',
      type: 'transpose2d',
      properties: {
        size: '3',
        stride: '2',
        padding: '2',
        kernels: '32',
      },
    },
    {
      name: 'Pixel Shuffle',
      shortcut: 'PS',
      color: 'bg-lime-800',
      type: 'transpose2d',
      properties: {
        size: '3',
        stride: '2',
        padding: '1',
        kernels: '32',
      },
    },
  ],
};
