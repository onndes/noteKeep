import React from "react";
import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";
import getColorApp from "../../../utils/colorApp";
import IconMenu from "../../common/IconJsx/IconMenu";

const colorApp = getColorApp();

export default function SearchPanel({
    searchValue,
    setSearchValue,
    navigation,
}) {
    const [activeSearch, setActiveSearch] = React.useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Pressable onPress={() => navigation.openDrawer()}>
                    <IconMenu fill={colorApp.light} height='25' width='25' />
                </Pressable>
                {activeSearch ? (
                    <TextInput
                        onChangeText={(text) => setSearchValue(text)}
                        value={searchValue}
                        style={styles.inputSearch}
                        placeholder='Искать в заметках'
                        placeholderTextColor={colorApp.light}
                    />
                ) : (
                    <Text style={styles.searchPanelTitle}>Архив</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
        marginTop: 48,
    },

    wrapper: {
        paddingTop: 8,
        flexDirection: "row",
        alignItems: "center",
    },
    inputSearch: {
        color: colorApp.light,
        fontSize: 17,
    },
    searchPanelTitle: {
        color: colorApp.light,
        fontSize: 20,
        paddingLeft: 16,
    },
});
