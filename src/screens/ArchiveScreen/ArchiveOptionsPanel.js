import React from "react";
import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";

import getColorApp from "../../../utils/colorApp";
import IconClose from "../../common/IconJsx/IconClose";
import IconMenu from "../../common/IconJsx/IconMenu";
import IconSearch from "../../common/IconJsx/IconSearch";

const colorApp = getColorApp();

export default function ArchiveOptionsPanel({
    searchValue,
    setSearchValue,
    navigation,
}) {
    const [activeSearch, setActiveSearch] = React.useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Pressable
                    style={{ padding: 12 }}
                    onPress={() => navigation.openDrawer()}>
                    <IconMenu fill={colorApp.light} height='25' width='25' />
                </Pressable>
                {activeSearch ? (
                    <View style={styles.searchPanelBox}>
                        <TextInput
                            onChangeText={(text) => setSearchValue(text)}
                            value={searchValue}
                            style={styles.inputSearch}
                            placeholder='Искать в архиве'
                            placeholderTextColor={colorApp.lightTwo}
                        />
                        <Pressable
                            style={{ padding: 12 }}
                            onPress={() => {
                                setActiveSearch(false);
                                setSearchValue("");
                            }}>
                            <IconClose fill={colorApp.light} />
                        </Pressable>
                    </View>
                ) : (
                    <View style={styles.topPanelBox}>
                        <Text style={styles.topPanelTitle}>Архив</Text>
                        <Pressable
                            style={{ padding: 12 }}
                            onPress={() => setActiveSearch(true)}>
                            <IconSearch fill={colorApp.light} />
                        </Pressable>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        marginTop: 40,
        marginHorizontal: 8,
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
    dropDownBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    searchPanelBox: {
        marginHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
    },
    topPanelBox: {
        paddingLeft: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
    },
    topPanelTitle: {
        color: colorApp.light,
        fontSize: 20,
    },
});
