import React, { useState } from "react"
import { Image, TouchableOpacity, View } from "react-native"
import { appStyle } from "../../services/appStyles/style"
import { appIcons } from "../../services/assets";

const CheckBox = () => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxPress = () => {
        setChecked(!checked); // Toggle the state of the checkbox
    };

    return (
        <TouchableOpacity onPress={handleCheckboxPress}>
            <View style={[appStyle.checkbox, checked && appStyle.checked]}>
                {checked ? (
                    <Image
                        source={appIcons.TickIcon} // Replace with your checked icon
                        style={appStyle.checkedtick}
                    />
                ) : (
                    <View style={appStyle.uncheckedCircle} />
                )}
            </View>
        </TouchableOpacity>

    )
};
export default CheckBox;