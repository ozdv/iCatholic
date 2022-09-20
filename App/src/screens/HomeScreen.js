import React from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    ScrollView,
    Alert,
} from "react-native";
import { Button, UserLogo } from "../components";
import { colors } from "../constants";

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
                <Button
                    text={"Daily Mass Readings"}
                    onPress={() => Alert.alert("pressed!")}
                />
                <Button
                    text={"Examination of Conscience"}
                    onPress={() => Alert.alert("pressed!")}
                />
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
        fontFamily: "Roboto-Regular",
    },
    quoteTexts: {
        color: colors.neutral30,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        fontSize: 28,
        textAlign: "center",
        fontFamily: "Roboto-Medium",
    },
    quoteAuthor: {
        color: colors.neutral30,
        fontFamily: "Roboto-Regular",
        fontSize: 28,
        textAlign: "center",
    },
});
