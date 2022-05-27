import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import uuid from "react-native-uuid";

import getColorApp from "../../../utils/colorApp";
import NavPanel from "./NavPanel";
import { useIsFocused } from "@react-navigation/native";

const colorApp = getColorApp();

export default function AddPostScreen({
    navigation,
    route: { params },
    notes,
    setNotes,
}) {
    const [title, setTitle] = React.useState(
        params?.titleEditableNote ? params.titleEditableNote : "",
    );
    const [text, setText] = React.useState(
        params?.textEditableNote ? params.textEditableNote : "",
    );
    const isFocused = useIsFocused();
    const onChangeTitle = (value) => setTitle(value);
    const onChangeText = (value) => setText(value);

    React.useEffect(() => {
        if (isFocused) {
            setTitle(params?.titleEditableNote);
            setText(params?.textEditableNote);
        }
    }, []);

    React.useEffect(() => {
        const unsubscribe = navigation.addListener("blur", () => {
            if (
                (title && title.trim().length) ||
                (text && text.trim().length)
            ) {
                const id = params?.idEditNote ? params.idEditNote : uuid.v4();
                const newNote = {
                    id,
                    title,
                    text,
                };
                if (params?.idEditNote) {
                    const updateNotes = notes.map((note) => {
                        if (note.id === params.idEditNote) {
                            return newNote;
                        }
                        return note;
                    });
                    setNotes(updateNotes);
                } else {
                    setNotes([...notes, newNote]);
                }
            }
            setTitle("");
            setText("");
            navigation.setParams({
                titleEditableNote: "",
                textEditableNote: "",
                idEditNote: null,
            });
        });
        return unsubscribe;
    }, [navigation, title, text]);

    return (
        <View style={styles.container}>
            <NavPanel navigation={navigation} />
            <TextInput
                multiline={true}
                maxLength={50}
                style={styles.inputTitle}
                placeholder='Название'
                placeholderTextColor={colorApp.lightTwo}
                onChangeText={(title) => {
                    onChangeTitle(title);
                    onChangeText(text || params?.textEditableNote);
                }}
                value={title || params?.titleEditableNote}
            />
            <TextInput
                multiline={true}
                style={styles.text}
                placeholder='Текст'
                placeholderTextColor={colorApp.lightTwo}
                onChangeText={(text) => {
                    onChangeText(text);
                    onChangeTitle(title || params?.titleEditableNote);
                }}
                value={text || params?.textEditableNote}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    inputTitle: {
        fontSize: 24,
        color: colorApp.light,
        marginBottom: 12,
    },
    text: {
        fontSize: 18,
        color: getColorApp().light,
        marginBottom: 12,
    },
});
