import { Dispatch, SetStateAction } from 'react';

export interface IDimensions {
  height: string;
  width: string;
  channels: string;
}
export interface GlobalContextType {
  input?: IDimensions;
  setInput?: (input: IDimensions) => void;
  setSelectedBlockArray?: Dispatch<SetStateAction<ISpatialBlock[]>>;
  selectedBlockArray?: ISpatialBlock[];
  output?: IDimensions;
  setOutput?: (output: IDimensions) => void;
  handleAddingNewBlock?: (block: ISpatialBlock) => void;
  handleUpdatingBlock?: (newblock: ISpatialBlock, blockId: string) => void;
  deleteLastBlock?: () => void;
}

export interface ISpatialBlocks {
  [key: string]: ISpatialBlock[];
}
export interface ISpatialBlock {
  _id?: string;
  name: string;
  shortcut?: string;
  disabled?: boolean;
  type?: string;
  color?: string;
  inset?: boolean;
  input?: string;
  properties?: { [key: string]: string } | undefined;
}
