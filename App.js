import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import WrapperComponent from './src/components/WrapperComponent';
import MainNavigator from './src/navigators/MainNavigator';
import reducer from './src/redux/store';
import {NotifierWrapper} from 'react-native-notifier';

const App = () => {
  const store = createStore(reducer, applyMiddleware(thunk));
  return (
    <NotifierWrapper>
      <Provider store={store}>
        <MainNavigator />
        <WrapperComponent />
      </Provider>
    </NotifierWrapper>
  );
};

export default App;
