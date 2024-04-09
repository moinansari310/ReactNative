import React from 'react';
import { Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';


const Sidebar = ({navigation, state}) => {
    const focused = state.index;
  
  return (
    <DrawerContentScrollView>
            <View style={{ alignItems: 'center', marginBottom: 20}}>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 18,
                        fontWeight: 'bold',
                        color:'black'
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
                    navigation.navigate('Calender');
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
//     <View style={{ flex: 1, paddingTop: 50 }}>
//     <TouchableOpacity onPress={closeDrawer}>
//       <Text style={{ fontSize: 20, marginLeft: 10 }}>Close Drawer</Text>
//     </TouchableOpacity>
//     <TouchableOpacity onPress={() => navigation.navigate('SideScreen1')}>
//       <Text style={{ fontSize: 20, marginLeft: 10, backgroundColor: 'lightgray'}}> V Screen</Text>
//     </TouchableOpacity>
//     <TouchableOpacity onPress={() => navigation.navigate('SideScreen1')}>
//       <Text style={{ fontSize: 20, marginLeft: 10, backgroundColor: 'lightgray'}}> V Screen</Text>
//     </TouchableOpacity>
//   </View>
  )
}

export default Sidebar;