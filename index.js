// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Image} from 'react-native';
// import LoginActivity from '../Views/LoginActivity';
// import HomeTab from '../Bottom/HomeScreen';
// import UpComingTask from '../Bottom/UpComingTaskScreen';
// import CalenderTab from '../Bottom/CalenderScreen';
// import NotificationTab from '../Bottom/NotificationScreen';
// import ProfileTab from '../Bottom/ProfileScreen';
// import homelogo from '../../Assets/homelogo.png';
// import userlogo from '../../Assets/userlogo.png';
// import notification from '../../Assets/bell.png';
// import calender from '../../Assets/calendar.png';
// import notes from '../../Assets/notes.png';
// import DrawerNavigation from '../DrawerMenu/CustomDrawer';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//     return (
//         <Tab.Navigator
//             screenOptions={{
//                 tabBarStyle: { backgroundColor: '#C5DBD3' },
//             }}>
//             <Tab.Screen
//                 name='Home'
//                 component={DrawerNavigation}
//                 options={{
//                     title: 'Home',
//                     headerShown: false,
//                     tabBarIcon: ({ focused }) => (
//                         <Image
//                             source={homelogo}
//                             style={{
//                                 height: 30,
//                                 width: 30,
//                                 tintColor: focused ? '#37745C' : '#ffff',
//                             }}
//                         />
//                     ),
//                     tabBarActiveTintColor: '#37745C',
//                     tabBarInactiveTintColor: '#ffff',
//                 }}
//             />
//             <Tab.Screen
//                 name='Calender'
//                 component={DrawerNavigation}
//                 options={{
//                     title: 'Calender',
//                     headerShown: false,
//                     tabBarIcon: ({ focused }) => (
//                         <Image
//                             source={calender}
//                             style={{
//                                 height: 30,
//                                 width: 30,
//                                 tintColor: focused ? '#37745C' : '#ffff',
//                             }}
//                         />
//                     ),
//                     tabBarActiveTintColor: '#37745C',
//                     tabBarInactiveTintColor: '#ffff',
//                 }}
//             />
//             <Tab.Screen
//                 name='Notification'
//                 component={DrawerNavigation}
//                 options={{
//                     title: 'Notification',
//                     headerShown: false,
//                     tabBarIcon: ({ focused }) => (
//                         <Image
//                             source={notification}
//                             style={{
//                                 height: 30,
//                                 width: 30,
//                                 tintColor: focused ? '#37745C' : '#ffff',
//                             }}
//                         />
//                     ),
//                     tabBarActiveTintColor: '#37745C',
//                     tabBarInactiveTintColor: '#ffff',
//                 }}
//             />
//             <Tab.Screen
//                 name='UpComingTask'
//                 component={DrawerNavigation}
//                 options={{
//                     title: 'UpComingTask',
//                     headerShown: false,
//                     tabBarIcon: ({ focused }) => (
//                         <Image
//                             source={notes}
//                             style={{
//                                 height: 30,
//                                 width: 30,
//                                 tintColor: focused ? '#37745C' : '#ffff',
//                             }}
//                         />
//                     ),
//                     tabBarActiveTintColor: '#37745C',
//                     tabBarInactiveTintColor: '#ffff',
//                 }}
//             />
//             <Tab.Screen
//                 independent={true}
//                 name='Profile'
//                 component={DrawerNavigation}
//                 options={{
//                     title: 'Profile',
//                     headerShown: false,
//                     tabBarIcon: ({ focused }) => (
//                         <Image
//                             source={userlogo}
//                             style={{
//                                 height: 30,
//                                 width: 30,
//                                 tintColor: focused ? '#37745C' : '#ffff',
//                             }}
//                         />
//                     ),
//                     tabBarActiveTintColor: '#37745C',
//                     tabBarInactiveTintColor: '#ffff',
//                 }}
//             />
//         </Tab.Navigator>
//     );
// };

// const StackNavigation = () => {
//     return (
//             <Stack.Navigator initialRouteName='Login'>
//                 <Stack.Screen
//                     name='Home'
//                     component={TabNavigator}
//                     options={{ headerShown: false }}
//                 />
//                 <Stack.Screen
//                     name='Login'
//                     component={LoginActivity}
//                     options={{ headerShown: false }}
//                 />
//             </Stack.Navigator>
//     );
// };

// export default StackNavigation;
