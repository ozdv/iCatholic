import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
} from "react-native";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";

import colors from "../constants/colors";

export default function LoginScreen() {
    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user;
            console.log("login - USER", user.email);
        } else {
            console.log("login - no USER");
        }
    });

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log("User Registered:", user.email);
            })
            .catch((error) => alert(error.message));
    };

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log("User Login:", user);
            })
            .catch((error) => alert(error.message));
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
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={navigation.navigate("Register")}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
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
    buttonOutline: {
        backgroundColor: colors.white,
        marginTop: 5,
        borderColor: colors.blue400,
        borderWidth: 2,
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "700",
    },
    buttonOutlineText: {
        color: colors.blue400,
        fontSize: 16,
        fontWeight: "700",
    },
});
