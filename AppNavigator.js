import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Splash';
import MainScreen from './MainScreen';
import LoginActivity from '../Views/LoginActivity';
import SideScreen1 from '../DrawerMenu/SideScreen1';

const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={LoginActivity} options={{ headerShown: false }} />
                <Stack.Screen name='MainScreen' component={MainScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SideScreen1' component={SideScreen1} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;