import "react-native-gesture-handler";
import React from "react";
import { registerRootComponent } from "expo";
import { useFonts } from "expo-font";
import AppNavigator from "./src/AppNavigator";
import { AuthProvider } from "./src/AuthProvider";
import { LogBox } from "react-native";

export default function App() {
    // Ignore firebase v9 AsyncStorage warning
    React.useEffect(() => {
        LogBox.ignoreLogs([
            "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
        ]);
    }, []);

    const [fontsLoaded] = useFonts({
        "Roboto-Regular": require("./assets/Fonts/Roboto-Regular.ttf"),
        "Roboto-Italic": require("./assets/Fonts/Roboto-Italic.ttf"),
        "Roboto-BlackItalic": require("./assets/Fonts/Roboto-BlackItalic.ttf"),
        "Roboto-Black": require("./assets/Fonts/Roboto-Black.ttf"),
        "Roboto-BoldItalic": require("./assets/Fonts/Roboto-BoldItalic.ttf"),
        "Roboto-Light": require("./assets/Fonts/Roboto-Light.ttf"),
        "Roboto-LightItalic": require("./assets/Fonts/Roboto-LightItalic.ttf"),
        "Roboto-Medium": require("./assets/Fonts/Roboto-Medium.ttf"),
        "Roboto-MediumItalic": require("./assets/Fonts/Roboto-MediumItalic.ttf"),
        "Roboto-Thin": require("./assets/Fonts/Roboto-Thin.ttf"),
        "Roboto-ThinItalic": require("./assets/Fonts/Roboto-ThinItalic.ttf"),
        "Roboto-Bold": require("./assets/Fonts/Roboto-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <AuthProvider>
            <AppNavigator />
        </AuthProvider>
    );
}

registerRootComponent(App);
