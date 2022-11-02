import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from "../constants";
import colors from "../constants/colors";

export default function SquareButton(props) {
    const { style, iconName, iconSize, iconFamily, text, onPress } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[style, styles.SquareButton]}
                onPress={onPress}
                activeOpacity={0.6}
            >
                <Icon
                    type={iconFamily}
                    name={iconName}
                    size={iconSize}
                    color={colors.blue400}
                />
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
        width: "43%",
        justifyContent: "center",
        alignContent: "center",
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 20,
    },
    SquareButton: {
        // height: "50%",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.blue400,
        alignItems: "center",
    },
    buttonText: {
        color: colors.neutral30,
        marginTop: 10,
        fontSize: 16,
        fontWeight: "700",
    },
});
