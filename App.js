import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Dozes from './components/dozes';
import Fuzis from './components/fuzis';
import Granadas from './components/granadas';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialcommunityIcons from '@expo/vector-icons'

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{ headerShown: false, }}>
        <Tab.Screen name="dozes" component={Dozes} Options={{ 
          tabBarIcon:({color,size})=><MaterialcommunityIcons name="access-point-network-off" color={color} size={size}/>}}/>
        <Tab.Screen name="fuzis" component={Fuzis}></Tab.Screen>
        <Tab.Screen name="granadas" component={Granadas}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


