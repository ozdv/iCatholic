import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { initializeApp, getApps } from "firebase/app";
import { AuthContext } from "./AuthProvider";
import { colors, Icon } from "./constants";
import { Loading, Header } from "./components";
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
            <Stack.Screen
                name="iCatholic"
                component={HomeScreen}
                options={{
                    headerTitle: (props) => <Header {...props} />,
                    headerTransparent: true,
                }}
            />
            <Stack.Screen name="Examen" component={ExamenScreen} />
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
                    tabBarIcon: ({ color }) => {
                        return (
                            <Icon
                                type="fa5"
                                name="church"
                                size={20}
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
                                size={20}
                                color={color}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Examen"
                component={ExamenScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => {
                        return (
                            <Icon
                                // type="entypo"
                                // name="menu"
                                type="fa5"
                                name="dove"
                                size={20}
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

    const [fontsLoaded] = useFonts({
        "Roboto-Regular": require("../assets/Fonts/Roboto-Regular.ttf"),
        "Roboto-Italic": require("../assets/Fonts/Roboto-Italic.ttf"),
        "Roboto-BlackItalic": require("../assets/Fonts/Roboto-BlackItalic.ttf"),
        "Roboto-Black": require("../assets/Fonts/Roboto-Black.ttf"),
        "Roboto-BoldItalic": require("../assets/Fonts/Roboto-BoldItalic.ttf"),
        "Roboto-Light": require("../assets/Fonts/Roboto-Light.ttf"),
        "Roboto-LightItalic": require("../assets/Fonts/Roboto-LightItalic.ttf"),
        "Roboto-Medium": require("../assets/Fonts/Roboto-Medium.ttf"),
        "Roboto-MediumItalic": require("../assets/Fonts/Roboto-MediumItalic.ttf"),
        "Roboto-Thin": require("../assets/Fonts/Roboto-Thin.ttf"),
        "Roboto-ThinItalic": require("../assets/Fonts/Roboto-ThinItalic.ttf"),
        "Roboto-Bold": require("../assets/Fonts/Roboto-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            {user === null && <Loading />}
            {user === false && <Auth />}
            {user === true && <Main />}
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
