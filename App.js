import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CommonWebview from './ATools/Tools/Webview/CommonWebview';
import CommonTools from './ATools/Tools/CommonTools';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ToolsCard from './ATools/Tools/ToolsCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default class MyApp extends Component {
  render() {
    return (
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    );
  }
}

const StackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName='CommonTools'
      screenOptions={{
        headerShown: true,
      }}>
      {/* <Stack.Screen
      options={{
        headerShown: true,
        headerTitle: 'Tools , Calculators & More'
      }}
       name='Tools And Calculators' component={BottomTab} /> */}
      <Stack.Screen 
      options={{
        headerShown: true,
        headerTitle: 'Tools And Calculators'
      }}
      name='CommonWebview' component={CommonWebview} />
      <Stack.Screen name='CommonTools' component={CommonTools} />
      <Stack.Screen name='ToolsCard' component={ToolsCard} />
    </Stack.Navigator>
  );
};

// const BottomTab = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'gray',
//         headerShown: false,
//       })}
//       initialRouteName='CommonTools'>
//       {/* <Tab.Screen name="ToolsCard" component={ToolsCard} /> */}
//       {/* <Tab.Screen
//          name="CommonWebview" component={CommonWebview} 
//          options={{
//             tabBarLabel: 'Home',
//          }}
//         /> */}
//       <Tab.Screen
//         name='CommonTools'
//         component={CommonTools}
//         options={{
//           tabBarLabel: 'Tools',
//           tabBarIcon: ({color, size}) => (
//             <Text style={{color: color, fontSize: size}}> Tools</Text>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
