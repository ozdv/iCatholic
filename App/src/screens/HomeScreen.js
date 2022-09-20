import React from "react";
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import UserLogo from "../components/UserLogo";

export default function HomeScreen() {
    return (
        <ScrollView centerContent={true} style={styles.ScrollView}>
            <SafeAreaView style={styles.HomeScreen}>
                <UserLogo />
                <Text style={styles.welcomeText}>Good Morning Cam!</Text>
                <Text style={styles.quoteTexts}>
                    "The worst prison would be a closed heart."
                </Text>
                <Text style={styles.quoteAuthor}>- St. John Paul II</Text>
                <Card text={"Daily Mass Readings"} />
                <Card text={"Examination of Conscience"} />
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    HomeScreen: {
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "column",
    },

    welcomeText: {
        color: colors.neutral30,
        margin: 10,
        fontSize: 20,
        textAlign: "center",
    },
    quoteTexts: {
        color: colors.neutral30,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        fontSize: 28,
        textAlign: "center",
        fontStyle: "italic",
        textDecorationColor: colors.neutral80,
    },
    quoteAuthor: {
        color: colors.neutral30,
        fontSize: 28,
        textAlign: "center",
    },
});
