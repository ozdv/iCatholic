import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import colors from "../constants/colors";

export default function LoginScreen() {
    const auth = getAuth();

    const [email, setEmail] = useState("");
    const [pwd1, setPwd1] = useState("");
    const [pwd2, setPwd2] = useState("");

    const handleSignUp = () => {
        if (pwd1 === pwd2) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredentials) => {
                    const user = userCredentials.user;
                    console.log("register - User Registered:", user.email);
                })
                .catch((error) => alert(error.message));
        } else {
            alert("Password do not match");
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.inputContainer}>
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
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
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
    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 40,
    },
    button: {
        backgroundColor: colors.blue400,
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "700",
    },
});
