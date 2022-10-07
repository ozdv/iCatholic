import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
} from "react-native";
import colors from "../constants/colors";
import { Button, IconButton } from "../components";

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
            <IconButton
                buttonStyle={styles.backButton}
                onPress={() => navigation.navigate("Login")}
                type="ionicon"
                name="arrow-back"
                size={28}
                color={colors.blue400}
            />

            <View style={styles.inputContainer}>
                <Text style={styles.title}>Forgot {"\n"}Password?</Text>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                />
            </View>
            <Button onPress={handleForgotPassword} text="Submit" />
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
