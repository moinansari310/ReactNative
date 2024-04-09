import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Bottom/HomeScreen';
import CalenderScreen from '../Bottom/CalenderScreen';
import NotificationScreen from '../Bottom/NotificationScreen';
import UpComingTaskScreen from '../Bottom/UpComingTaskScreen';
import ProfileScreen from '../Bottom/ProfileScreen';

const Drawer = createDrawerNavigator();

const CustomDrawer = ({ navigation, state }) => {
    const focused = state.index;
    const routeNames = state.routeNames;
       
    return (
        <DrawerContentScrollView>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}>
                    Code With Moin
                </Text>
            </View>
            {/* Start Drawer Menu Item */}
            <DrawerItem
                label={'Home'}
                onPress={() => {
                    navigation.navigate('Home');
                }}
                focused={focused === 0}
                activeTintColor='#37745C'
            />

            <DrawerItem
                label={'Calender'}
                onPress={() => {
                    navigation.navigate('Calendar');
                }}
                focused={focused === 1}
                activeTintColor='#37745C'
            />

            <DrawerItem
                label={'Notification'}
                onPress={() => {
                    navigation.navigate('Notification');
                }}
                focused={focused === 2}
                activeTintColor='#37745C'
            />

            <DrawerItem
                label={'UpComingTask'}
                onPress={() => {
                    navigation.navigate('UpComingTask');
                }}
                focused={focused === 3}
                activeTintColor='#37745C'
            />

            <DrawerItem
                label={'Profile'}
                onPress={() => {
                    navigation.navigate('Profile');
                }}
                focused={focused === 4}
                activeTintColor='#37745C'
            />
        </DrawerContentScrollView>
    );
};

const DrawerNavigation = () => (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} initialRouteName="Home">
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='Calendar' component={CalenderScreen} />
      <Drawer.Screen name='Notification' component={NotificationScreen} />
      <Drawer.Screen name='UpComingTask' component={UpComingTaskScreen} />
      <Drawer.Screen name='Profile' component={ProfileScreen} />
    </Drawer.Navigator>
);

export default DrawerNavigation;
