import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

import getColorApp from "../../../utils/colorApp";
const colorApp = getColorApp();

const NavigationViewDrawMenu = ({ drawer, navigation }) => {
    const currentPage = "Home";
    // const { name: currentPage } = useRoute();

    if (navigation === null) {
        return <View></View>;
    }
    console.log("========================>", navigation);
    const pages = [
        {
            title: "Заметки",
            pageName: "Home",
            // link: () => navigation.navigate("addPost"),
        },
        {
            title: "Архив",
            pageName: "HomeArchive",
        },
    ];
    return (
        <View style={[styles.container, styles.navigationContainer]}>
            <Text style={styles.title}>
                <Text style={styles.titleNote}>Note</Text> Keep
            </Text>
            {pages.map((page) => {
                const activeStyleButton =
                    page.pageName === currentPage ? styles.activePage : {};
                const activeStyleText =
                    page.pageName === currentPage ? styles.activePage : {};

                return (
                    <Pressable
                        key={page.name + page.title}
                        style={[styles.button, activeStyleButton]}
                        onPress={() => currentPage.navigate("AddPost")}>
                        <Text style={[styles.buttonText, activeStyleText]}>
                            {page.title}
                        </Text>
                    </Pressable>
                );
            })}

          
        </View>
    );
};
export default NavigationViewDrawMenu;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorApp.backgroundDrawerMenu,
        flex: 1,
    },
    navigationContainer: {},

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
        fontSize: 19,
    },
    titleNote: {
        fontWeight: "600",
    },
});
