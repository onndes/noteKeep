import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

import getColorApp from "../../../utils/colorApp";
import NavPanel from "./NavPanel";

export default function AddPostScreen({ navigation, setNotes: setNoteApp }) {
    const [title, setTitle] = React.useState("");
    const [text, setText] = React.useState("");
    const [notes, setNotes] = React.useState([]);

    const { getItem, setItem } = useAsyncStorage("notes");

    const onChangeTitle = (value) => setTitle(value);
    const onChangeText = (value) => setText(value);

    const readItemFromStorage = async () => {
        const item = await getItem();
        const value = item ? JSON.parse(item) : [];
        setNotes(value);
    };

    React.useEffect(() => {
        const unsubscribe = navigation.addListener("beforeRemove", () => {
            if (title.length || text.length) {
                const id = uuid.v4();
                const newNote = {
                    id,
                    title,
                    text,
                };
             
                writeItemToStorage(JSON.stringify([...notes, newNote]));
                setNoteApp([...notes, newNote]);
            }
        });

        return unsubscribe;
    }, [navigation, title, text]);

    React.useEffect(() => {
        readItemFromStorage();
    }, []);

    const writeItemToStorage = async (newValue) => {
        await setItem(newValue);
    };

    return (
        <>
            <NavPanel navigation={navigation} />
            <TextInput
                style={styles.inputTitle}
                placeholder='Название'
                placeholderTextColor={getColorApp().lightTwo}
                onChangeText={(title) => onChangeTitle(title)}
                value={title}
            />
            <TextInput
                style={styles.text}
                placeholder='Текст'
                placeholderTextColor={getColorApp().lightTwo}
                onChangeText={(text) => onChangeText(text)}
                value={text}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
    inputTitle: {
        fontSize: 24,
        color: getColorApp().light,
        marginBottom: 12,
    },
    text: {
        fontSize: 18,
        color: getColorApp().light,
        marginBottom: 12,
    },
});
