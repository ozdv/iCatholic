import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import colors from "../constants/colors";

export default function MoreScreen() {
    return (
        <SafeAreaView style={styles.MoreScreen}>
            <Text>More screen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    MoreScreen: {
        flex: 1,
        backgroundColor: colors.neutral95,
        alignItems: "center",
        justifyContent: "center",
    },
});
