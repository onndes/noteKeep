import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import getColorApp from "../../../utils/colorApp";

export default function NotesListItem({
    note,
    searchValue,
    handlePressNote,
    selectedNotesIds,
    setSelectedNotesIds,
    pressInNote,
    setPressInNote,
}) {
    const selectedStyle =
        selectedNotesIds.find((id) => id === note.id) &&
        styles.noteContainerSelected;

    const pressInStyle = pressInNote === note.id && styles.notePressIn;

    const searchText = (
        text = "",
        searchText = "",
        styles = { color: "red" },
    ) => {
        if (searchText.trim().length === 0) return text;

        const firstPoint = "&*5%23";
        const secondPoint = "()&*21%23";

        const brokenText = text
            .split(searchText)
            .join(`${firstPoint}${searchText}${secondPoint}`)
            .split(firstPoint)
            .map((i) => i.split(secondPoint))
            .flat();

        return (
            <Text>
                {brokenText.map((t, idx) => {
                    if (t.toLowerCase() === searchText.toLowerCase()) {
                        return (
                            <Text key={idx} style={styles}>
                                {searchText}
                            </Text>
                        );
                    }
                    return t;
                })}
            </Text>
        );
    };

    const isCoincidencesText = note.text?.indexOf(searchValue);
    const isCoincidencesTitle = note.title?.indexOf(searchValue);

    if (isCoincidencesText !== -1 || isCoincidencesTitle !== -1) {
        return (
            <Pressable
                onLongPress={() =>
                    setSelectedNotesIds([...selectedNotesIds, note.id])
                }
                onPress={() => handlePressNote(note)}
                onPressIn={() => setPressInNote(note.id)}
                onPressOut={() => setPressInNote(null)}>
                <View
                    style={[styles.noteContainer, selectedStyle, pressInStyle]}>
                    <Text style={styles.title}>
                        {searchText(
                            note.title,
                            searchValue,
                            styles.foundTextStyle,
                        )}
                    </Text>
                    <Text style={styles.text}>
                        {searchText(
                            note.text,
                            searchValue,
                            styles.foundTextStyle,
                        )}
                    </Text>
                </View>
            </Pressable>
        );
    }
    return <React.Fragment />;
}

const styles = StyleSheet.create({
    title: { color: "white", fontSize: 17 },
    text: { color: "white", fontSize: 15 },
    noteContainer: {
        padding: 16,
        borderColor: getColorApp().lightTwo,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 12,
        marginHorizontal: 8,
    },
    noteContainerSelected: {
        borderWidth: 3,
        borderColor: getColorApp().selected,
    },
    notePressIn: {
        backgroundColor: getColorApp().pressIn,
    },
    foundTextStyle: {
        color: "black",
        backgroundColor: "orange",
    },
});
