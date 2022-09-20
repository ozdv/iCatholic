import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import colors from "./App/src/constants/colors";
import HomeScreen from "./App/src/screens/HomeScreen";
import PrayersScreen from "./App/src/screens/PrayersScreen";
import MoreScreen from "./App/src/screens/MoreScreen";
import BibleScreen from "./App/src/screens/BibleScreen";
import MassScreen from "./App/src/screens/MassScreen";
import Icon from "./App/src/constants/icons";

export default function App() {
    const Tab = createBottomTabNavigator();
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

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarActiveTintColor: colors.blue400,
                    tabBarInactiveTintColor: colors.neutral70,
                    tabBarLabelStyle: styles.label,
                    tabBarStyle: styles.tabBar,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
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
