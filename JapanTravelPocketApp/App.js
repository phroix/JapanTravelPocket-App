import React, {useEffect, useRef} from 'react';
import {AppState} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';

import {Provider} from 'react-redux';
import store from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import SpendingsAPI from './api/spendings';
import TagsAPI from './api/tags';

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
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import ActivitiesAPI from './api/activities';

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
  faChevronRight,
  faPlus,
  faXmark,
  faTrash,
  faBars,
);

const App = () => {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          await TagsAPI.getTags();
          await SpendingsAPI.getSpendings();
          await ActivitiesAPI.getActivities();
          // console.log('Come back in app');
        }
        appState.current = nextAppState;
      },
    );
    TagsAPI.getTags();
    SpendingsAPI.getSpendings();
    ActivitiesAPI.getActivities();

    // console.log('Application rendered');
  }, []);

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
