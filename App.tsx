/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/login';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { Provider } from 'react-redux'
import { store } from './app/store'
import HomeScreen from './src/screens/home';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const config = {
		initialColorMode: "secondary",  // initial color mode 
	}

	const extendedTheme = extendTheme({ config })

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={extendedTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="login"
              component={LoginScreen}
              options={{title: 'Login'}}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Welcome'}}
            />
            {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
