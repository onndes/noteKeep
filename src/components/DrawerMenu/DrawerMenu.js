import React from "react";
import { View, StyleSheet, Text, Pressable, Animated } from "react-native";
import getColorApp from "../../../utils/colorApp";
import OutsideView from "react-native-detect-press-outside";
const colorApp = getColorApp();

export default function DrawerMenu({
    navigation,
    setOpenDrawer,
    openDrawer,
    routeName,
}) {
    const pages = [
        {
            title: "Заметки",
            pageName: "Home",
            link: function () {
                navigation.navigate(this.pageName);
            },
        },
        {
            title: "Архив",
            pageName: "Archive",
            link: function () {
                navigation.navigate(this.pageName);
            },
        },
    ];

    const childRef = React.useRef();

    const openContainer = openDrawer ? styles.openContainer : {};

    return (
        <OutsideView
            style={[styles.container, openContainer]}
            childRef={childRef}
            onPressOutside={() => {
                setOpenDrawer(false);
            }}>
            <View
                ref={childRef}
                style={styles.innerContainer}
                onTouchEnd={(e) => {}}>
                <Text style={styles.title}>
                    <Text style={styles.titleNote}>Note</Text> Keep
                </Text>
                {pages.map((page) => {
                    const activeStyleButton =
                        page.pageName === routeName ? styles.activePage : {};
                    const activeStyleText =
                        page.pageName === routeName ? styles.activePage : {};

                    return (
                        <Pressable
                            key={page.name + page.title}
                            style={[styles.button, activeStyleButton]}
                            onPress={() => {
                                page.link();
                                setOpenDrawer(false);
                            }}>
                            <Text style={[styles.buttonText, activeStyleText]}>
                                {page.title}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
        </OutsideView>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: "100%",
        right: "100%",
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, .5)",
        elevation: 0,
        zIndex: 0,
    },
    openContainer: {
        left: 0,
        width: "100%",
    },
    innerContainer: {
        zIndex: 100,
        elevation: 100,
        position: "relative",
        top: 0,
        left: 0,
        width: 280,
        bottom: 0,
        flex: 1,
        backgroundColor: colorApp.backgroundDrawerMenu,
    },
    button: {
        marginRight: 10,
    },
    activePage: {
        backgroundColor: colorApp.backgroundDrawerMenuAction,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    },
    buttonText: {
        padding: 14,
        fontSize: 15,
        color: colorApp.light,
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
