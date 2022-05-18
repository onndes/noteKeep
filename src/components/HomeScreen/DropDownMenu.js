import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import getColorApp from "../../../utils/colorApp";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const colorApp = getColorApp();

export default function DropDownMenu({
    selectedNotes,
    setNotes,
    setSelectedNotes,
}) {
    const [isOpenMenu, setOpenMenu] = React.useState(false);

    const { getItem: getNotes, setItem: setItemNotes } =
        useAsyncStorage("notes");

    const handleButtonOpenMenu = () => {
        setOpenMenu(true);
    };

    const handleDelete = async () => {
        const notes = JSON.parse(await getNotes());

        const updateListNote = notes.filter((note) => {
            return !selectedNotes.find((id) => note.id == id);
        });

        setNotes(updateListNote);

        await setItemNotes(JSON.stringify(updateListNote));
        setOpenMenu(false);
        setSelectedNotes([]);
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
                            <Pressable style={styles.menuButton}>
                                <Text style={styles.menuButtonText}>
                                    Поместить в архив
                                </Text>
                            </Pressable>
                            <Pressable
                                onPress={handleDelete}
                                style={styles.menuButton}>
                                <Text style={styles.menuButtonText}>
                                    Удалить
                                </Text>
                            </Pressable>
                            <Pressable style={styles.menuButton}>
                                <Text style={styles.menuButtonText}>
                                    Создать копию
                                </Text>
                            </Pressable>
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
