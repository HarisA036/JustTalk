// // import React, { useState } from "react"
// // import { appStyle } from "../../services/appStyles/style"
// // import {
// //     Text,
// //     View,
// //     Image,
// //     TouchableOpacity,
// //     Modal
// // }
// //     from "react-native"
// // const CustomModal = ( open, onclose, picture) => {

// //     const [showModal, setShowModal] = useState(false);

// //     return (

// //         <View style={appStyle.viewMain}>
// //             <Modal
// //                 transparent={true}
// //                 visible={open}
// //                 animationType='fade'
// //             >
// //                 <View style={appStyle.centeredView}>
// //                     <View style={appStyle.housePartyModalView}>
// //                         <Image
// //                             style={appStyle.housepartymodalImg}
// //                             source={picture}

// //                         />
// //                         <Text style={appStyle.housePartyModalT1}>House Party</Text>
// //                         <Text style={appStyle.housePartyModalT2}>136 members joined the room</Text>

// //                         <TouchableOpacity
// //                             style={appStyle.startTakBorder}
// //                             onPress={() => onclose()}  >
// //                             <Text style={appStyle.startTakButton} >START TALK</Text>

// //                         </TouchableOpacity>

// //                     </View>
// //                 </View>
// //             </Modal>
// //         </View>

// //     )
// // }
// // export default CustomModal;


// // Create a ChatRoomModal component
// const ChatRoomModal = ({ show, closeModal, navigation, title, members, icon, updateMembers }) => {
//     return (
//         <Modal
//             transparent={true}
//             visible={show}
//             animationType='slide'
//             onRequestClose={closeModal}
//         >
//             <View style={appStyle.modalBackground}>
//                 <TouchableOpacity
//                     style={appStyle.backgroundTouchable}
//                     onPress={closeModal}
//                 >
//                 </TouchableOpacity>
//                 <View style={appStyle.centeredView}>
//                     <View style={appStyle.modalView}>
//                         <Image
//                             style={appStyle.modalImg}
//                             source={icon}
//                         />
//                         <Text style={appStyle.modalT1}>{title}</Text>
//                         <Text style={appStyle.modalT2}>{`${members} members joined the room`}</Text>

//                         <TouchableOpacity
//                             style={appStyle.startTalkButton}
//                             onPress={() => navigation.navigate('ChatRoom', {
//                                 picture: icon,
//                                 headText: title,
//                                 members: members,
//                                 updateMembers: updateMembers,
//                             })}
//                         >
//                             <Text style={appStyle.startTalkText} >START TALK</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>
//         </Modal>
//     );
// };

// // In your Home component, use the ChatRoomModal component for each chat room
// // ...

// {/* HOUSE PARTY MODAL */}
// <ChatRoomModal
//     show={showHouseModal}
//     closeModal={() => setShowHouseModal(false)}
//     navigation={navigation}
//     title="House Party"
//     members={housePartyMembers}
//     icon={appIcons.HouseModal}
//     updateMembers={setHousePartyMembers}
// />

// {/* KITTY CHAT MODAL */}
// <ChatRoomModal
//     show={showChatModal}
//     closeModal={() => setShowChatModal(false)}
//     navigation={navigation}
//     title="Kitty Chats"
//     members={chatMembers}
//     icon={appIcons.ChatModal}
//     updateMembers={setChatMembers}
// />
// // Repeat this pattern for other chat rooms...
