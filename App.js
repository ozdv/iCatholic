import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { colors, Icon } from "./App/src/constants";
import {
    HomeScreen,
    PrayersScreen,
    MoreScreen,
    BibleScreen,
    MassScreen,
    ExamenScreen,
} from "./App/src/screens";

export default function App() {
    let iconSize = 20;
    const [fontsLoaded] = useFonts({
        "Roboto-Regular": require("./App/assets/Fonts/Roboto-Regular.ttf"),
        "Roboto-Italic": require("./App/assets/Fonts/Roboto-Italic.ttf"),
        "Roboto-BlackItalic": require("./App/assets/Fonts/Roboto-BlackItalic.ttf"),
        "Roboto-Black": require("./App/assets/Fonts/Roboto-Black.ttf"),
        "Roboto-BoldItalic": require("./App/assets/Fonts/Roboto-BoldItalic.ttf"),
        "Roboto-Light": require("./App/assets/Fonts/Roboto-Light.ttf"),
        "Roboto-LightItalic": require("./App/assets/Fonts/Roboto-LightItalic.ttf"),
        "Roboto-Medium": require("./App/assets/Fonts/Roboto-Medium.ttf"),
        "Roboto-MediumItalic": require("./App/assets/Fonts/Roboto-MediumItalic.ttf"),
        "Roboto-Thin": require("./App/assets/Fonts/Roboto-Thin.ttf"),
        "Roboto-ThinItalic": require("./App/assets/Fonts/Roboto-ThinItalic.ttf"),
        "Roboto-Bold": require("./App/assets/Fonts/Roboto-Bold.ttf"),
    });
    if (!fontsLoaded) {
        return null;
    }
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    function HomeStackScreen() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen
                    options={{ headerBackVisible: false }}
                    name="Examen"
                    component={ExamenScreen}
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
                    name="Ho"
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
