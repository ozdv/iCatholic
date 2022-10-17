import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
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
    BibleScreen,
    MassScreen,
    ExamenScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
} from "./screens";
import {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
} from "@env";

// ----- FIREBASE CONFIG -----
const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
};

if (getApps().length === 0) {
    initializeApp(firebaseConfig);
}

// ----- AUTH -----
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

// ----- DRAWER -----
const Drawer = createDrawerNavigator();

function DrawerScreens() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    );
}

// ----- HomeStack -----
const Stack = createNativeStackNavigator();
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

// ----- Tabs -----
const Tab = createBottomTabNavigator();
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
