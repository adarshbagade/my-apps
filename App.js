import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './screens/WelcomeScreen';
import { AppTabNavigator } from './components/AppTabNavigator'
import DanceScreen from './screens/DanceScreen';
import PranayamaScreen from './screens/PranayamaScreen';
import ShadowScreen from './screens/ShadowScreen';
import PhonicsScreen from './screens/PhonicsScreen';


export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  BottomTab:{screen: AppTabNavigator},
  DanceScreen:{screen: DanceScreen},
  PranayamaScreen:{screen:PranayamaScreen},
  ShadowScreen:{screen:ShadowScreen},
  PhonicsScreen:{screen:PhonicsScreen}
})

const AppContainer =  createAppContainer(switchNavigator);
