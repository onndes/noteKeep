import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

import getColorApp from "../../../utils/colorApp";
import IconClose from "../../common/IconJsx/IconClose";
import DropDownMenu from "./DropDownMenu";

const colorApp = getColorApp();

export default function OptionsPanel({
    setSelectedNotes,
    selectedNotes,
    setNotes,
}) {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.closeButton}>
                    <Pressable onPress={() => setSelectedNotes([])}>
                        <IconClose fill={colorApp.light} />
                    </Pressable>
                </View>
                <View style={styles.menuBox}>
                    <DropDownMenu
                        selectedNotes={selectedNotes}
                        setSelectedNotes={setSelectedNotes}
                        setNotes={setNotes}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 8,
        marginBottom: 16,
        backgroundColor: colorApp.backgroundAction,
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    closeButton: {
        padding: 16,
    },
    menuBox: {},
});