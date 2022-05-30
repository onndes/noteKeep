import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import uuid from "react-native-uuid";

import getColorApp from "../../../utils/colorApp";

const colorApp = getColorApp();

export default function DropDownMenu({
    notes,
    setNotes,
    selectedNotesIds,
    setSelectedNotesIds,
    archive,
    setArchive,
    isOption = {},
}) {
    const [isOpenMenu, setOpenMenu] = React.useState(false);

    const handleButtonOpenMenu = () => {
        setOpenMenu(true);
    };

    const handleArchive = () => {
        const selectedNotes = notes.filter((note) =>
            selectedNotesIds.find((id) => note.id === id),
        );
        setArchive([...selectedNotes, ...archive]);

        handleDelete();
        setOpenMenu(false);
        setSelectedNotesIds([]);
    };

    const handleDelete = () => {
        const updateListNote = notes.filter((note) => {
            return !selectedNotesIds.find((id) => note.id === id);
        });

        setNotes(updateListNote);

        setOpenMenu(false);
        setSelectedNotesIds([]);
    };

    const handleCopy = () => {
        const newCopyNote = notes.find(
            (note) => note.id === selectedNotesIds[0],
        );
        setNotes([{ ...newCopyNote, id: uuid.v4() }, ...notes]);
        setOpenMenu(false);
        setSelectedNotesIds([]);
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={handleButtonOpenMenu} style={{}}>
                <View style={styles.iconBox}>
                    <View style={styles.iconItem}></View>
                    <View style={styles.iconItem}></View>
                    <View style={styles.iconItem}></View>
                </View>
            </Pressable>
            {isOpenMenu && (
                <>
                    <Pressable
                        onPress={() => setOpenMenu(false)}
                        style={styles.outSideContainer}></Pressable>

                    <View style={styles.menuContainer}>
                        <View style={styles.menuWrapper}>
                            {!!isOption.archive && (
                                <Pressable
                                    onPress={handleArchive}
                                    style={styles.menuButton}>
                                    <Text style={styles.menuButtonText}>
                                        Поместить в архив
                                    </Text>
                                </Pressable>
                            )}
                            {!!isOption.delete && (
                                <Pressable
                                    onPress={handleDelete}
                                    style={styles.menuButton}>
                                    <Text style={styles.menuButtonText}>
                                        Удалить
                                    </Text>
                                </Pressable>
                            )}

                            {selectedNotesIds.length === 1 && isOption.copy && (
                                <Pressable
                                    onPress={handleCopy}
                                    style={styles.menuButton}>
                                    <Text style={styles.menuButtonText}>
                                        Создать копию
                                    </Text>
                                </Pressable>
                            )}
                            {isOption.getOutArchive && (
                                <Pressable
                                    onPress={handleArchive}
                                    style={styles.menuButton}>
                                    <Text style={styles.menuButtonText}>
                                        Разархивировать
                                    </Text>
                                </Pressable>
                            )}
                        </View>
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        justifyContent: "space-between",
        elevation: 3,
    },
    iconBox: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    iconItem: {
        width: 3,
        height: 3,
        backgroundColor: colorApp.light,
        borderRadius: 2,
        marginBottom: 4,
    },
    outSideContainer: {
        backgroundColor: "red",
        position: "absolute",
        top: -1110,
        left: -1110,
        right: -1110,
        bottom: -1110,
        opacity: 0,
    },
    menuContainer: {
        minWidth: 190,
        position: "absolute",
        right: 16,
        top: 8,
        backgroundColor: colorApp.backgroundAction,
        elevation: 4,
    },
    menuWrapper: {
        paddingVertical: 8,
    },
    menuButton: {
        padding: 8,
        marginBottom: 8,
    },
    menuButtonText: {
        color: colorApp.light,
        fontSize: 16,
    },
});
