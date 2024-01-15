import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/appFlow/Home';
import ChatRoom from '../../screens/appFlow/chatRoom';

const  Stack = createNativeStackNavigator();
const AppNavigation = ()=>{

    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name= "Home" component={Home} />
            <Stack.Screen name= "ChatRoom" component={ChatRoom} />
        </Stack.Navigator>
    );
};
export default AppNavigation;