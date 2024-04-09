import {
    ImageBackground,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image
  } from 'react-native';
  import React from 'react';
  import vianaarlogo from '../../Assets/vianaar_logo.png';
  import menu from '../../Assets/Menu.png';
  import Loginbg from '../../Assets/Login_Bg.png';

const ProfileScreen = ({navigation}) => {

    return (
        <ImageBackground style={{ height: '100%' }} source={Loginbg}>
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', elevation: 3, backgroundColor: '#C5DBD3' }}>
                <Image source={vianaarlogo} style={{ marginLeft: 15, width: 140, height: 40 }} />
                <TouchableOpacity onPress={() => { navigation.openDrawer(); }}>
                    <Image source={menu} style={{ marginRight: 15, tintColor: '#37745C', width: 30, height: 30 }} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{ top: 10, padding: 10 }}>
                  <Text style={{ color: '#3E8621', fontWeight: 'bold', fontSize: 20 }}>Profile Screen</Text>
                </View>
            </ScrollView>
        </View>
    </ImageBackground>
    );
};

export default ProfileScreen;