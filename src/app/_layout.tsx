import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'Governo do Estado',
          }}
        />
        <Drawer.Screen
          name="screens/login"
          options={{
            drawerLabel: 'Seplag',
            title: 'Seplag',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
