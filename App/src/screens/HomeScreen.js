import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import { Button, UserLogo } from "../components";
import { colors } from "../constants";
import { getAuth, signOut } from "firebase/auth";
import { hour } from "../helpers";

export default function HomeScreen({ navigation }) {
    const welcomeMessageFunction = (hour) => {
        if (hour <= 11) {
            return "Good morning";
        } else if (hour <= 16) {
            return "Good afternoon";
        } else {
            return "Good evening";
        }
    };

    const welcomeMessage = welcomeMessageFunction(hour);
    const auth = getAuth();

    return (
        <ScrollView centerContent={true} style={styles.ScrollView}>
            <SafeAreaView style={styles.HomeScreen}>
                <UserLogo />
                <Text style={styles.welcomeText}>{welcomeMessage} Cam!</Text>
                <Text style={styles.quoteTexts}>
                    "The worst prison would be a closed heart."
                </Text>
                <Text style={styles.quoteAuthor}>- St. John Paul II</Text>
                <Button
                    text={"Login"}
                    onPress={() => navigation.navigate("Login")}
                />
                <Button text={"Sign out"} onPress={() => signOut(auth)} />
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
