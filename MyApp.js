import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import CommonWebview from './ATools/Tools/Webview/CommonWebview';
import CommonTools from './ATools/Tools/CommonTools';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


// import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



export default class MyApp extends Component {

    StackScreen = () => {
        return (
            <Stack.Navigator
                initialRouteName="BottomTab"
                screenOptions={{
                    headerShown: false
                }}

            >
                <Stack.Screen name="BottomTab" component={BottomTab} />
                <Stack.Screen name="ToolsCard" component={ToolsCard} />
                <Stack.Screen name="CommonWebview" component={CommonWebview} />
                <Stack.Screen name="CommonTools" component={CommonTools} />
            </Stack.Navigator>
        )
    }


    render() {
        return (
            <NavigationContainer>
                <StackScreen />

            </NavigationContainer>
        )
    }
}


const BottomTab = () => {
    <Tab.Navigator
        screenOptions={({ route }) => ({
            // tabBarIcon: ({ focused, color, size }) => {
            //     let iconName;
            //     if (route.name === 'ToolsCard') {
            //         iconName = focused
            //             ? 'ios-information-circle'
            //             : 'ios-information-circle-outline';
            //     } else if (route.name === 'CommonWebview') {
            //         iconName = focused ? 'ios-list-box' : 'ios-list';
            //     } else if (route.name === 'CommonTools') {
            //         iconName = focused ? 'ios-list-box' : 'ios-list';
            //     } else if (route.name === 'Database') {
            //         iconName = focused ? 'ios-list-box' : 'ios-list';
            //     }

            //     // You can return any component that you like here!
            //     return <Ionicons name={iconName} size={size} color={color} />;
            // },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            initialRouteName: 'CommonTools',
        })}

    >
        {/* <Tab.Screen name="ToolsCard" component={ToolsCard} /> */}
        {/* <Tab.Screen name="CommonWebview" component={CommonWebview} /> */}
        <Tab.Screen name="CommonTools" component={CommonTools} />
        {/* <Tab.Screen name="Database" component={Database} /> */}
    </Tab.Navigator>

}