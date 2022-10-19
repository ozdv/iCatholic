import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from "../constants";
import colors from "../constants/colors";

export default function ItemList(props) {
    const { label, onPress, style } = props;

    return (
        <View style={[styles.container, props.style]}>
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.6}
                style={styles.ItemList}
            >
                <Text
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}
                    style={styles.text}
                >
                    {label}
                </Text>
                <Icon
                    type="ionicon"
                    name="chevron-forward"
                    size={20}
                    color={colors.neutral30}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignContent: "center",
        height: 40,
    },
    ItemList: {
        justifyContent: "space-between",
        alignContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        marginLeft: 20,
        fontSize: 20,
        color: colors.neutral30,

        fontFamily: "Roboto-Medium",
    },
    icon: {
        marginRight: 16,
    },
});
