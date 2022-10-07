import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
} from "react-native";
import colors from "../constants/colors";

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
                <Text style={styles.logo}>Login</Text>
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
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
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
    logo: {
        // fontFamily: "Roboto-bold",
        fontSize: 46,
        color: colors.blue400,
        marginBottom: 20,
        // top: 150,
        // position: "absolute",
    },
    header: {
        // fontFamily: "Roboto-bold",
        fontSize: 36,
        fontWeight: "400",
        color: colors.neutral30,
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
        width: "80%",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 20,
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
