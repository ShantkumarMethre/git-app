import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { TabNavigator, DrawerNavigator, StackNavigator } from 'react-navigation';
import Beertag from './Beertag';
import Saved from './Saved';
import Drank from './Drank';
import App from '../App';
import Breweries from './Breweries'

const Drawer = DrawerNavigator({
    Home: {
      screen: App,
      navigationOptions: {
        drawer: () => ({
          label: 'Home',
        })
      },
    },
    Beers: {
      screen: Beertag,
      navigationOptions: {
        drawer: () => ({
          label: 'Beers',
        })
      },
    },
    Breweries: {
        screen: Breweries,
        navigationOptions: {
          drawer: () => ({
            label: 'Breweries',
          })
        }
    }
  });
  export default Drawer;