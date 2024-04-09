import React from 'react';
import {
    ImageBackground,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import CardDetails from '../Views/CardDetails';
import Loginbg from '../../Assets/Login_Bg.png';
import vianaarlogo from '../../Assets/vianaar_logo.png';

const HomeScreen = ({ navigation }) => {

    return (
        <ImageBackground style={{ height: '100%' }} source={Loginbg}>
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%', height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', elevation: 3, backgroundColor: '#C5DBD3' }}>
                    <Image source={vianaarlogo} style={{ marginLeft: 15, width: 140, height: 40 }} />
                    <TouchableOpacity onPress={() => { navigation.openDrawer(); }}>
                        <Image source={require('../../Assets/Menu.png')} style={{ marginRight: 15, tintColor: '#37745C', width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ top: 10, padding: 10 }}>
                        <Text style={{ color: '#3E8621', fontWeight: 'bold', fontSize: 20 }}>UpComing Task</Text>
                    </View>
                    <View>
                        <CardDetails />
                        <CardDetails />
                        <CardDetails />
                        <CardDetails />
                        <CardDetails />
                        <CardDetails />
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    );
}

export default HomeScreen;
