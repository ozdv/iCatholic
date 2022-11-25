import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { Button, IconButton } from "../components";

export default function LoginScreen() {
    const auth = getAuth();
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd1, setPwd1] = useState("");
    const [pwd2, setPwd2] = useState("");

    const handleSignUp = () => {
        if (pwd1 === pwd2 && name !== "") {
            createUserWithEmailAndPassword(auth, email, pwd1)
                .then((userCredentials) => {
                    const user = userCredentials.user;
                })
                .catch((error) => alert(error.message));
        } else if (pwd1 === pwd2) {
            alert("Password do not match");
        } else {
            alert("Name is left empty");
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <IconButton
                onPress={() => navigation.navigate("Login")}
                type="ionicon"
                name="arrow-back"
                size={28}
                color={colors.blue400}
                buttonStyle={styles.backButton}
            />
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Sign up</Text>
                <TextInput
                    placeholder="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={pwd1}
                    onChangeText={(text) => setPwd1(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <TextInput
                    placeholder="Confirm Password"
                    value={pwd2}
                    onChangeText={(text) => setPwd2(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <Button
                onPress={handleSignUp}
                buttonStyle={{ width: "80%" }}
                style={{ padding: 15 }}
                text="Register"
            />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    title: {
        fontFamily: "Roboto-Regular",
        fontSize: 46,
        color: colors.blue400,
        marginBottom: 20,
    },
    inputContainer: {
        width: "80%",
    },
    input: {
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    nameInput: {
        flex: 1,
    },
    backButton: {
        position: "absolute",
        top: 50,
        left: 30,
    },
});
