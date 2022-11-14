import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../constants/colors";

export default function PrayerScreen(props) {
    return (
        <ScrollView>
            <SafeAreaView style={styles.PrayerScreen}>
                <Text style={styles.text}>{props.route.params.prayer}</Text>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    PrayerScreen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.white,
    },
    text: {
        marginTop: 50,
        marginRight: 24,
        marginLeft: 24,
        marginBottom: 24,
        fontFamily: "Roboto-Regular",
        fontSize: 18,
    },
});
