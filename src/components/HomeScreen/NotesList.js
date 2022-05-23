import React from "react";
import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import getColorApp from "../../../utils/colorApp";
import NotesListItem from "./NotesListItem";

const colorApp = getColorApp();

export default function NotesList({
    selectedNotesIds,
    setSelectedNotesIds,
    notes,
    navigation,
    searchValue,
}) {
    const [pressInNote, setPressInNote] = React.useState(null);

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
            {notes && !!notes.length ? (
                notes.map((note) => {
                    return (
                        <NotesListItem
                            key={note.id}
                            note={note}
                            searchValue={searchValue}
                            handlePressNote={handlePressNote}
                            selectedNotesIds={selectedNotesIds}
                            setSelectedNotesIds={setSelectedNotesIds}
                            pressInNote={pressInNote}
                            setPressInNote={setPressInNote}
                        />
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
});
