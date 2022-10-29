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
        borderColor: colors.white,
        borderRadius: 100 / 2,
        // looks fine on web but not on ios?
        // shadowColor: colors.neutral40,
        // shadowRadius: 2,
        // shadowOpacity: 0.2,
    },
    image: {
        borderWidth: 1,
        borderColor: colors.neutral90,
        borderRadius: 100 / 2,
        resizeMode: "cover",
        width: 100,
        height: 100,
    },
});
