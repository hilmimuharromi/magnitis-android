import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { store, persistor } from '@stores/store';
import { Provider } from 'react-redux';
import Routes from "./src/Routes"
import { PersistGate } from 'redux-persist/integration/react';


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
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </>
  );
};


export default App;
