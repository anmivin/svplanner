import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Gifts from './app/screens/gifts';
import Perfection from './app/screens/perfection';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { Provider } from 'react-redux';
import { setupStore } from './app/store/mainStore';
const Tab = createBottomTabNavigator();
const store = setupStore();
export default function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Gifts" component={Gifts} />
            <Tab.Screen name="Perfection" component={Perfection} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
