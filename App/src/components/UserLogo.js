import React from "react";
import { StyleSheet, Image, View } from "react-native";
import colors from "../constants/colors";

export default function UserLogo(props) {
    const { user } = props;
    return (
        <View style={styles.UserLogo}>
            <Image
                style={styles.image}
                source={require("../../assets/Astro.jpeg")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    UserLogo: {
        flex: 1,
        alignSelf: "center",
        height: 100,
        width: 100,
        backfaceVisibility: 0,
        shadowRadius: 8,
        shadowOpacity: 0.2,
        shadowColor: colors.neutral40,
    },
    image: {
        borderColor: colors.neutral90,
        borderRadius: 100 / 2,
        borderWidth: 1,
        resizeMode: "cover",
        width: 100,
        height: 100,
    },
});
