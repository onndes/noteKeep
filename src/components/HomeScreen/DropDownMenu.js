import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import getColorApp from "../../../utils/colorApp";

const colorApp = getColorApp();

export default function DropDownMenu() {
    return (
        <View style={styles.container}>
            <Pressable>
                <View style={styles.iconBox}>
                    <View style={styles.iconItem}></View>
                    <View style={styles.iconItem}></View>
                    <View style={styles.iconItem}></View>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        justifyContent: "space-between",
    },
    iconItem: {
        width: 3,
        height: 3,
        backgroundColor: colorApp.light,
        borderRadius: 2,
        marginBottom: 4,
    },
});
