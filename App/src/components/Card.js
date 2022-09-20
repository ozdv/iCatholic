import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

export default function Card(props) {
    const { height, width, color, text, onClick } = props;
    return (
        <View style={styles(props).Card}>
            <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles(props).text}
            >
                {text}
            </Text>
        </View>
    );
}

const styles = (props) =>
    StyleSheet.create({
        Card: {
            alignItems: "stretch",
            flex: 1,
            justifyContent: "center",
            marginTop: 20,
            minHeight: 100,
            marginRight: 20,
            marginLeft: 20,
            width: props.width ? props.width : "90%",
            maxHeight: props.height ? props.height : "20%",
            backgroundColor: props.color ? props.color : colors.white,
            borderColor: colors.neutral90,
            borderWidth: 1,
            shadowRadius: 8,
            shadowOpacity: 0.2,
            shadowColor: colors.neutral40,
            borderRadius: 10,
        },
        text: {
            color: colors.neutral30,
            textAlignVertical: "center",
            textAlign: "center",
            fontSize: 24,
        },
    });
