import React from "react";
import { View, ActivityIndicator } from "react-native";
import { colors } from "../constants";

export default function () {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <ActivityIndicator size="large" color={colors.blue400} />
        </View>
    );
}
