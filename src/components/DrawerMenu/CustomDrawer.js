import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";

import getColorApp from "../../../utils/colorApp";

const colorApp = getColorApp();

export default function CustomDrawer(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                <Text style={styles.titleNote}>Note</Text> Keep
            </Text>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.drawerItemListContainer}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorApp.backgroundDrawerMenu,
    },
    contentContainerStyle: {
        backgroundColor: colorApp.backgroundDrawerMenu,
    },
    drawerItemListContainer: {
        flex: 1,
        padding: 0,
        paddingLeft: -20,
        marginLeft: -10,
        marginTop: -40,
    },
    title: {
        color: colorApp.light,
        padding: 16,
        marginTop: 40,
        fontSize: 19,
    },
    titleNote: {
        fontWeight: "600",
    },
});

