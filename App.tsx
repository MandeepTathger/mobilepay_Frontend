/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
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
import MainHomeScreen from './src/screens/tabs';
// import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  const config = {
		initialColorMode: "secondary",  // initial color mode 
	}

	const extendedTheme = extendTheme({ config })
  // const [isToken, setIsToken] = useState(false)

  // useEffect(() => {
  //   const getToken = async() => {
  //     const user = await AsyncStorage.getItem('user') 
  //     let token = null
  //     if(user){
  //       token = JSON.parse(user).token
  //     }
  //     if(token){
  //       setIsToken(true)
  //     }
  //     return token
  //   }
  //   getToken()
  // }, [])
  
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={extendedTheme}>
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen
              name="login"
              component={LoginScreen}
              options={{title: 'Login'}}
            />
            <Stack.Screen
              name="landingPage"
              component={MainHomeScreen}
            />
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
