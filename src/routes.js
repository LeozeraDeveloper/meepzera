import { createAppContainer  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '~/pages/Login';
import Main from '~/pages/Main';

const Routes = createAppContainer(
  createStackNavigator({
    Login: {
      screen:Login,
      navigationOptions:{
        header:null
    },
  },
    Main:{
      screen:Main,
      navigationOptions:{
        header:null
      },
    }, 
  })
);

export default Routes;
