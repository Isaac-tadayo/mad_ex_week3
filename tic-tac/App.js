import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Rules from './src/screens/Rules';
import Credits from './src/screens/Credits';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Rules" component={Rules} />
        <Stack.Screen name="Credits" component={Credits} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}