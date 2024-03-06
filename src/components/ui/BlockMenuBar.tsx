import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';

import { spatialBlocks } from '@/constant/spatial-blocks';

export default function BlockMenuBar({
  selectedBlockArray,
  setSelectedBlockArray,
}: {
  selectedBlockArray: string[];
  setSelectedBlockArray: (value: any[]) => void;
}) {
  const handleBlockSelection = (item: any) => {
    setSelectedBlockArray([...selectedBlockArray, item]);
  };

  return (
    <Menubar>
      {Object.entries(spatialBlocks).map(([name, items]) => (
        <MenubarMenu key={name} value={name}>
          <MenubarTrigger>{name}</MenubarTrigger>
          <MenubarContent>
            {items.map((item, index) => (
              <MenubarItem
                key={index}
                inset={item.inset ?? false}
                textValue={item.name}
                onSelect={(e) => handleBlockSelection(item)}
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
