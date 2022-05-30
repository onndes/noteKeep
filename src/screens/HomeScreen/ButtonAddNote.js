import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

import getColorApp from "../../../utils/colorApp";

export default function ButtonAddNote({ navigation, setSelectedNotesIds }) {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.pressable}
                onPress={() => {
                    setSelectedNotesIds([]);
                    navigation.navigate("AddPost");
                }}>
                <View style={styles.buttonBox}>
                    <View style={styles.verticalLine}></View>
                    <View style={styles.horizontalLine}></View>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { position: "absolute", bottom: 25, right: 30 },
    pressable: {},
    buttonBox: {
        flex: 1,
        position: "relative",
        backgroundColor: getColorApp().backgroundAction,
        alignSelf: "stretch",
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
    },
    verticalLine: {
        width: 4,
        height: 35,
        backgroundColor: getColorApp().light,
    },
    horizontalLine: {
        position: "absolute",
        width: 4,
        height: 35,
        backgroundColor: getColorApp().light,
        transform: [{ rotate: "90deg" }],
    },
});
