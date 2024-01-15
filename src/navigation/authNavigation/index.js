import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash1 from '../../screens/authFlow/Splash/Splash1';
import Splash2 from '../../screens/authFlow/Splash/Splash2';
import Splash3 from '../../screens/authFlow/Splash/Splash3';
import Splash4 from '../../screens/authFlow/Splash/Splash4';
import Login from '../../screens/authFlow/Login';
import SignUp from '../../screens/authFlow/SignUp';
import ForgetPassword from '../../screens/authFlow/ForgetPassword';

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name= "Splash1" component={Splash1} />
            <Stack.Screen name= "Splash2" component={Splash2} />
            <Stack.Screen name= "Splash3" component={Splash3} />
            <Stack.Screen name= "Splash4" component={Splash4} />
            <Stack.Screen name= "Login" component={Login} />
            <Stack.Screen name= "SignUp" component={SignUp} />
            <Stack.Screen name= "ForgetPassword" component={ForgetPassword} />
        </Stack.Navigator>
    )
}
export default AuthNavigation