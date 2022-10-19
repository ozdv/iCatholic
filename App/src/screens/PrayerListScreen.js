import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import ItemList from "../components/ItemList";
import colors from "../constants/colors";
import { prayers } from "../constants";

export default function PrayerListScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.PrayerListScreen}>
            {prayers.map((prayer, i) => (
                <ItemList
                    label={prayer.label}
                    style={
                        i === prayers.length - 1
                            ? styles.noBorder
                            : styles.border
                    }
                    key={i}
                    onPress={() =>
                        navigation.navigate({
                            name: "Prayer",
                            params: { prayer: prayer.prayer },
                        })
                    }
                />
            ))}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    PrayerListScreen: {
        marginTop: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    border: {
        borderColor: colors.neutral90,
        borderTopWidth: 1,
    },
    noBorder: {
        borderColor: colors.neutral90,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
});
