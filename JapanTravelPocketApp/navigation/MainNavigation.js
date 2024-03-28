import React from 'react';
import {Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';

import Calculator from '../screens/Calculator/Calculator';
import Spendings from '../screens/Spendings/Spendings';
import Activities from '../screens/Activities/Activities';
import Tags from '../screens/Tags/Tags';
import DatePickerScreen from '../screens/DatePickerScreen/DatePickerScreen';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {verticalScale} from '../assets/styles/scaling';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SpendingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Spendings} component={Spendings} />
      <Stack.Screen
        name={Routes.DatePickerScreen}
        component={DatePickerScreen}
      />
      <Stack.Screen name={Routes.Tags} component={Tags} />
    </Stack.Navigator>
  );
};

// const TagsStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
//       <Stack.Screen name={Routes.Spendings} component={Spendings} />
//       <Stack.Screen name={Routes.Tags} component={Tags} />
//     </Stack.Navigator>
//   );
// };

const MainNavigation = () => {
  const iconSize = 30;

  return (
    <Tab.Navigator
      initialRouteName={Routes.Calculator}
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: '#181818',
          height: verticalScale(75),
        },
        header: () => null,
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          color = '#FFFFFF';
          if (route.name === Routes.Calculator) {
            iconName = focused
              ? 'fa-solid fa-money-bill-1'
              : 'fa-regular fa-money-bill-1';
          } else if (route.name === Routes.DatePickerStack) {
            iconName = focused
              ? 'fa-solid fa-credit-card'
              : 'fa-regular fa-credit-card';
          } else if (route.name === Routes.Activities) {
            iconName = focused
              ? 'fa-solid fa-bookmark'
              : 'fa-regular fa-bookmark';
          }

          return (
            <FontAwesomeIcon icon={iconName} size={iconSize} color={color} />
          );
        },
        tabBarLabel: ({focused, color}) => {
          let labelName = '';
          color = '#FFFFFF';

          if (route.name === Routes.Calculator) {
            labelName = focused ? Routes.Calculator : '';
          } else if (route.name === Routes.DatePickerStack) {
            labelName = focused ? Routes.Spendings : '';
          } else if (route.name === Routes.Activities) {
            labelName = focused ? Routes.Activities : '';
          }

          return <Text style={{color: color}}>{labelName}</Text>;
        },
      })}>
      <Tab.Screen name={Routes.Calculator} component={Calculator} />
      <Tab.Screen name={Routes.DatePickerStack} component={SpendingsStack} />
      <Tab.Screen name={Routes.Activities} component={Activities} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
