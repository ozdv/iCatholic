import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";

import colors from "./App/src/constants/colors";
import HomeScreen from "./App/src/screens/HomeScreen";
import PrayersScreen from "./App/src/screens/PrayersScreen";
import MoreScreen from "./App/src/screens/MoreScreen";
import BibleScreen from "./App/src/screens/BibleScreen";
import MassScreen from "./App/src/screens/MassScreen";

export default function App() {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Pray" component={PrayersScreen} />
                <Tab.Screen name="Mass" component={MassScreen} />
                <Tab.Screen name="Bible" component={BibleScreen} />
                <Tab.Screen name="More" component={MoreScreen} />
            </Tab.Navigator>

            <StatusBar style="auto" />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral95,
        alignItems: "center",
        justifyContent: "center",
    },
});
