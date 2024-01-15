import React, { useState } from 'react';
import { Alert, Image, Modal, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { appStyle } from '../../../services/appStyles/style';
import Login from '../Login';
import { appIcons } from '../../../services/assets';
import auth from '@react-native-firebase/auth';

const ForgetPassword = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleResetPassword = async () => {
        try {
          await auth().sendPasswordResetEmail(email);
          setShowModal(true);
        } catch (error) {
            Alert.alert('Error', 'Invalid email. Please try again.');
        }
      };

    return (
        <>
            <StatusBar
                backgroundColor={'white'}
                barStyle={'dark-content'}
            />
            <SafeAreaView style={appStyle.splash3SAV} >
                <View style={appStyle.resetPassTV}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate(Login)}>
                        <Image
                            style={appStyle.forgetPassIcon}
                            source={appIcons.ArrowBackIcon}
                        />
                    </TouchableOpacity>
                    <Text style={appStyle.resetPassT}>Reset Your Password</Text>
                </View>

                <Text style={appStyle.newPassT}>Enter your email to reset your password</Text>

                <View style={[appStyle.loginTV, { marginTop: responsiveScreenHeight(4) }]} >
                    <Text style={appStyle.loginText}>Email</Text>

                    <TextInput
                        style={appStyle.loginTIV}
                        placeholder='johndoe@email.com'
                        placeholderTextColor={'#222222'}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                </View>
                <TouchableOpacity style={appStyle.passResetBtn}
                    onPress={() =>  handleResetPassword() } >
                    <Text style={appStyle.passResetBtnT} >SEND PASSWORD RESET LINK</Text>
                </TouchableOpacity>
                
                <View >
                    <Modal
                        transparent={true}
                        visible={showModal}
                        animationType='fade'
                    >
                        <View style={appStyle.modalBackground}>
                            <TouchableOpacity
                                style={appStyle.backgroundTouchable}
                                onPress={handleCloseModal}
                            >
                            </TouchableOpacity>
                            <View style={appStyle.restPassCenteredView}>
                                <View style={appStyle.restPassModalView}>
                                    <Image
                                        style={appStyle.resetPassModalImg}
                                        source={appIcons.CheckCircle2xIcon}
                                    />
                                    <Text style={appStyle.modalTextV}>Password reset link sent to your email</Text>
                                    <TouchableOpacity
                                        style={appStyle.loginBorder}
                                        onPress={() => navigation.navigate(Login)}  >
                                        <Text style={appStyle.loginB} >CONTINUE</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </SafeAreaView>
        </>
    );
};
export default ForgetPassword;