import {createStackNavigator} from 'react-navigation-stack';
import  {createAppContainer} from 'react-navigation';
import SearchScreen from './src/Screens/SearchScreen';
import ResultScreen from './src/Screens/ResultScreen';

const navigator = createStackNavigator(
  {
  Search: SearchScreen,
  ResultsShow: ResultScreen,
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Hero Search'
  } 
}
);

export default createAppContainer(navigator); 