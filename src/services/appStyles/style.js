import { Dimensions, StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth, } from 'react-native-responsive-dimensions';
import { fontFamily } from '../fonts';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const appStyle = StyleSheet.create({

    splash1SAV: {
        flex: 1,
        backgroundColor: 'black'
    },
    splash2SAV: {
        flex: 1,
        backgroundColor: '#F6CD5B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    splash3SAV: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    splash3V: {
        fontSize: responsiveFontSize(3),
        textAlign: 'center',
        marginTop: responsiveHeight(3),
        fontFamily: fontFamily.OxygenBold,
        color: '#111820',
    },
    splash4V: {
        marginLeft: responsiveWidth(26),
        marginRight: responsiveWidth(43),
        textDecorationLine: 'underline',
        borderBottomWidth: 3,
        borderBottomColor: '#F6CD5B',
    },
    splash2BGImage: {
        borderRadius: 300,
        alignSelf: 'center',
        width: responsiveWidth(50),
        height: responsiveHeight(30),
    },
    splash3BGImage: {
        backgroundColor: '#F6CD5B',
        marginTop: responsiveHeight(10),
        width: responsiveWidth(55),
        height: responsiveHeight(12),
        alignSelf: 'center',
    },
    loginSV: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    visibilityButtonV: {
        marginTop: responsiveHeight(3),
        position: 'absolute',
        marginLeft: responsiveWidth(83)
    },
    eyeIcon: {
    },
    loginTV: {
        color: '#222222',
        fontFamily: fontFamily.RobotoRegular,
        backgroundColor: '#F7F7F7',
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(2),
        borderRadius: 15,
        width: responsiveWidth(90),
        height: responsiveHeight(9),
        flexDirection: 'column',
    },
    loginText: {
        fontSize: responsiveFontSize(1.7),
        color: '#444444',
        marginLeft: responsiveWidth(4),
        fontFamily: fontFamily.RobotoRegular,
        marginTop: responsiveHeight(1),
    },
    loginTIV: {
        marginLeft: responsiveWidth(3),
        marginBottom: responsiveHeight(3),
        color: '#444444',
        fontSize: responsiveFontSize(1.9),
        fontFamily: fontFamily.RobotoRegular
    },
    rememberT: {
        color: '#000000',
        marginTop: responsiveHeight(1),
        fontFamily: fontFamily.RobotoRegular,
        marginLeft: responsiveWidth(1.5)
    },
    forgetTV: {
        marginLeft: wp('30%'),
    },
    forgotT: {
        color: '#000000',
        marginTop: responsiveHeight(1),
        fontFamily: fontFamily.RobotoBold,
    },
    checkbox: {
        width: wp('5%'),
        height: responsiveHeight(1.8),
        borderWidth: responsiveWidth(0.5),
        borderRadius: responsiveWidth(3),
        borderColor: '#888',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checked: {
        backgroundColor: '#F6CD5B',
        borderColor: '#F6CD5B',
    },
    checkedtick: {
        width: responsiveWidth(1.6),
        height: responsiveHeight(0.8),
    },
    uncheckedCircle: {
        width: responsiveWidth(2),
        height: responsiveHeight(1),
        borderRadius: responsiveWidth(2), // for circle
        backgroundColor: 'transparent', // Transparent background for the circle
    },
    rememberV: {
        flexDirection: 'row',
        marginTop: responsiveWidth(1),
        paddingLeft: responsiveWidth(7.5)
    },
    loginB: {
        textAlign: 'center',
        fontSize: responsiveFontSize(2.5),
        fontFamily: fontFamily.RobotoBold,
        color: '#FFFFFF',
        marginTop: responsiveHeight(1.5),

    },
    loginBorder: {
        borderRadius: 30,
        backgroundColor: '#363333',
        shadowColor: '#B7B7B780',
        marginLeft: responsiveWidth(13),
        marginRight: responsiveWidth(13),
        marginTop: responsiveHeight(3),
        height: responsiveHeight(8)
    },
    dontAccT: {
        fontSize: responsiveFontSize(2),
        textAlign: 'center',
        justifyContent: 'flex-end',
        marginTop: responsiveHeight(13),
        fontFamily: fontFamily.RobotoRegular,
    },
    createAccB: {
        borderRadius: 30,
        backgroundColor: '#EEEEEE',
        shadowColor: '#B7B7B780',
        marginLeft: responsiveWidth(10),
        marginRight: responsiveWidth(13),
        marginTop: responsiveHeight(1),
    },
    createAccT: {
        fontFamily: fontFamily.RobotoBold,
        fontSize: responsiveFontSize(2),
        textAlign: 'center',
        color: '#222222',
        margin: responsiveHeight(1.8),
    },
    signUpTV: {
        color: '#222222',
        fontFamily: fontFamily.RobotoRegular,
        backgroundColor: '#F7F7F7',
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(2),
        borderRadius: 10,
        width: responsiveWidth(90),
        height: responsiveHeight(9),
    },
    signUpCircleCheckImgV: {
        position: 'absolute',
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    signUpCircleCheckImg: {
        marginTop: responsiveHeight(3),
        marginRight: responsiveWidth(2.7),
    },
    policyT: {
        marginLeft: responsiveWidth(2),
        fontFamily: fontFamily.RobotoRegular,
        color: '#000000'
    },
    policyBT: {
        fontFamily: fontFamily.RobotoBold,
        color: '#000000'
    },
    policyMainV: {
        flex: 1,
        flexDirection: 'row',
        marginTop: responsiveWidth(3),
        paddingLeft: responsiveWidth(7.5)
    },
    doubleImageV: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rememberCirceImage: {
        marginLeft: responsiveWidth(9),
        marginTop: responsiveHeight(0.3)
    },
    signUpText: {
        fontSize: responsiveFontSize(1.7),
        color: '#444444',
        marginLeft: responsiveWidth(4),
        fontFamily: fontFamily.RobotoRegular,
        marginTop: responsiveHeight(1)
    },
    signUpTIV: {
        marginLeft: responsiveWidth(3),
        marginBottom: responsiveHeight(3),
        color: '#444444',
        fontSize: responsiveFontSize(1.9),
        fontFamily: fontFamily.RobotoRegular
    },
    alreadyAccT: {
        fontSize: responsiveFontSize(2),
        textAlign: 'center',
        justifyContent: 'flex-end',
        marginTop: responsiveHeight(4),
        fontFamily: fontFamily.RobotoRegular,
    },
    loginButtonB: {
        borderRadius: 30,
        backgroundColor: '#EEEEEE',
        shadowColor: '#B7B7B780',
        marginLeft: responsiveWidth(10),
        marginRight: responsiveWidth(13),
        marginTop: responsiveHeight(1),
    },
    loginButtonT: {
        fontFamily: fontFamily.RobotoBold,
        fontSize: responsiveFontSize(2),
        textAlign: 'center',
        color: '#222222',
        margin: 14,
    },
    resetPassTV: {
        borderColor: '#EEEEEE',
        height: responsiveHeight(10),
        flexDirection: 'row',
        marginLeft: responsiveWidth(7),
        marginTop: responsiveHeight(5),
    },
    resetPassT: {
        color: '#222222',
        fontSize: responsiveFontSize(2),
        fontFamily: fontFamily.RobotoBold,
        marginLeft: responsiveWidth(20)
    },
    forgetPassIcon: {
        marginTop: responsiveHeight(0.5)
    },
    newPassT: {
        fontSize: responsiveFontSize(3),
        marginLeft: responsiveWidth(10),
        marginRight: responsiveWidth(10),
        fontFamily: fontFamily.RobotoBold,
        color: '#222222',
        textAlign: 'center'
    },
    passResetBtnT: {
        fontFamily: fontFamily.RobotoBold,
        fontSize: responsiveFontSize(1.8),
        textAlign: 'center',
        color: '#FFFFFF',
        margin: 14,
    },
    passResetBtn: {
        borderRadius: 30,
        backgroundColor: '#363333',
        shadowColor: '#B7B7B780',
        marginLeft: responsiveWidth(13),
        marginRight: responsiveWidth(13),
        marginTop: responsiveHeight(5),
    },
    buttonView: {
        flex: 1,
    },
    modalTextV: {
        fontSize: responsiveFontSize(3),
        justifyContent: 'center',
        alignContent: 'center',
        fontFamily: fontFamily.RobotoBold,
        color: '#222222',
        textAlign: 'center',
        marginLeft: responsiveWidth(13),
        marginRight: responsiveWidth(13),
        marginTop: responsiveHeight(2)
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: 'black',
        elevation: 10,
        height: responsiveHeight(10),
        justifyContent: 'center',
        alignContent: 'center',
    },
    restPassModalView: {
        backgroundColor: 'white',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        shadowColor: 'black',
        elevation: 50,
        shadowRadius: 30,
        height: responsiveHeight(38),
        justifyContent: 'center',
        alignContent: 'center',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    backgroundTouchable: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    restPassCenteredView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    resetPassModalImg: {
        alignSelf: 'center',
        height: responsiveHeight(6),
        width: responsiveWidth(12)
    },
    homeSAV: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    homeUpperView: {
        backgroundColor: '#F6CD5B',
        height: responsiveHeight(12)
    },
    homeUpperViewImg: {
        height: responsiveHeight(7),
        width: responsiveWidth(30),
        marginTop: responsiveHeight(3),
        marginLeft: responsiveWidth(3)
    },
    homeLowerView: {
        flex: 1,
    },
    homeText1: {
        color: '#111820',
        fontFamily: fontFamily.OxygenBold,
        textAlign: 'center',
        marginTop: responsiveHeight(5),
        fontSize: responsiveFontSize(2.9),
    },
    homeText2: {
        color: '#111820',
        fontFamily: fontFamily.OxygenBold,
        textAlign: 'center',
        marginTop: responsiveHeight(2),
        fontSize: responsiveFontSize(2.1),
    },
    circleMainView: {
        alignSelf: 'center',
        marginTop: responsiveHeight(8),
    },
    homeEllipseImg: {
        width: responsiveWidth(76),
        height: responsiveHeight(38),
    },
    homecenterimg: {
        width: responsiveWidth(25),
        height: responsiveHeight(13),
        position: 'absolute',
        marginTop: responsiveHeight(13),
        marginLeft: responsiveWidth(26),
    },
    housepartyView: {
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center',
        marginTop: responsiveHeight(-5)
    },
    homeAllImages: {
        width: responsiveWidth(20),
        height: responsiveHeight(10),
    },
    mainSameText: {
        color: '#111820',
        fontFamily: fontFamily.OxygenBold,
        fontSize: responsiveFontSize(1.5),
        position: 'absolute',
        marginTop: responsiveHeight(9),
        alignSelf: 'center',
    },
    kittyChatView: {
        position: 'absolute',
        zIndex: 2,
        marginLeft: responsiveWidth(61),
        marginTop: responsiveHeight(2),
    },
    foodClubView: {
        position: 'absolute',
        zIndex: 3,
        marginLeft: responsiveWidth(65),
        marginTop: responsiveHeight(20),
    },
    birthdayView: {
        position: 'absolute',
        zIndex: 4,
        marginLeft: responsiveWidth(48),
        marginTop: responsiveHeight(32),
    },
    birthdaypartyText: {
        color: '#111820',
        fontFamily: fontFamily.OxygenBold,
        fontSize: responsiveFontSize(1.5),
        marginTop: responsiveHeight(-1)
    },
    raveRoomView: {
        position: 'absolute',
        zIndex: 5,
        marginLeft: responsiveWidth(15),
        marginTop: responsiveHeight(32),
    },
    pineApplePartyView: {
        position: 'absolute',
        zIndex: 6,
        marginTop: responsiveHeight(20),
        marginLeft: responsiveWidth(-7)
    },
    pineApplePartyText: {
        color: '#111820',
        fontFamily: fontFamily.OxygenBold,
        fontSize: responsiveFontSize(1.5),
        marginTop: responsiveHeight(-1),
    },
    FriendsSquadView: {
        position: 'absolute',
        zIndex: 7,
        marginTop: responsiveHeight(2),
        marginLeft: responsiveWidth(-2.7)
    },
    FriendsSquadText: {
        color: '#111820',
        fontFamily: fontFamily.OxygenBold,
        fontSize: responsiveFontSize(1.5),
        marginTop: responsiveHeight(-1),
    },
    modalView: {
        backgroundColor: '#FFFFFF',
        paddingBottom: responsiveHeight(4)
    },
    modalImg: {
        width: responsiveWidth(100),
        height: responsiveHeight(30),
    },
    modalT1: {
        color: '#111820',
        fontFamily: fontFamily.RobotoBold,
        fontSize: responsiveFontSize(3),
        textAlign: 'center',
        marginTop: responsiveHeight(2.5),
    },
    modalT2: {
        color: '#111820',
        fontSize: responsiveFontSize(2),
        textAlign: 'center',
        marginTop: responsiveHeight(1),
    },
    startTalkButton: {
        borderRadius: 30,
        backgroundColor: '#F6CD5B',
        shadowColor: '#B7B7B780',
        marginLeft: responsiveWidth(13),
        marginRight: responsiveWidth(13),
        marginTop: responsiveHeight(3),
    },
    startTalkText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: responsiveFontSize(2.5),
        height: responsiveHeight(7),
        fontFamily: fontFamily.RobotoBold,
        color: '#363333',
    },
    chatSAV: {
        flex: 1,
        backgroundColor: '#F6F5F5',
    },
    chatUpperView: {
        backgroundColor: '#F6CD5B',
        height: responsiveHeight(10),
        flexDirection: 'row',
    },
    arrowBackIcon: {
        marginTop: responsiveHeight(2.7),
        marginLeft: responsiveWidth(5),
        position: 'absolute',
        height: responsiveHeight(4),
        width: responsiveWidth(8)
    },
    chatUpperViewImg: {
        height: responsiveHeight(7),
        width: responsiveWidth(14),
        marginLeft: responsiveWidth(14),
        marginTop: responsiveHeight(1.5)

    },
    chatUpperViewTView: {
        flexDirection: 'column',
        marginLeft: responsiveWidth(3),
        marginTop: responsiveHeight(2.5)
    },
    chatHeadText: {
        fontFamily: fontFamily.OxygenBold,
        fontSize: responsiveFontSize(2),
        color: '#111820',
    },
    chatSmallHeadText: {
        marginLeft: responsiveWidth(0.3),
        fontFamily: fontFamily.RobotoRegular,
        fontSize: responsiveFontSize(1.55),
        color: '#111820',
        opacity: 0.7,
    },
    view: {
        backgroundColor: '#F6F5F5',
    },
    typeChatBorder: {
        borderRadius: 30,
        backgroundColor: '#363333',
        marginLeft: responsiveWidth(7),
        marginRight: responsiveWidth(7),
        flexDirection: 'row',
        marginBottom: responsiveHeight(1.5),
        marginTop: responsiveHeight(1),
    },
    chatTIV: {
        marginLeft: responsiveWidth(3),
        color: 'white',
        fontSize: responsiveFontSize(1.5),
        fontFamily: fontFamily.RobotoRegular,
        opacity: 0.5,
        paddingRight: responsiveWidth(10)
    },
    // icon outer circle
    msgSendIconView: {
        backgroundColor: '#F6CD5B',
        borderRadius: 100,
        height: responsiveHeight(6.5),
        width: responsiveWidth(13),
        marginLeft: responsiveWidth(27),
        position: 'absolute',
    },
    msgSendIcon: {
        height: responsiveHeight(3.2),
        width: responsiveWidth(6.4),
        marginTop: responsiveHeight(1.8),
        marginLeft: responsiveWidth(3.2),
    },
    container: {
        flex: 1,
        padding: 10,
    },
    messageText: {
        fontSize: responsiveFontSize(2.5),
        color: '#111820',
        fontFamily: fontFamily.RobotoRegular,
        paddingLeft: responsiveWidth(1.5),
        paddingRight: responsiveWidth(3)
    },
    timestamp: {
        fontSize: responsiveFontSize(1.2),
        color: 'black',
        textAlign: 'right',
        marginRight: responsiveWidth(3),
    },
    senderMsgContainerView: {
        backgroundColor: '#F6CD5B',
        borderRadius: 20,
        padding: responsiveHeight(1),
        marginVertical: responsiveHeight(2),
        maxWidth: '80%',
        alignSelf: 'flex-end',
    },
    receiverMsgContainerView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: responsiveHeight(1),
        marginVertical: responsiveHeight(2),
        maxWidth: '80%',
        alignSelf: 'flex-start',
    },

})