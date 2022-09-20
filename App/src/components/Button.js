import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

export default function Button(props) {
    const { height, width, disabled, color, text, onPress } = props;
    return (
        <TouchableOpacity
            style={styles(props).Button}
            onPress={onPress}
            activeOpacity={0.6}
        >
            <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles(props).text}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = (props) =>
    StyleSheet.create({
        Button: {
            flex: 1,
            justifyContent: "center",
            marginTop: 20,
            minHeight: 100,
            marginRight: 20,
            marginLeft: 20,
            width: props.width ? props.width : "90%",
            maxHeight: props.height ? props.height : "20%",
            backgroundColor: props.color ? props.color : colors.white,
            borderColor: colors.neutral90,
            borderWidth: 1,
            shadowRadius: 8,
            shadowOpacity: 0.2,
            shadowColor: colors.neutral40,
            borderRadius: 10,
        },
        text: {
            color: colors.neutral30,
            fontFamily: "Roboto-Regular",
            textAlignVertical: "center",
            textAlign: "center",
            fontSize: 24,
        },
    });
