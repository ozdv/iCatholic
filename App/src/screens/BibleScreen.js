import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import colors from "../constants/colors";

export default function BibleScreen() {
    return (
        <SafeAreaView style={styles.BibleScreen}>
            <Text>Bible screen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    BibleScreen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.neutral98,
    },
});
