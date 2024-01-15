import React, { useState } from 'react';
import { Image, Modal, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appStyle } from '../../../services/appStyles/style';
import { appIcons } from '../../../services/assets';

const Home = ({ navigation }) => {

    const [showHouseModal, setShowHouseModal] = useState(false);
    const [showChatModal, setShowChatModal] = useState(false);
    const [showFoodModal, setShowFoodModal] = useState(false);
    const [showBirthdayModal, setShowBirthdayModal] = useState(false);
    const [showRaveModal, setShowRaveModal] = useState(false);
    const [showPineappleModal, setShowPineappleModal] = useState(false);
    const [showFriendsModal, setShowFriendsModal] = useState(false);

    const handleCloseModal = () => {
        setShowHouseModal(false);
        setShowChatModal(false);
        setShowFoodModal(false);
        setShowBirthdayModal(false);
        setShowRaveModal(false);
        setShowPineappleModal(false);
        setShowFriendsModal(false);
    };

    return (
        <>
            <StatusBar
                backgroundColor={'#F6CD5B'}
                barStyle={'dark-content'}
            />
            <SafeAreaView style={appStyle.homeSAV}>
                <View style={appStyle.homeUpperView}>
                    <Image
                        style={appStyle.homeUpperViewImg}
                        source={appIcons.HomeImg2x}
                    />
                </View>
                <View style={appStyle.homeLowerView}>
                    <Text style={appStyle.homeText1}>These Chatrooms, You Bet!</Text>
                    <Text style={appStyle.homeText2}>Join Any Room Now</Text>
                    <View>
                        <View style={appStyle.circleMainView}>
                            <Image
                                style={appStyle.homeEllipseImg}
                                source={appIcons.Ellipse}
                            />
                            <Image
                                source={appIcons.HomeCenterImg}
                                style={appStyle.homecenterimg}
                            />

                            {/* HOUSE PARTY VIEW */}
                            <View
                                style={appStyle.housepartyView}>
                                <TouchableOpacity
                                    onPress={() => setShowHouseModal(true)}>
                                    <Image
                                        source={appIcons.House}
                                        style={appStyle.homeAllImages}
                                    />
                                </TouchableOpacity>

                                <Text style={appStyle.mainSameText}>House Party</Text>
                            </View>


                            {/* KITTY CHATS VIEW */}

                            <View
                                style={appStyle.kittyChatView}>
                                <TouchableOpacity
                                    onPress={() => setShowChatModal(true)}>
                                    <Image
                                        source={appIcons.Chat}
                                        style={appStyle.homeAllImages}
                                    />
                                </TouchableOpacity>

                                <Text style={appStyle.mainSameText}>Kitty Chats</Text>
                            </View>

                            {/* FOOD CLUB VIEW */}

                            <View
                                style={appStyle.foodClubView}>
                                <TouchableOpacity
                                    onPress={() => setShowFoodModal(true)}>
                                    <Image
                                        source={appIcons.Food}
                                        style={appStyle.homeAllImages}
                                    />
                                </TouchableOpacity>

                                <Text style={appStyle.mainSameText}>Food Club</Text>
                            </View>

                            {/* BIRTHDAY PARTY VIEW */}

                            <View
                                style={appStyle.birthdayView}>
                                <TouchableOpacity
                                    onPress={() => setShowBirthdayModal(true)}>
                                    <Image
                                        source={appIcons.Birthday}
                                        style={appStyle.homeAllImages}
                                    />
                                </TouchableOpacity>

                                <Text style={appStyle.birthdaypartyText}>Birthday Party</Text>
                            </View>

                            {/* RAVE ROOM VIEW */}

                            <View
                                style={appStyle.raveRoomView}>
                                <TouchableOpacity
                                    onPress={() => setShowRaveModal(true)}>
                                    <Image
                                        source={appIcons.RaveRoom}
                                        style={appStyle.homeAllImages}
                                    />
                                </TouchableOpacity>

                                <Text style={appStyle.mainSameText}>Rave Room</Text>
                            </View>

                            {/* PINEAPPLE PARTY VIEW */}

                            <View
                                style={appStyle.pineApplePartyView}>
                                <TouchableOpacity
                                    onPress={() => setShowPineappleModal(true)}>
                                    <Image
                                        source={appIcons.Pineapple}
                                        style={appStyle.homeAllImages}
                                    />
                                </TouchableOpacity>

                                <Text style={appStyle.pineApplePartyText}>Pineapple Party</Text>
                            </View>


                            {/* FRIENDS SQUAD VIEW */}
                            <View
                                style={appStyle.FriendsSquadView}>
                                <TouchableOpacity
                                    onPress={() => setShowFriendsModal(true)}>
                                    <Image
                                        source={appIcons.Friend}
                                        style={appStyle.homeAllImages}
                                    />
                                </TouchableOpacity>

                                <Text style={appStyle.FriendsSquadText}>Friends Squad</Text>
                            </View>

                            {/* HOUSE PARTY MODAL */}

                            <View >
                                <Modal
                                    transparent={true}
                                    visible={showHouseModal}
                                    animationType='slide'
                                    onRequestClose={handleCloseModal}
                                >
                                    <View style={appStyle.modalBackground}>
                                        <TouchableOpacity
                                            style={appStyle.backgroundTouchable}
                                            onPress={handleCloseModal}
                                        >
                                        </TouchableOpacity>
                                        <View style={appStyle.centeredView}>
                                            <View style={appStyle.modalView}>
                                                <Image
                                                    style={appStyle.modalImg}
                                                    source={appIcons.HouseModal}
                                                />
                                                <Text style={appStyle.modalT1}>House Party</Text>
                                                <TouchableOpacity
                                                    style={appStyle.startTalkButton}
                                                    onPress={() => navigation.navigate('ChatRoom', {
                                                        picture: appIcons.House,
                                                        headText: "House Party",
                                                    })}>


                                                    <Text style={appStyle.startTalkText} >START TALK</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                    </View>
                                </Modal>
                            </View>

                            {/* KITTY CHAT MODAL */}

                            <View >
                                <Modal
                                    transparent={true}
                                    visible={showChatModal}
                                    animationType='slide'
                                    onRequestClose={handleCloseModal}
                                >
                                    <View style={appStyle.modalBackground}>
                                        <TouchableOpacity
                                            style={appStyle.backgroundTouchable}
                                            onPress={handleCloseModal}
                                        >
                                        </TouchableOpacity>
                                        <View style={appStyle.centeredView}>
                                            <View style={appStyle.modalView}>
                                                <Image
                                                    style={appStyle.modalImg}
                                                    source={appIcons.ChatModal}
                                                />
                                                <Text style={appStyle.modalT1}>Kitty Chats</Text>
                                                <TouchableOpacity
                                                    style={appStyle.startTalkButton}
                                                    onPress={() => navigation.navigate('ChatRoom', {
                                                        picture: appIcons.Chat,
                                                        headText: "Kitty Chats",
                                                    })}>
                                                    <Text style={appStyle.startTalkText} >START TALK</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                    </View>
                                </Modal>
                            </View>


                            {/* FOOD CLUB MODAL */}

                            <View >
                                <Modal
                                    transparent={true}
                                    visible={showFoodModal}
                                    animationType='slide'
                                    onRequestClose={handleCloseModal}
                                >
                                    <View style={appStyle.modalBackground}>
                                        <TouchableOpacity
                                            style={appStyle.backgroundTouchable}
                                            onPress={handleCloseModal}
                                        >
                                        </TouchableOpacity>
                                        <View style={appStyle.centeredView}>
                                            <View style={appStyle.modalView}>
                                                <Image
                                                    style={appStyle.modalImg}
                                                    source={appIcons.FoodModal}
                                                />
                                                <Text style={appStyle.modalT1}>Food Club</Text>
                                                <TouchableOpacity
                                                    style={appStyle.startTalkButton}
                                                    onPress={() => navigation.navigate('ChatRoom', {
                                                        picture: appIcons.Food,
                                                        headText: "Food Club",
                                                    })}>
                                                    <Text style={appStyle.startTalkText} >START TALK</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                    </View>
                                </Modal>
                            </View>


                            {/* BIRTHDAY PARTY MODAL */}

                            <View >
                                <Modal
                                    transparent={true}
                                    visible={showBirthdayModal}
                                    animationType='slide'
                                    onRequestClose={handleCloseModal}
                                >
                                    <View style={appStyle.modalBackground}>
                                        <TouchableOpacity
                                            style={appStyle.backgroundTouchable}
                                            onPress={handleCloseModal}
                                        >
                                        </TouchableOpacity>
                                        <View style={appStyle.centeredView}>
                                            <View style={appStyle.modalView}>
                                                <Image
                                                    style={appStyle.modalImg}
                                                    source={appIcons.BirthdayModal}
                                                />
                                                <Text style={appStyle.modalT1}>Birthday Party</Text>
                                                <TouchableOpacity
                                                    style={appStyle.startTalkButton}
                                                    onPress={() => navigation.navigate('ChatRoom', {
                                                        picture: appIcons.Birthday,
                                                        headText: "Birthday Party",
                                                    })}>
                                                    <Text style={appStyle.startTalkText} >START TALK</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                    </View>
                                </Modal>
                            </View>


                            {/* RAVE ROOM MODAL */}
                            <View >
                                <Modal
                                    transparent={true}
                                    visible={showRaveModal}
                                    animationType='slide'
                                    onRequestClose={handleCloseModal}
                                >
                                    <View style={appStyle.modalBackground}>
                                        <TouchableOpacity
                                            style={appStyle.backgroundTouchable}
                                            onPress={handleCloseModal}
                                        >
                                        </TouchableOpacity>
                                        <View style={appStyle.centeredView}>
                                            <View style={appStyle.modalView}>
                                                <Image
                                                    style={appStyle.modalImg}
                                                    source={appIcons.RaveModal}
                                                />
                                                <Text style={appStyle.modalT1}>Rave Room</Text>
                                                <TouchableOpacity
                                                    style={appStyle.startTalkButton}
                                                    onPress={() => navigation.navigate('ChatRoom', {
                                                        picture: appIcons.RaveRoom,
                                                        headText: "Rave Room",
                                                    })}>
                                                    <Text style={appStyle.startTalkText} >START TALK</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                    </View>
                                </Modal>
                            </View>


                            {/* Pineapple Party Modal */}

                            <View >
                                <Modal
                                    transparent={true}
                                    visible={showPineappleModal}
                                    animationType='slide'
                                    onRequestClose={handleCloseModal}
                                >
                                    <View style={appStyle.modalBackground}>
                                        <TouchableOpacity
                                            style={appStyle.backgroundTouchable}
                                            onPress={handleCloseModal}
                                        >
                                        </TouchableOpacity>
                                        <View style={appStyle.centeredView}>
                                            <View style={appStyle.modalView}>
                                                <Image
                                                    style={appStyle.modalImg}
                                                    source={appIcons.PineappleModal}
                                                />
                                                <Text style={appStyle.modalT1}>Pineapple Party</Text>
                                                <TouchableOpacity
                                                    style={appStyle.startTalkButton}
                                                    onPress={() => navigation.navigate('ChatRoom', {
                                                        picture: appIcons.Pineapple,
                                                        headText: "Pineapple Party",
                                                    })}>
                                                    <Text style={appStyle.startTalkText} >START TALK</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                    </View>
                                </Modal>
                            </View>


                            {/* FRIENDS SQUAD MODAL */}

                            <View >
                                <Modal
                                    transparent={true}
                                    visible={showFriendsModal}
                                    animationType='slide'
                                    onRequestClose={handleCloseModal}
                                >
                                    <View style={appStyle.modalBackground}>
                                        <TouchableOpacity
                                            style={appStyle.backgroundTouchable}
                                            onPress={handleCloseModal}
                                        >
                                        </TouchableOpacity>
                                        <View style={appStyle.centeredView}>
                                            <View style={appStyle.modalView}>
                                                <Image
                                                    style={appStyle.modalImg}
                                                    source={appIcons.FirendModal}
                                                />
                                                <Text style={appStyle.modalT1}>Friends Squad</Text>
                                                <TouchableOpacity
                                                    style={appStyle.startTalkButton}
                                                    onPress={() => navigation.navigate('ChatRoom', {
                                                        picture: appIcons.Friend,
                                                        headText: "Friends Squad",
                                                    })}>
                                                    <Text style={appStyle.startTalkText} >START TALK</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};
export default Home;