import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import colors from "../constants/colors";

export default function ExamenScreen() {
    return (
        <SafeAreaView style={styles.ExamenScreen}>
            <Text>Examen screen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    ExamenScreen: {
        flex: 1,
        backgroundColor: colors.neutral95,
        alignItems: "center",
        justifyContent: "center",
    },
});
