import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import {
    getFocusedRouteNameFromRoute,
    NavigationContainer,
} from "@react-navigation/native";
import {
    createDrawerNavigator,
    DrawerItem,
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

import { getAuth, signOut } from "firebase/auth";
import { AuthContext } from "./AuthProvider";
import { colors, Icon } from "./constants";
import { Loading, Header, IconButton } from "./components";
import {
    HomeScreen,
    PrayerListScreen,
    BibleScreen,
    MassScreen,
    ExamenScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    PrayerScreen,
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
export const db = getFirestore(initializeApp(firebaseConfig));

// ----- AUTH -----
const AuthStack = createNativeStackNavigator();
const AuthScreens = () => {
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

// ----- Header -----
function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "iCatholic";
    return <Header title={routeName} />;
}

// ----- DRAWER -----
const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
    const auth = useContext(AuthContext);
    const user = auth.user;
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {/* <DrawerItem label="Daily Mass Readings" onPress={() => {}} />
            <DrawerItem
                label="Prayers"
                // onPress={navigation.navigate(PrayerListScreen)}
            />
            <DrawerItem label="Holy Bible" onPress={() => {}} />
            <DrawerItem label="Confession" onPress={() => {}} /> */}
            <DrawerItem label="Settings" onPress={() => {}} />
            {/* <DrawerItem label="Divine Office" onPress={() => {}} /> */}
            <DrawerItem label="Feedback" onPress={() => {}} />
            <DrawerItem label="Help" onPress={() => alert("Link to help")} />
            {user === false && (
                <DrawerItem label="Sign In" onPress={() => signOut(auth)} />
            )}
            {user === true && (
                <DrawerItem label="Sign Out" onPress={() => signOut(auth)} />
            )}
        </DrawerContentScrollView>
    );
}

function DrawerScreens() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={({ navigation, route }) => ({
                headerLeft: () => (
                    <IconButton
                        color={colors.blue400}
                        type="ionicon"
                        name="ios-menu"
                        size={30}
                        buttonStyle={{
                            marginLeft: 20,
                        }}
                        iconStyle={styles.menuIcon}
                        onPress={navigation.toggleDrawer}
                    />
                ),
                headerTitle: () => getHeaderTitle(route),
            })}
        >
            <Drawer.Screen
                name="Home"
                component={TabScreens}
                options={{
                    headerTransparent: true,
                }}
                headerMode="screen"
            />
            {/* <Drawer.Screen name="Examen" component={ExamenScreen} /> */}
        </Drawer.Navigator>
    );
}

// ----- Prayers -----
const Stack = createNativeStackNavigator();
function PrayerScreens() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="All Prayers" component={PrayerListScreen} />
            <Stack.Screen name="Prayer" component={PrayerScreen} />
        </Stack.Navigator>
    );
}

// ----- Tabs -----
const Tab = createBottomTabNavigator();
function TabScreens() {
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
                name="iCatholic"
                component={HomeScreen}
                options={{
                    title: "Home",
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
                    headerTitle: (props) => (
                        <Header {...props} title="iCatholic" />
                    ),
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
                name="Prayers"
                component={PrayerScreens}
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
}

export default function AppNavigator() {
    const auth = useContext(AuthContext);
    const user = auth.user;

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
            {/* {user === false && <AuthScreens />} */}
            {/* {user === true && <DrawerScreens />} */}
            <DrawerScreens />
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        textAlign: "center",
        fontFamily: "Roboto-Regular",
    },
    tabBar: {
        backgroundColor: colors.white,
    },
});
