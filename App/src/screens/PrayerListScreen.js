import React, { useState } from "react";
import { StyleSheet, SafeAreaView, TextInput, ScrollView } from "react-native";
import ItemList from "../components/ItemList";
import colors from "../constants/colors";
import { prayers } from "../constants";

export default function PrayerListScreen({ navigation }) {
    const [searchString, setSearchString] = useState("");

    return (
        <ScrollView style={styles.ScrollView}>
            <SafeAreaView style={styles.PrayerListScreen}>
                <TextInput
                    placeholder="Search"
                    value={searchString}
                    onChangeText={(text) => setSearchString(text)}
                    style={styles.input}
                />

                {prayers
                    .filter((prayer) => {
                        if (searchString === "") {
                            return prayers;
                        } else if (
                            prayer.label
                                .toLowerCase()
                                .includes(searchString.toLowerCase())
                        ) {
                            return prayers;
                        }
                    })
                    .map((prayer, i) => (
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    ScrollView: {
        backgroundColor: colors.neutral98,
    },
    PrayerListScreen: {
        marginTop: 100,
        // alignItems: "center",
        // justifyContent: "center",
        // backgroundColor: colors.white,
    },
    inputContainer: {},
    input: {
        width: "90%",
        marginBottom: 20,
        alignSelf: "center",
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
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
