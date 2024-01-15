import React, { useEffect } from 'react';
import { appStyle } from '../../../services/appStyles/style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Splash3 from './Splash3';
import {
    Image,
    StatusBar,
}
    from 'react-native';
import { appIcons } from '../../../services/assets';
const Splash2 = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate(Splash3);

        }, 500);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <>
            <StatusBar
                backgroundColor={'rgba(246, 205, 91, 1)'}
                barStyle={'dark-content'}
            />
            
            <SafeAreaView style={appStyle.splash2SAV}>
            
                
                <Image
                style={appStyle.splash2BGImage}
                source={appIcons.Splash2BGImg}
                />
            
            </SafeAreaView>
            
        </>
    );
};
export default Splash2;