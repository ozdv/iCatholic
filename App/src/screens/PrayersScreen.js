import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import colors from "../constants/colors";

export default function PrayersScreen() {
    return (
        <SafeAreaView style={styles.PrayersScreen}>
            <Text>Prayer screen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    PrayersScreen: {
        flex: 1,
        backgroundColor: colors.neutral95,
        alignItems: "center",
        justifyContent: "center",
    },
});
