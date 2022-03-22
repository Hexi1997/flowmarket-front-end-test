import { Drawer as BaseUiDrawer, DrawerProps } from 'baseui/drawer';

export function Drawer(props: DrawerProps) {
  return (
    <BaseUiDrawer
      {...props}
      overrides={{
        DrawerBody: {
          style: () => ({
            margin: '64px 0 0 0',
            padding: '0'
          })
        }
      }}
    >
      <div className="h-full w-full">{props.children}</div>
    </BaseUiDrawer>
  );
}
