import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import getColorApp from "../../../assets/colorApp";

export default function NotesList() {
    const [notes, setNotes] = React.useState([]);
    const [selectedNotes, setSelectedNotes] = React.useState([]);
    const [pressInNote, setPressInNote] = React.useState(null);
    const { getItem: getItemNotes } = useAsyncStorage("notes");

    const readItemFromStorage = async () => {
        const notesItem = await getItemNotes();
        const notesValue = notesItem ? JSON.parse(notesItem) : [];
        setNotes(notesValue);
    };

    React.useEffect(() => {
        readItemFromStorage();
    }, []);

    const handlePressNote = (noteId) => {
        setSelectedNotes(selectedNotes.filter((id) => id !== noteId));
    };

    return (
        <View>
            {!!notes.length ? (
                notes.map((note) => {
                    const selectedStyle =
                        selectedNotes.find((id) => id === note.id) &&
                        styles.noteContainerSelected;

                    const pressInStyle =
                        pressInNote === note.id && styles.notePressIn;
                    return (
                        <Pressable
                            key={note.id}
                            onLongPress={() =>
                                setSelectedNotes([...selectedNotes, note.id])
                            }
                            onPress={() => handlePressNote(note.id)}
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
                <Text style={{ color: "white" }}>нет записей</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    title: { color: "white", fontSize: 17 },
    text: { color: "white", fontSize: 15 },
    noteContainer: {
        padding: 16,
        borderColor: getColorApp().lightTwo,
        borderWidth: 1,
        borderRadius: 18,
        marginBottom: 12,
    },
    noteContainerSelected: {
        borderWidth: 3,
        borderColor: getColorApp().selected,
    },
    notePressIn: {
        backgroundColor: getColorApp().pressIn,
    },
});
