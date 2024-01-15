import React, { useEffect } from 'react';
import { appStyle } from '../../../services/appStyles/style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Splash4 from './Splash4';
import {
    StatusBar,
    Text,
    Image
}
    from 'react-native';
import { appIcons } from '../../../services/assets';

const Splash3 = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate(Splash4);

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

            </SafeAreaView>
        </>
    );
};
export default Splash3;