import React from "react";
import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";
import getColorApp from "../../../utils/colorApp";
import IconClose from "../../common/IconJsx/IconClose";
import IconMenu from "../../common/IconJsx/IconMenu";
import IconSearch from "../../common/IconJsx/IconSearch";
import DropDownMenu from "../HomeScreen/DropDownMenu";
import OptionsPanel from "../HomeScreen/OptionsPanel";

const colorApp = getColorApp();

export default function SearchPanel({
    searchValue,
    setSearchValue,
    navigation,
    archive,
    setArchive,
    setSelectedNotesIds,
    selectedNotesIds,
}) {
    const [activeSearch, setActiveSearch] = React.useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Pressable onPress={() => navigation.openDrawer()}>
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
                        <Pressable onPress={() => setActiveSearch(true)}>
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
        marginBottom: 32,
        marginTop: 56,
        marginHorizontal: 12,
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
