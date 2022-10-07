import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, Icon } from "../constants";
import IconButton from "./IconButton";

export default function Header(props) {
    return (
        <View style={styles.Header}>
            <Text style={styles.HeaderTitle}>{props.children}</Text>

            <IconButton
                color={colors.neutral30}
                type="ionicon"
                name="ios-menu"
                size={38}
                iconStyle={styles.menuIcon}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    Header: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
    },
    HeaderTitle: {
        fontSize: 40,
        textAlign: "left",
        color: colors.blue400,
        fontFamily: "Roboto-Bold",
    },
    menuIcon: {
        marginRight: 32,
    },
});
