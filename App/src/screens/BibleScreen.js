import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    useWindowDimensions,
    SafeAreaView,
    View,
    ScrollView,
} from "react-native";

import RenderHtml from "react-native-render-html";

import { Button } from "../components";
import { API_KEY } from "@env";

import colors from "../constants/colors";

export default function BibleScreen() {
    const { width } = useWindowDimensions();

    const [isLoading, setLoading] = useState(true);
    const [passage, setPassage] = useState([]);
    const [book, setBook] = useState("Matthew");
    const [chapter, setChapter] = useState(1);
    const [verse, setVerse] = useState(1);
    console.log("env", API_KEY);

    const getScripture = (book, chapter, verse) => {
        fetch(
            "https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/passages/MAT.28",
            {
                headers: { "api-key": API_KEY },
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPassage({ html: data.data.content });
                setLoading(false);
                console.log("data", data.data.content);
            });
    };

    useEffect(() => {
        getScripture();
    }, []);

    return (
        <SafeAreaView style={styles.BibleScreen}>
            <View style={styles.BibleHeader}>
                <Button
                    onPress={getScripture}
                    buttonStyle={[styles.Buttons, { flex: 2 }]}
                    style={{ padding: 5 }}
                    text={book}
                />
                <Button
                    onPress={() => {}}
                    buttonStyle={[styles.Buttons, { flex: 1 }]}
                    style={{ padding: 5 }}
                    text={chapter}
                />
                <Button
                    onPress={() => {}}
                    buttonStyle={[styles.Buttons, { flex: 1 }]}
                    style={{ padding: 5 }}
                    text={verse}
                />
            </View>
            <ScrollView style={styles.Passages}>
                {!isLoading && (
                    <RenderHtml contentWidth={width} source={passage} />
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    BibleScreen: {
        flex: 1,
        backgroundColor: colors.neutral98,
    },
    BibleHeader: {
        flexDirection: "row",
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 25,
    },
    Buttons: {
        marginRight: 25,
    },
    Passages: {
        marginHorizontal: 25,
        fontFamily: "Roboto-Regular",
    },
});
