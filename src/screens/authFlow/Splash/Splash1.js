import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Splash2 from './Splash2';
import { appStyle } from '../../../services/appStyles/style';
import {
    StatusBar,
}
    from 'react-native';
const Splash1 = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate(Splash2);

        }, 500);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <>
            <StatusBar
                backgroundColor={'white'}
                barStyle={'dark-content'}
            />
            <SafeAreaView style={appStyle.splash1SAV} />
        </>
    );
};
export default Splash1;