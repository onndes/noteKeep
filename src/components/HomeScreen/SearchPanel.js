import React from "react";
import { View, StyleSheet, TextInput, Pressable } from "react-native";
import getColorApp from "../../../assets/colorApp";
import IconMenu from "../../common/IconJsx/IconMenu";

export default function SearchPanel() {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Pressable>
                    <IconMenu fill={getColorApp().light} height='25' />
                </Pressable>
                <TextInput
                    style={styles.inputSearch}
                    placeholder='Искать в заметках'
                    placeholderTextColor={getColorApp().light}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: getColorApp().backgroundAction,
        borderRadius: 50,
        marginBottom: 16,
    },

    wrapper: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    inputSearch: {
        color: getColorApp().light,
        fontSize: 17,
    },
});
