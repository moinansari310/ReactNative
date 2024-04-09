import { View, Text, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Bottom/HomeScreen';
import CalenderScreen from '../Bottom/CalenderScreen';
import UpComingTaskScreen from '../Bottom/UpComingTaskScreen';
import ProfileScreen from '../Bottom/ProfileScreen';
import homelogo from '../../Assets/homelogo.png';
import calender from '../../Assets/calendar.png';
import notification from '../../Assets/bell.png';
import notes from '../../Assets/notes.png';
import profile from '../../Assets/userlogo.png';
import NotificationScreen from '../Bottom/NotificationScreen';

const Bottom = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Bottom.Navigator screenOptions={{ tabBarStyle: { backgroundColor: '#C5DBD3' }}}>
            <Bottom.Screen name='Home' component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={homelogo}
                            style={{
                                height: 30,
                                width: 30,
                                tintColor: focused ? '#37745C' : '#ffff',
                            }}
                        />
                    ),
                    tabBarActiveTintColor: '#37745C',
                    tabBarInactiveTintColor: '#ffff',
                }} />

            <Bottom.Screen name='Calender' component={CalenderScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={calender}
                            style={{
                                height: 30,
                                width: 30,
                                tintColor: focused ? '#37745C' : '#ffff',
                            }}
                        />
                    ),
                    tabBarActiveTintColor: '#37745C',
                    tabBarInactiveTintColor: '#ffff',
                }} />
            <Bottom.Screen name='Notification' component={NotificationScreen} 
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={notification}
                        style={{
                            height: 30,
                            width: 30,
                            tintColor: focused ? '#37745C' : '#ffff',
                        }}
                    />
                ),
                tabBarActiveTintColor: '#37745C',
                tabBarInactiveTintColor: '#ffff',
            }} />
            <Bottom.Screen name='UpComingTask' component={UpComingTaskScreen} 
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={notes}
                        style={{
                            height: 30,
                            width: 30,
                            tintColor: focused ? '#37745C' : '#ffff',
                        }}
                    />
                ),
                tabBarActiveTintColor: '#37745C',
                tabBarInactiveTintColor: '#ffff',
            }} />
            <Bottom.Screen name='Profile' component={ProfileScreen} 
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={profile}
                        style={{
                            height: 30,
                            width: 30,
                            tintColor: focused ? '#37745C' : '#ffff',
                        }}
                    />
                ),
                tabBarActiveTintColor: '#37745C',
                tabBarInactiveTintColor: '#ffff',
            }} />
        </Bottom.Navigator>
    )
}

export default BottomNavigation;