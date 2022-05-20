import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import uuid from "react-native-uuid";

import getColorApp from "../../../utils/colorApp";
import NavPanel from "./NavPanel";

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

    const onChangeTitle = (value) => setTitle(value);
    const onChangeText = (value) => setText(value);

    React.useEffect(() => {
        const unsubscribe = navigation.addListener("beforeRemove", () => {
            if (title.length || text.length) {
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
                    setNotes ([...notes, newNote]);
                }
            }
        });

        return unsubscribe;
    }, [navigation, title, text]);

    return (
        <View style={styles.container}>
            <NavPanel navigation={navigation} />
            <TextInput
                style={styles.inputTitle}
                placeholder='Название'
                placeholderTextColor={getColorApp().lightTwo}
                onChangeText={(title) => onChangeTitle(title)}
                value={title}
            />
            <TextInput
                multiline={true}
                style={styles.text}
                placeholder='Текст'
                placeholderTextColor={getColorApp().lightTwo}
                onChangeText={(text) => onChangeText(text)}
                value={text}
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
        color: getColorApp().light,
        marginBottom: 12,
    },
    text: {
        fontSize: 18,
        color: getColorApp().light,
        marginBottom: 12,
    },
});
