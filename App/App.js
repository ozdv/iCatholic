import React, { useEffect } from "react";
import { StyleSheet, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { registerRootComponent } from "expo";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { colors, Icon } from "./src/constants";
import {
    HomeScreen,
    PrayersScreen,
    MoreScreen,
    BibleScreen,
    MassScreen,
    ExamenScreen,
    LoginScreen,
    RegisterScreen,
} from "./src/screens";

export default function App() {
    let iconSize = 20;
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

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("APP.JS - USER", user.email);
        } else {
            console.log("APP.JS - NO USER");
        }
    });

    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    function LoggedOutStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerBackVisible: false }}
                    name="Login"
                    component={LoginScreen}
                />
                <Stack.Screen
                    options={{ headerBackVisible: false }}
                    name="Register"
                    component={RegisterScreen}
                />
            </Stack.Navigator>
        );
    }

    function HomeStackScreen() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Homepage" component={HomeScreen} />
                <Stack.Screen
                    options={{ headerBackVisible: false }}
                    name="Examen"
                    component={ExamenScreen}
                />
                <Stack.Screen
                    options={{ headerBackVisible: false }}
                    name="Login"
                    component={LoginScreen}
                />
            </Stack.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="HomeStack"
                screenOptions={{
                    tabBarActiveTintColor: colors.blue400,
                    tabBarInactiveTintColor: colors.neutral70,
                    tabBarLabelStyle: styles.label,
                    tabBarStyle: styles.tabBar,
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeStackScreen}
                    options={{
                        tabBarIcon: ({ color }) => {
                            return (
                                <Icon
                                    type="fa"
                                    name="home"
                                    size={iconSize + 6}
                                    color={color}
                                />
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="Bible"
                    component={BibleScreen}
                    options={{
                        headerShown: true,
                        tabBarIcon: ({ color }) => {
                            return (
                                <Icon
                                    type="fa5"
                                    name="bible"
                                    size={iconSize}
                                    color={color}
                                />
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="Mass"
                    component={MassScreen}
                    options={{
                        headerShown: true,
                        tabBarIcon: ({ color }) => {
                            return (
                                <Icon
                                    type="materialCommunity"
                                    name="cross"
                                    size={iconSize + 8}
                                    color={color}
                                />
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="Pray"
                    component={PrayersScreen}
                    options={{
                        headerShown: true,
                        tabBarIcon: ({ color }) => {
                            return (
                                <Icon
                                    type="fa5"
                                    name="praying-hands"
                                    size={iconSize}
                                    color={color}
                                />
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="More"
                    component={MoreScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => {
                            return (
                                <Icon
                                    type="entypo"
                                    name="menu"
                                    size={iconSize + 8}
                                    color={color}
                                />
                            );
                        },
                    }}
                />
            </Tab.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}

registerRootComponent(App);

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
        fontFamily: "Roboto-Regular",
    },
    tabBar: {
        backgroundColor: colors.white,
        shadowRadius: 8,
        shadowOpacity: 0.2,
        shadowColor: colors.neutral40,
    },
});
