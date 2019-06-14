import React, { PureComponent } from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { TabNavigator, } from 'react-navigation';
import Overview from './Overview';
import Repositories from './Repositories';
import Stars from './Stars';
import Followers from './Followers';
import Following from './Following';
const TabView = TabNavigator({

  Overview: { screen: Overview },
  Repositories: { screen: Repositories },
  Stars: { screen: Stars },
  Followers: { screen: Followers },
  Following: { screen: Following },
},
  {
    tabBarOptions: {
      activeTintColor: 'black',
      style: { backgroundColor: '#fff' },
      labelStyle: { color: 'black' },
      upperCaseLabel: false,
      pressColor: 'grey',
    },
  });

export default TabView;