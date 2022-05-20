import React from "react";
import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import getColorApp from "../../../utils/colorApp";

const colorApp = getColorApp();

export default function NotesList({
    selectedNotesIds,
    setSelectedNotesIds,
    notes,
    navigation,
}) {
    const [pressInNote, setPressInNote] = React.useState(null);

    const { setItem: setItemAppBar } = useAsyncStorage("colorAppBar");

    React.useEffect(() => {
        if (!!selectedNotesIds.length) {
            setItemAppBar("backgroundMain");
        }
    }, [selectedNotesIds]);

    const handlePressNote = (note) => {
        if (!!selectedNotesIds.length) {
            const isSelectedNote = selectedNotesIds.find(
                (id) => id === note.id,
            );
            if (isSelectedNote) {
                setSelectedNotesIds(
                    selectedNotesIds.filter((id) => id !== note.id),
                );
            } else {
                setSelectedNotesIds([...selectedNotesIds, note.id]);
            }
        } else {
            navigation.navigate("AddPost", {
                titleEditableNote: note.title ? note.title : "",
                textEditableNote: note.text ? note.text : "",
                idEditNote: note.id,
            });
        }
    };

    return (
        <ScrollView style={styles.container}>
            {!!notes.length ? (
                notes.map((note) => {
                    const selectedStyle =
                        selectedNotesIds.find((id) => id === note.id) &&
                        styles.noteContainerSelected;

                    const pressInStyle =
                        pressInNote === note.id && styles.notePressIn;

                    return (
                        <Pressable
                            key={note.id}
                            onLongPress={() =>
                                setSelectedNotesIds([
                                    ...selectedNotesIds,
                                    note.id,
                                ])
                            }
                            onPress={() => {
                                handlePressNote(note);
                            }}
                            onPressIn={() => setPressInNote(note.id)}
                            onPressOut={() => setPressInNote(null)}>
                            <View
                                key={note.id}
                                style={[
                                    styles.noteContainer,
                                    selectedStyle,
                                    pressInStyle,
                                ]}>
                                <Text style={styles.title}>{note.title}</Text>
                                <Text style={styles.text}>{note.text}</Text>
                            </View>
                        </Pressable>
                    );
                })
            ) : (
                <Text style={{ color: "white", paddingHorizontal: 25 }}>
                    нет записей
                </Text>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        zIndex: -1,
        elevation: -1,
    },
    title: { color: "white", fontSize: 17 },
    text: { color: "white", fontSize: 15 },
    noteContainer: {
        padding: 16,
        borderColor: colorApp.lightTwo,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 12,
        marginHorizontal: 8,
    },
    noteContainerSelected: {
        borderWidth: 3,
        borderColor: colorApp.selected,
    },
    notePressIn: {
        backgroundColor: colorApp.pressIn,
    },
});
