import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'react-native';
import { appStyle } from '../../../services/appStyles/style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from '../Login';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { appIcons } from '../../../services/assets';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [checked, setChecked] = useState(false);

    const handleSignUp = async () => {

        if (!email || !password || !confirmPassword) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        if (!emailRegex.test(email)) {
            Alert.alert('Error', 'Please enter a valid email address.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match. Please try the same password.');
            return;
        }
        if (!checked) {
            Alert.alert('Error', 'Please accept the terms and conditions to sign up.');
            return;
        }

        try {

            const userExists = await auth().fetchSignInMethodsForEmail(email);
            if (userExists && userExists.length > 0) {
                Alert.alert('Error', 'This Email already exist.');
                return;
            };

            const userCredential = await auth().createUserWithEmailAndPassword(email, password);
            await firestore()
                .collection('users')
                .doc(userCredential.user.uid)
                .set({
                    email,
                    password,
                });
                Alert.alert('','User SignUp Successfully!')
            navigation.navigate(Login);

        } catch (error) {
            Alert.alert('Error', 'Failed to create an account. Please try again.');
        }
    };

    const updateFirestoreUserCount = async () => {
        try {
          const countRef = firestore().collection('userCount').doc('userCountDocument');
          await firestore().runTransaction(async (transaction) => {
            const doc = await transaction.get(countRef);
            let count = doc.exists ? doc.data().count : 0;
            count++; // Increment user count
            transaction.set(countRef, { count });
          });
        } catch (error) {
          console.error('Error updating user count:', error);
        };
    };


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleCheckboxPress = () => {

        setChecked(!checked); // Toggle the state of the checkbox
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
                    <Text style={appStyle.splash3V}>Welcome to SignUp!</Text>
                    <View style={appStyle.splash4V}>
                    </View>

                    <View style={appStyle.signUpTV} >

                        <Text style={appStyle.signUpText}>Username</Text>
                        <TextInput
                            style={appStyle.signUpTIV}
                            placeholder='johndoe123'
                            placeholderTextColor={'#222222'}
                            onChangeText={(text) => setEmail(text)}
                            value={email}

                        />
                        <View style={appStyle.signUpCircleCheckImgV}>
                            <Image
                                style={appStyle.signUpCircleCheckImg}
                                source={appIcons.CheckCircleIcon}
                            />
                        </View>
                    </View>
                    <View style={appStyle.loginTV}>

                        <Text style={appStyle.signUpText}>Password</Text>
                        <TextInput
                            style={appStyle.signUpTIV}
                            placeholder='• • • • • • • • • • • • • • •'
                            placeholderTextColor={'#222222'}
                            secureTextEntry={true}
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
                    <View style={appStyle.loginTV}>

                        <Text style={appStyle.signUpText}>Confirm Password</Text>
                        <TextInput
                            style={appStyle.signUpTIV}
                            placeholder='• • • • • • • • • • • • • • •'
                            placeholderTextColor={'#222222'}
                            secureTextEntry={true}
                            onChangeText={(text) => setConfirmPassword(text)}
                            value={confirmPassword}
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
                    <View style={appStyle.policyMainV}>

                        <View style={{ paddingTop: responsiveScreenHeight(0.3) }}>

                            <TouchableOpacity
                                onPress={handleCheckboxPress}
                                value={checked}
                                onValueChange={setChecked}
                            >
                                <View style={[appStyle.checkbox, checked && appStyle.checked]}>
                                    {checked ? (
                                        <Image
                                            source={appIcons.TickIcon} // Replace with your checked icon
                                            style={appStyle.checkedtick}
                                        />
                                    ) : (
                                        <View style={appStyle.uncheckedCircle} />
                                    )}
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View>
                            <Text style={appStyle.policyT}>Accept <Text style={appStyle.policyBT}> T&C, Privacy Policy </Text></Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={appStyle.loginBorder}
                        onPress={() =>{
                            handleSignUp();
                            updateFirestoreUserCount();
                        }
                        }  >
                        <Text style={appStyle.loginB} >SIGNUP</Text>

                    </TouchableOpacity>
                    <Text style={appStyle.alreadyAccT}>Already have an account?</Text>

                    <TouchableOpacity style={appStyle.loginButtonB} onPress={() => navigation.navigate(Login)}  >
                        <Text style={appStyle.loginButtonT} >LOGIN</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        </>
    );
};
export default SignUp;