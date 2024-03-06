import { useCallback } from 'react';
import { v4 } from 'uuid';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';

import { useGlobalContext } from '@/store/GlobalStateContext';

import { ISpatialBlock, spatialBlocks } from '@/constant/spatial-blocks';

export default function BlockMenuBar() {
  const globalStore = useGlobalContext();
  const { handleAddingNewBlock, output } = globalStore;

  const handleBlockSelection = useCallback(
    (item: ISpatialBlock) => {
      if (globalStore && handleAddingNewBlock) {
        const itemWithId = {
          ...item,
          input: `${output?.height}x${output?.width}x${output?.channels}`,
          _id: v4(),
        };
        handleAddingNewBlock(itemWithId);
      }
    },
    [
      globalStore,
      handleAddingNewBlock,
      output?.channels,
      output?.height,
      output?.width,
    ]
  );

  return (
    <Menubar>
      {Object.entries(spatialBlocks).map(([name, items]) => (
        <MenubarMenu key={name} value={name}>
          <MenubarTrigger>{name}</MenubarTrigger>
          <MenubarContent>
            {items.map((item, index) => (
              <MenubarItem
                key={item?.name ?? index}
                inset={item.inset ?? false}
                textValue={item.name}
                onSelect={(e) => {
                  e.preventDefault();
                  handleBlockSelection(item as any);
                }}
                data-value={item.name}
              >
                {item.name}
                {item.shortcut && (
                  <MenubarShortcut>{item.shortcut}</MenubarShortcut>
                )}
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      ))}
    </Menubar>
  );
}
