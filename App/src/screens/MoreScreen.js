import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import { date, dateTime, time, hour } from "../helpers";
import colors from "../constants/colors";

export default function MoreScreen() {
    const window = Dimensions.get("window");
    const screen = Dimensions.get("screen");

    const [dimensions, setDimensions] = useState({ window, screen });

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
            "change",
            ({ window, screen }) => {
                setDimensions({ window, screen });
            }
        );
        return () => subscription?.remove();
    });
    console.log("day", dateTime, "time", time, "hour", hour);

    return (
        <SafeAreaView style={styles.MoreScreen}>
            <View style={styles.container}>
                <Text style={styles.header}>Window Dimensions</Text>
                {Object.entries(dimensions.window).map(([key, value]) => (
                    <Text key={key}>
                        {key} - {value}
                    </Text>
                ))}
                <Text style={styles.header}>Screen Dimensions</Text>
                {Object.entries(dimensions.screen).map(([key, value]) => (
                    <Text key={key}>
                        {key} - {value}
                    </Text>
                ))}
                <Text>Datetime:</Text>
                <Text>{dateTime}</Text>
                <Text>Time:</Text>
                <Text>{time}</Text>
                <Text>Date:</Text>
                <Text>{date}</Text>
                <Text>Hour:</Text>
                <Text>{hour}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    MoreScreen: {
        flex: 1,
        backgroundColor: colors.neutral95,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: 16,
        marginVertical: 10,
    },
});
