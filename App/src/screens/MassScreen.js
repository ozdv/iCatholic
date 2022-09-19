import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import colors from "../constants/colors";

export default function MassScreen() {
    return (
        <SafeAreaView style={styles.MassScreen}>
            <Text>Mass screen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    MassScreen: {
        flex: 1,
        backgroundColor: colors.neutral95,
        alignItems: "center",
        justifyContent: "center",
    },
});
