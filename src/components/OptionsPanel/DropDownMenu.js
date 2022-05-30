import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import uuid from "react-native-uuid";

import getColorApp from "../../../utils/colorApp";

const colorApp = getColorApp();

export default function DropDownMenu({
    selectedItemsIds,
    setSelectedItemsIds,
    items,
    setItems,
    secondItems,
    setSecondItems,
    isOptions = {},
}) {
    const [isOpenMenu, setOpenMenu] = React.useState(false);

    const handleButtonOpenMenu = () => {
        setOpenMenu(true);
    };

    const handleArchive = () => {
        const selectedItems = items.filter((item) =>
            selectedItemsIds.find((id) => item.id === id),
        );
        setSecondItems([...selectedItems, ...secondItems]);

        handleDelete();
        setOpenMenu(false);
        setSelectedItemsIds([]);
    };

    const handleDelete = () => {
        const updateListItem = items.filter((item) => {
            return !selectedItemsIds.find((id) => item.id === id);
        });

        setItems(updateListItem);

        setOpenMenu(false);
        setSelectedItemsIds([]);
    };

    const handleCopy = () => {
        const newCopyItem = items.find(
            (item) => item.id === selectedItemsIds[0],
        );
        setItems([{ ...newCopyItem, id: uuid.v4() }, ...items]);
        setOpenMenu(false);
        setSelectedItemsIds([]);
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
                            {!!isOptions.archive && (
                                <Pressable
                                    onPress={handleArchive}
                                    style={styles.menuButton}>
                                    <Text style={styles.menuButtonText}>
                                        Поместить в архив
                                    </Text>
                                </Pressable>
                            )}
                            {!!isOptions.delete && (
                                <Pressable
                                    onPress={handleDelete}
                                    style={styles.menuButton}>
                                    <Text style={styles.menuButtonText}>
                                        Удалить
                                    </Text>
                                </Pressable>
                            )}

                            {selectedItemsIds.length === 1 && isOptions.copy && (
                                <Pressable
                                    onPress={handleCopy}
                                    style={styles.menuButton}>
                                    <Text style={styles.menuButtonText}>
                                        Создать копию
                                    </Text>
                                </Pressable>
                            )}
                            {isOptions.getOutArchive && (
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
