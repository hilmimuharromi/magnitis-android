import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';
import Routes from "./src/Routes"
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    // Hide SplashScreen after 3secs or Make an async task
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 1000);
    // RNBootSplash.hide({ fade: true })
  }, []);

  return (
    <>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
};


export default App;
