import React, { useEffect } from 'react';
import { appStyle } from '../../../services/appStyles/style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from '../Login';
import {
    StatusBar,
    Text,
    View,
    Image
}
    from 'react-native';
import { appIcons } from '../../../services/assets';


const Splash4 = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate(Login);

        }, 500);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <>
            <StatusBar
                backgroundColor={'white'}
                barStyle={'dark-content'}
            />
            <SafeAreaView style={appStyle.splash3SAV}>
                <Image
                    style={appStyle.splash3BGImage}
                    source={appIcons.Splash3Img}
                    
                />

                <Text style={appStyle.splash3V}>Welcome to Login!</Text>

                <View style={appStyle.splash4V}>
                </View>

            </SafeAreaView>
        </>
    );
};
export default Splash4