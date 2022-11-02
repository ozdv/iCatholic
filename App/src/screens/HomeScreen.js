import React, { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, UserLogo } from "../components";
import SquareButton from "../components/SquareButton";
import { colors } from "../constants";
import { hour } from "../helpers";
import { featureList } from "../constants/featureList";

export default function HomeScreen({ navigation }) {
    // const welcomeMessageFunction = (hour) => {
    //     if (hour <= 11) {
    //         return "Good morning";
    //     } else if (hour <= 16) {
    //         return "Good afternoon";
    //     } else {
    //         return "Good evening";
    //     }
    // };

    // const welcomeMessage = welcomeMessageFunction(hour);

    return (
        <ScrollView style={styles.ScrollView}>
            <SafeAreaView style={styles.HomeScreen}>
                {/* <UserLogo />
                <Text style={styles.welcomeText}>{welcomeMessage} Cam!</Text>
                <Text style={styles.quoteTexts}>
                    "The worst prison would be a closed heart."
                </Text>
                <Text style={styles.quoteAuthor}>- St. John Paul II</Text>
                <Button
                    text={"Examen"}
                    onPress={() => navigation.navigate("Examen")}
                /> */}
                <View style={styles.options}>
                    {featureList.map((screen, index) => (
                        <SquareButton
                            key={index}
                            text={screen.name}
                            iconName={screen.iconName}
                            iconFamily={screen.iconFamily}
                            iconSize={screen.size}
                            onPress={() =>
                                navigation.navigate(`${screen.screenName}`)
                            }
                        />
                    ))}
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    ScrollView: {
        backgroundColor: colors.neutral98,
    },
    HomeScreen: {
        marginTop: 100,
        flexDirection: "column",
        marginRight: 20,
        marginLeft: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    options: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
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
