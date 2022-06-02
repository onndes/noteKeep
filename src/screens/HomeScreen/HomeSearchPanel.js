import React from "react";
import { View, StyleSheet, TextInput, Pressable } from "react-native";

import getColorApp from "../../../utils/colorApp";
import IconMenu from "../../common/IconJsx/IconMenu";

const colorApp = getColorApp();

export default function HomeSearchPanel({
    searchValue,
    setSearchValue,
    navigation,
}) {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Pressable
                    style={styles.pressable}
                    onPress={() => navigation.openDrawer()}>
                    <IconMenu fill={colorApp.light} height='25' width='25' />
                </Pressable>
                <TextInput
                    onChangeText={(text) => setSearchValue(text)}
                    value={searchValue}
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
        marginTop: 48,
    },

    wrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    pressable: {
        padding: 16,
        paddingRight: 12,
    },
    inputSearch: {
        flex: 1,
        color: colorApp.light,
        fontSize: 17,
        padding: 16,
        paddingLeft: 4,
    },
});
