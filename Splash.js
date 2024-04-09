import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 3000);
    }, []);
    return (
        <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
            <Text style={{ color: 'black', fontSize:40 }}>Splash Screen</Text>
        </View>
    );
};

export default Splash;