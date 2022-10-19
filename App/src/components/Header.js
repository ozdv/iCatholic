import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants";

export default function Header(props) {
    return (
        <View style={styles.Header}>
            <Text style={styles.HeaderTitle}>{props.title}</Text>
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
});
