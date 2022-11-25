import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    useWindowDimensions,
    SafeAreaView,
    View,
    ScrollView,
} from "react-native";
import RenderHtml from "react-native-render-html";

import { API_KEY } from "@env";
import { ButtonMenu } from "../components";
import colors from "../constants/colors";

export default function BibleScreen() {
    const { width } = useWindowDimensions();

    const [isLoading, setLoading] = useState(true);
    const [passage, setPassage] = useState([]);
    const [book, setBook] = useState({ id: "MAT", name: "Matthew" });
    const [books, setBooks] = useState([]);
    const [chapter, setChapter] = useState(1);
    const [chapters, setChapters] = useState([]);

    const getBooks = () => {
        fetch(
            "https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/books",
            {
                headers: { "api-key": API_KEY },
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setBooks(data.data);
            });
    };

    const getChapters = (book) => {
        fetch(
            `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/books/${book}/chapters`,
            {
                headers: { "api-key": API_KEY },
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setChapters(data.data);
            });
    };

    const getScripture = (book, chapter) => {
        fetch(
            `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/passages/${book.id}.${chapter}`,
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
            });
    };

    useEffect(() => {
        getBooks();
        getChapters(book.id);
        getScripture(book, chapter);
    }, [book, chapter]);

    return (
        <SafeAreaView style={styles.BibleScreen}>
            <View style={styles.BibleHeader}>
                <ButtonMenu
                    onSelect={(book) => setBook(book)}
                    buttonStyle={[styles.Buttons]}
                    text={book.name}
                    items={books.map((book) => book)}
                />
                <ButtonMenu
                    onSelect={(number) => setChapter(number.number)}
                    buttonStyle={[styles.Buttons]}
                    text={chapter}
                    items={chapters.map((chapter) => chapter)}
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
        marginTop: 50,
        marginBottom: 10,
        marginLeft: 25,
    },
    Buttons: {
        marginRight: 10,
    },
    Passages: {
        paddingHorizontal: 25,
        fontFamily: "Roboto-Regular",
    },
});
