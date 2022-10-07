import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
} from "react-native";
import colors from "../constants/colors";
import { Button } from "../components";

export default function LoginScreen() {
    const auth = getAuth();
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        await signInWithEmailAndPassword(auth, email, password).catch(function (
            error
        ) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Login</Text>
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
                <Text
                    style={styles.forgotText}
                    onPress={() => navigation.navigate("ForgetPassword")}
                >
                    {" "}
                    Forgot Password?
                </Text>
            </View>

            <Button text="Login" onPress={handleLogin} />

            <View style={styles.newUser}>
                <Text style={styles.newUserText}>
                    New here?
                    <Text
                        style={styles.newUserButton}
                        onPress={() => navigation.navigate("Register")}
                    >
                        {" "}
                        Register!
                    </Text>
                </Text>
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
    newUser: {
        alignItems: "left",
        marginTop: 30,
        alignItems: "center",
    },
    newUserText: {
        color: colors.neutral50,
        fontSize: 18,
    },
    newUserButton: {
        color: colors.blue400,
        fontSize: 18,
    },
    forgotText: {
        color: colors.blue400,
        textAlign: "right",
        fontSize: 14,
        marginTop: 20,
    },
});
