// In App.js in a new project
import * as React from 'react';
import Root from './src/index'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import Store from './src/store';
function App() {
  return (
   
<Provider store={Store}>
  
      <Root/>
      </Provider>
    

  );
}

export default App;