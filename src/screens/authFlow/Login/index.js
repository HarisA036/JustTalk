import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'react-native';
import { appStyle } from '../../../services/appStyles/style';
import { SafeAreaView } from 'react-native-safe-area-context';
import ForgetPassword from '../ForgetPassword';
import SignUp from '../SignUp';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import CheckBox from '../../../components/checkBox';
import { appIcons } from '../../../services/assets';
import auth from '@react-native-firebase/auth';
import AppNavigation from '../../../navigation/appNavigation';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [checked, setChecked] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleCheckboxPress = () => {

        setChecked(!checked); // Toggle the state of the checkbox
    };

    const handleLogin = async () => {

        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        try {

            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            Alert.alert('User logged in successfully:');
            navigation.navigate(AppNavigation)

        } catch (error) {
            Alert.alert('Error', 'Invalid email or password. Please try again.');
        }
    };

    return (
        <>
            <StatusBar
                backgroundColor={'white'}
                barStyle={'dark-content'}
            />
            <ScrollView style={appStyle.loginSV}>
                <SafeAreaView style={appStyle.splash3SAV}>
                    <Image
                        style={appStyle.splash3BGImage}
                        source={appIcons.Splash3Img}
                    />
                    <Text style={appStyle.splash3V}>Welcome to Login!</Text>
                    <View style={appStyle.splash4V}>
                    </View>
                    <View style={appStyle.loginTV} >
                        <Text style={appStyle.loginText}>Email</Text>
                        <TextInput
                            style={appStyle.loginTIV}
                            placeholder='johndoe@email.com'
                            placeholderTextColor={'#222222'}
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                        />
                    </View>

                    <View style={appStyle.loginTV}>


                        <Text style={appStyle.loginText}>Password</Text>

                        <TextInput
                            style={appStyle.loginTIV}
                            placeholder='• • • • • • • • • • • • • • •'
                            placeholderTextColor={'#222222'}
                            secureTextEntry={!passwordVisible}
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                        />
                        <View style={appStyle.visibilityButtonV}>
                            <TouchableOpacity
                                onPress={togglePasswordVisibility}>
                                {passwordVisible ? (
                                    <Image source={appIcons.EyeIcon} style={appStyle.eyeIcon} />
                                ) : (
                                    <Image source={appIcons.EyeIcon} style={appStyle.eyeIcon} />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={appStyle.rememberV}>
                        <View style={{ paddingTop: responsiveScreenHeight(1.7) }}>
                            <CheckBox />
                        </View>
                        <Text style={appStyle.rememberT}>Remember me</Text>
                        <View style={appStyle.forgetTV}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate(ForgetPassword)} >
                                <Text style={appStyle.forgotT} >Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => handleLogin()}
                        style={appStyle.loginBorder}>
                        <Text style={appStyle.loginB} >LOG IN</Text>
                    </TouchableOpacity>
                    <Text style={appStyle.dontAccT}>Don't have an account?</Text>
                    <TouchableOpacity
                        style={appStyle.createAccB}
                        onPress={() => navigation.navigate(SignUp)} >
                        <Text style={appStyle.createAccT} >CREATE AN ACCOUNT</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        </>

    );
};
export default Login;