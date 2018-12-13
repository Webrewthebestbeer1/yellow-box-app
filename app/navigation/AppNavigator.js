import React from 'react';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Control from './Control';
import Dashboard from './Dashboard';

export const TabNavigator = createAppContainer(
  createBottomTabNavigator({
    Control: Control,
    Dashboard: Dashboard
  })
);
