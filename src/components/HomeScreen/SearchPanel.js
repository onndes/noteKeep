import React from "react";
import { View, StyleSheet, TextInput, Pressable } from "react-native";
import getColorApp from "../../../utils/colorApp";
import IconMenu from "../../common/IconJsx/IconMenu";

const colorApp = getColorApp();

export default function SearchPanel() {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Pressable>
                    <IconMenu fill={colorApp.light} height='25' />
                </Pressable>
                <TextInput
                    style={styles.inputSearch}
                    placeholder='Искать в заметках'
                    placeholderTextColor={colorApp.light}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorApp.backgroundAction,
        borderRadius: 50,
        marginBottom: 16,
        marginTop: 16,
    },

    wrapper: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    inputSearch: {
        color: colorApp.light,
        fontSize: 17,
    },
});
