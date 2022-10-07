import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
} from "react-native";
import colors from "../constants/colors";
import { Icon } from "../constants";

export default function ForgetPassword() {
    const auth = getAuth();
    const navigation = useNavigation();
    const [email, setEmail] = useState("");

    async function handleForgotPassword() {
        await sendPasswordResetEmail(auth, email)
            .then(function () {
                navigation.navigate("Login");
                alert("Your password reset has been sent to your email");
            })
            .catch(function (error) {
                alert(error);
            });
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate("Login")}
            >
                <Icon
                    type="ionicon"
                    name="arrow-back"
                    size={28}
                    color={colors.blue400}
                />
            </TouchableOpacity>
            <View style={styles.inputContainer}>
                <Text style={styles.logo}>Forgot {"\n"}Password?</Text>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleForgotPassword}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Submit</Text>
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
    logo: {
        // fontFamily: "Roboto-bold",
        fontSize: 46,
        color: colors.blue400,
        marginBottom: 20,
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
    forgotText: {
        color: colors.neutral50,
        fontSize: 18,
        marginBottom: 10,
    },
    backButton: {
        position: "absolute",
        top: 50,
        left: 30,
    },
});
