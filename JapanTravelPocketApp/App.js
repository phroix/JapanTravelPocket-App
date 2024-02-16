import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigation from './navigation/MainNavigation';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faMoneyBill1 as regFaMoneyBill1} from '@fortawesome/free-regular-svg-icons/faMoneyBill1';
import {faMoneyBill1 as solFaMoneyBill1} from '@fortawesome/free-solid-svg-icons/faMoneyBill1';
import {faCreditCard as regFaCreditCard} from '@fortawesome/free-regular-svg-icons/faCreditCard';
import {faCreditCard as solFaCreditCard} from '@fortawesome/free-solid-svg-icons/faCreditCard';
import {faBookmark as regFaBookmark} from '@fortawesome/free-regular-svg-icons/faBookmark';
import {faBookmark as solFaBookmark} from '@fortawesome/free-solid-svg-icons/faBookmark';

library.add(
  fab,
  regFaMoneyBill1,
  solFaMoneyBill1,
  regFaCreditCard,
  solFaCreditCard,
  regFaBookmark,
  solFaBookmark,
);

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
