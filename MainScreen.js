import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Sidebar from '../DrawerMenu/Sidebar';
import BottomNavigation from './BottomNavigation';

const Drawer = createDrawerNavigator();

const MainScreen = () => {
  return (
    <Drawer.Navigator screenOptions={{drawerPosition:'right'}} drawerContent={props => <Sidebar {...props} />} >
        <Drawer.Screen name='Bottom' component={BottomNavigation} options={{headerShown: false}}/>
    </Drawer.Navigator>
  );
};

export default MainScreen;