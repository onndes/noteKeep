import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

import getColorApp from "../../../utils/colorApp";
import IconClose from "../../common/IconJsx/IconClose";
import DropDownMenu from "./DropDownMenu";

const colorApp = getColorApp();

export default function OptionsPanel({ isArchive = false, ...props }) {
    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: isArchive
                        ? colorApp.backgroundActionOpacity
                        : colorApp.backgroundAction,
                },
            ]}>
            <View style={styles.wrapper}>
                <View style={styles.closeButton}>
                    <Pressable
                        style={{ padding: 12 }}
                        onPress={() => props.setSelectedItemsIds([])}>
                        <IconClose fill={colorApp.light} />
                    </Pressable>
                </View>
                <View style={styles.menuBox}>
                    <DropDownMenu {...props} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 42,
        paddingHorizontal: 8,
        marginBottom: 16,
        backgroundColor: colorApp.backgroundAction,
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    closeButton: {},
    menuBox: {},
});
