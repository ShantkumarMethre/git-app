import React, { PureComponent } from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { TabNavigator, DrawerNavigator, StackNavigator } from 'react-navigation';
import Beertag from './component/Beertag';
import Saved from './component/Saved';
import Drank from './component/Drank';
import BeerDetails from './component/BeerDetails';
import Search from './component/Search';
import Header from './component/Header';
import Drawer from './component/Drawer';
import BeerList from './component/BeerList';
import Filter from './component/Filter';
import App from './App';
import { Button } from './common/Button';

const RootNavigator = StackNavigator({
 
  App: {
    screen: App,
    navigationOptions: {
      header: null
    }
  },

},
  {
    initialRouteName: 'App'
  });

export default RootNavigator;