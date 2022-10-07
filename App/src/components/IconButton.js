import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "../constants";

export default function IconButton(props) {
    const { size, name, iconStyle, buttonStyle, type, color, onPress } = props;
    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}
            activeOpacity={0.6}
        >
            <Icon
                type={type}
                name={name}
                size={size}
                color={color}
                style={iconStyle}
            />
        </TouchableOpacity>
    );
}
