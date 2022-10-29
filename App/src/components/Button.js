import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

export default function Button(props) {
    const { style, disabled, text, onPress } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    style,
                    styles.button,
                    disabled
                        ? { backgroundColor: colors.neutral80 }
                        : { backgroundColor: colors.blue400 },
                ]}
                onPress={disabled ? () => {} : onPress}
                activeOpacity={0.6}
                disabled={disabled}
            >
                <Text
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}
                    style={styles.buttonText}
                >
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 20,
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "700",
    },
    button: {
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
});
