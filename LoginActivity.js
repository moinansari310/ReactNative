import React, {useState} from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Vianaarlogo = require("../../Assets/vianaar_logo.png");
const Loginbg = require("../../Assets/Login_Bg.png");
const Vlogo = require("../../Assets/Vlogo.png");

function LoginActivity() {

  const navigation = useNavigation();
  const [Password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () =>
  {
    setShowPassword(!showPassword);
  };
    
  return (
    <ImageBackground style={{ height: '100%' }}
      source={Loginbg}>
      <SafeAreaView>
        <ScrollView style={{ padding: 40 }}>

          <View style={{ padding: 10, alignItems: 'center' }}>
            <Image source={Vianaarlogo} />
          </View>

          <View style={{ paddingTop:130, alignItems: 'center' }}>
            <Image source={Vlogo} />
          </View>

          <View style={{ paddingTop: 90, paddingBottom: 80 }}>
            <View style={{ marginTop: 30 }}>
              <TextInput
                placeholder='Enter your email ID'
                placeholderTextColor='#37745C'
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#37745C', padding: 15, borderRadius: 12, borderColor: '#37745C', borderWidth: 2 }}>
              </TextInput>
            </View>

            <View style={{ marginTop: 20 }}>
              <TextInput
                secureTextEntry = {!showPassword}
                value={Password}
                onChangeText={setPassword}
                placeholder='Password'
                placeholderTextColor='#37745C'
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#37745C', padding: 15, borderRadius: 12, borderColor: '#37745C', borderWidth: 2 }}>
              </TextInput>

              <TouchableOpacity style = {{position:'absolute', right:15, top:18}}
              onPress={togglePasswordVisibility}>
              <Image
              source={showPassword ? require('../../Assets/openeye.png') : require("../../Assets/closeeye.png")}
              style = {{height:24, width:24, tintColor: showPassword ? '#37745C' : '#37745C'}}>
              </Image>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={{ color: '#37745C', textAlign: 'left', padding: 18 }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
              <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', backgroundColor: '#37745C', padding: 16, marginTop: 20, borderRadius: 30 }}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default LoginActivity;
