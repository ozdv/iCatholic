import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { initializeApp, getApps } from "firebase/app";
import { AuthContext } from "./AuthProvider";
import { colors, Icon } from "./constants";
import {
    HomeScreen,
    PrayersScreen,
    MoreScreen,
    BibleScreen,
    MassScreen,
    ExamenScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
} from "./screens";

// ----- FIREBASE CONFIG -----
const firebaseConfig = {
    apiKey: "AIzaSyDtJrpoXNyXLOVcpSHcuBKWiO1vI8doXYk",
    authDomain: "icatholic-ozdv.firebaseapp.com",
    projectId: "icatholic-ozdv",
    storageBucket: "icatholic-ozdv.appspot.com",
    messagingSenderId: "893491319030",
    appId: "1:893491319030:web:fa7595e2e3da645fe41cd7",
    measurementId: "G-KRKGC0XLMJ",
};

if (getApps().length === 0) {
    initializeApp(firebaseConfig);
}

// ----- NAVIGATION -----
const AuthStack = createNativeStackNavigator();
const Auth = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="Register" component={RegisterScreen} />
            <AuthStack.Screen
                name="ForgetPassword"
                component={ForgotPasswordScreen}
            />
        </AuthStack.Navigator>
    );
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

const Main = () => {
    return (
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
                                size={26}
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
                                size={20}
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
                                size={28}
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
                                size={20}
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
                                size={28}
                                color={color}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default function AppNavigator() {
    const auth = useContext(AuthContext);
    const user = auth.user;
    console.log("user: ", user);
    return (
        <NavigationContainer>
            {/* {user === null && <ExamenScreen />} // Loading screen maybe? */}
            {user == false && <Auth />}
            {user == true && <Main />}
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
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
