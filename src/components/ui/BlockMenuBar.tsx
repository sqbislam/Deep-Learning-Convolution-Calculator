import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';

interface IMenuBarItem {
  [key: string]: {
    name: string;
    shortcut?: string;
    disabled?: boolean;
    inset?: boolean;
  }[];
}
const menubarItems: IMenuBarItem = {
  Convolution: [
    {
      name: '2D Convolution',
      shortcut: '⌘T',
    },
    {
      name: 'Depthwise Convolution',
      shortcut: '⌘N',
    },
    {
      name: '1D Convolution',
      disabled: true,
    },
    {
      name: 'Deconvolution',
      shortcut: '⌘N',
    },
  ],
  Pooling: [
    {
      name: 'Max Pooling',
      shortcut: '⌘Z',
    },
    {
      name: 'Average Pooling',
      shortcut: '⇧⌘Z',
    },
  ],
  Upsampling: [
    {
      name: 'Transpose Convolution',
      shortcut: '⌘R',
      inset: true,
    },
    {
      name: 'Bilinear Upsampling',
      shortcut: '⇧⌘R',
      inset: true,
    },
    {
      name: 'Nearest Neighbor Upsampling',
      inset: true,
    },
    {
      name: 'Pixel Shuffle',
      inset: true,
    },
  ],
};

export default function BlockMenuBar() {
  return (
    <Menubar>
      {Object.entries(menubarItems).map(([name, items]) => (
        <MenubarMenu key={name}>
          <MenubarTrigger>{name}</MenubarTrigger>
          <MenubarContent>
            {items.map((item, index) => (
              <MenubarItem key={index} inset={item.inset ?? false}>
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
