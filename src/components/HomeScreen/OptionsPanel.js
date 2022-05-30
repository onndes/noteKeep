import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

import getColorApp from "../../../utils/colorApp";
import IconClose from "../../common/IconJsx/IconClose";
import DropDownMenu from "./DropDownMenu";

const colorApp = getColorApp();

export default function OptionsPanel({
    setSelectedNotesIds,
    selectedNotesIds,
    setNotes,
    notes,
    archive,
    setArchive,
    isOption,
    isArchive = false,
}) {
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
                    <Pressable onPress={() => setSelectedNotesIds([])}>
                        <IconClose fill={colorApp.light} />
                    </Pressable>
                </View>
                <View style={styles.menuBox}>
                    <DropDownMenu
                        selectedNotesIds={selectedNotesIds}
                        setSelectedNotesIds={setSelectedNotesIds}
                        setNotes={setNotes}
                        notes={notes}
                        archive={archive}
                        setArchive={setArchive}
                        isOption={isOption}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
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
