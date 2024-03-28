import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigation from './navigation/MainNavigation';

import {Provider} from 'react-redux';
import store from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faMoneyBill1 as regFaMoneyBill1} from '@fortawesome/free-regular-svg-icons/faMoneyBill1';
import {faMoneyBill1 as solFaMoneyBill1} from '@fortawesome/free-solid-svg-icons/faMoneyBill1';
import {faCreditCard as regFaCreditCard} from '@fortawesome/free-regular-svg-icons/faCreditCard';
import {faCreditCard as solFaCreditCard} from '@fortawesome/free-solid-svg-icons/faCreditCard';
import {faBookmark as regFaBookmark} from '@fortawesome/free-regular-svg-icons/faBookmark';
import {faBookmark as solFaBookmark} from '@fortawesome/free-solid-svg-icons/faBookmark';
import {faEuroSign} from '@fortawesome/free-solid-svg-icons/faEuroSign';
import {faYenSign} from '@fortawesome/free-solid-svg-icons/faYenSign';
import {faRetweet} from '@fortawesome/free-solid-svg-icons/faRetweet';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';

library.add(
  fab,
  regFaMoneyBill1,
  solFaMoneyBill1,
  regFaCreditCard,
  solFaCreditCard,
  regFaBookmark,
  solFaBookmark,
  faEuroSign,
  faYenSign,
  faRetweet,
  faChevronLeft,
  faPlus,
  faXmark,
);

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
