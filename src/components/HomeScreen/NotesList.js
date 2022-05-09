import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import getColorApp from "../../../assets/colorApp";

export default function NotesList() {
    const [notes, setNotes] = React.useState([]);
    const { getItem: getItemNotes } = useAsyncStorage("notes");

    const readItemFromStorage = async () => {
        const notesItem = await getItemNotes();
        const notesValue = notesItem ? JSON.parse(notesItem) : [];
        setNotes(notesValue);
    };

    React.useEffect(() => {
        readItemFromStorage();
    }, [notes]);

    return (
        <View>
            {!!notes.length ? (
                notes.map((note) => {
                    return (
                        <View key={note.id} style={styles.noteContainer}>
                            <Text style={styles.title}>{note.title}</Text>
                            <Text style={styles.text}>{note.text}</Text>
                        </View>
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
});
