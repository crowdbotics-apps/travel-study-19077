import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList82706Navigator from '../features/ArticleList82706/navigator';
import ArticleList82705Navigator from '../features/ArticleList82705/navigator';
import ArticleList82704Navigator from '../features/ArticleList82704/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList82706: { screen: ArticleList82706Navigator },
ArticleList82705: { screen: ArticleList82705Navigator },
ArticleList82704: { screen: ArticleList82704Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
