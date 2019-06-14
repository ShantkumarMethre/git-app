
import { StackNavigator } from 'react-navigation';
import App from './App';

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