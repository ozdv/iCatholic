import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
    ScrollView,
} from "react-native";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from "react-native-popup-menu";
import colors from "../constants/colors";

export default function ButtonMenu(props) {
    const { buttonStyle, disabled, items, text, onSelect } = props;

    return (
        <View style={[styles.Modal, buttonStyle]}>
            <Menu>
                <MenuTrigger text={text} customStyles={styles.ModalTrigger} />
                <MenuOptions customStyles={styles.optionsStyles}>
                    <ScrollView style={styles.optionMenu}>
                        {items.map((item) => (
                            <MenuOption
                                key={item.id}
                                customStyles={styles.optionStyles}
                                onSelect={() => onSelect(item)}
                                text={item.name || item.number}
                            />
                        ))}
                    </ScrollView>
                </MenuOptions>
            </Menu>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {},
    Modal: {
        backgroundColor: colors.blue400,
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    ModalTrigger: {
        triggerText: {
            color: colors.white,
            fontSize: 16,
            fontWeight: "700",
            fontFamily: "Roboto-Regular",
        },
        triggerTouchable: {
            underlayColor: colors.blue400,
        },
    },
    optionsStyles: {
        optionsContainer: {
            marginTop: 32,
            marginLeft: -10,
        },
    },
    optionStyles: {
        optionWrapper: {
            backgroundColor: colors.white,
        },
        optionText: {
            color: "black",
        },
    },
    optionMenu: {
        height: 200,
    },
});
