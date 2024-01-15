import React, { useEffect, useState } from 'react';
import { appStyle } from '../../../services/appStyles/style';
import { Alert, FlatList, Image, KeyboardAvoidingView, Platform, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from '../Home';
import { appIcons } from '../../../services/assets';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import firestore from '@react-native-firebase/firestore';
const ChatRoom = ({ navigation, route }) => {

    const { picture, headText } = route.params;
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const chatRoomRef = firestore().collection(headText.toLowerCase());
    const [userCount, setUserCount] = useState(0); 


    useEffect(() => {
        const unsubscribe = chatRoomRef.orderBy('timestamp').onSnapshot(
            (snapshot) => {
                if (snapshot && snapshot.docs) {
                    const updatedMessages = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setMessages(updatedMessages);
                }
            },
            (error) => {
                Alert.alert('Error', 'Fetching messages:');
            }
        );

        return () => {
            unsubscribe();
        };
    }, [chatRoomRef]);

    const handleSend = async () => {
        if (newMessage.trim() === '') return;

        const timestamp = new Date();

        try {
            await chatRoomRef.add({
                user: 'sender',
                text: newMessage,
                timestamp,
            });

            setNewMessage('');
        } catch (error) {
            Alert.alert('Error', 'Sending message:');
        }
    };

    const renderTimestamp = (timestamp) => {

        if (!timestamp) return ''; // handle undefined timestamp
        // Check if timestamp is a Firestore timestamp
        if (timestamp.toDate) {
            timestamp = timestamp.toDate(); // Convert Firestore timestamp to JavaScript Date object
        }

        const messageDate = new Date(timestamp);
        const currentDate = new Date();

        // Check if the message was sent more than a day ago
        if (currentDate - messageDate > 24 * 60 * 60 * 1000) {
            return `${messageDate.toLocaleDateString()} ${messageDate.toLocaleTimeString()}`;
        } else {
            return messageDate.toLocaleTimeString();
        }
    };

    return (

        // <KeyboardAvoidingView
        //     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        //     style={{ flex: 1 }}
        // >
            <>
                <StatusBar
                    backgroundColor={'#F6CD5B'}
                    barStyle={'dark-content'}
                />
                <SafeAreaView style={appStyle.chatSAV}>
                    <View style={appStyle.chatUpperView}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(Home)}>
                            <Image
                                style={appStyle.arrowBackIcon}
                                source={appIcons.BackIcon}
                            />
                        </TouchableOpacity>
                        <Image
                            style={appStyle.chatUpperViewImg}
                            source={picture}
                        />
                        <View style={appStyle.chatUpperViewTView}>
                            <Text style={appStyle.chatHeadText}>{headText}</Text>
                        </View>
                    </View>
                    <View style={appStyle.container}>
                        <FlatList
                            data={messages}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <View
                                    style={item.user === 'sender' ?
                                        appStyle.senderMsgContainerView :
                                        appStyle.receiverMsgContainerView
                                    }>
                                    <Text style={appStyle.messageText}>{item.text}</Text>
                                    <Text style={appStyle.timestamp}>{renderTimestamp(item.timestamp)}</Text>
                                </View>
                            )}
                        />
                        <View style={appStyle.view}>
                            <View style={appStyle.typeChatBorder}>
                                <TextInput
                                    style={appStyle.chatTIV}
                                    placeholder='Type your message here...                   '
                                    placeholderTextColor={'#FFFFFF'}
                                    value={newMessage}
                                    onChangeText={(text) => setNewMessage(text)}
                                />
                                <TouchableOpacity
                                    onPress={handleSend}
                                    style={{ position: 'absolute', marginLeft: responsiveScreenWidth(45) }}
                                >
                                    <View style={appStyle.msgSendIconView}>
                                        <Image
                                            style={appStyle.msgSendIcon}
                                            source={appIcons.SendMsgIcon}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </>
        // </KeyboardAvoidingView>
    );
};
export default ChatRoom;