import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import colors from "../constants/colors";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.HomeScreen}>
            <Text>Home screen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    HomeScreen: {
        flex: 1,
        backgroundColor: colors.neutral95,
        alignItems: "center",
        justifyContent: "center",
    },
});
