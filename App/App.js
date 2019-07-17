import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen  from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';
import PlaceScreen from './components/PlaceScreen'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Search: {screen: SearchScreen},
  Place: {screen: PlaceScreen}
});

const App = createAppContainer(MainNavigator);


export default App;
