// import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage, {
    useAsyncStorage,
} from "@react-native-async-storage/async-storage";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import getColorApp from "./utils/colorApp";
import DrawerNavigator from "./src/components/DrawerNavigator";

const colorApp = getColorApp();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "rgb(255, 45, 85)",
        background: colorApp.backgroundMain,
    },
};

export default function App() {
    const [notes, setNotes] = React.useState([]);
    const [archive, setArchive] = React.useState([]);

    const { getItem: getNotesStorage, setItem: setNotesStorage } =
        useAsyncStorage("notes");
    const { getItem: getArchiveStorage, setItem: setArchiveStorage } =
        useAsyncStorage("archive");

    const readNotes = async () => {
        const notesJson = await getNotesStorage();
        const notes = notesJson ? JSON.parse(notesJson) : [];
        setNotes(notes);
    };
    const readArchive = async () => {
        const archiveJson = await getArchiveStorage();
        const archive = archiveJson ? JSON.parse(archiveJson) : [];
        setArchive(archive);
    };

    const writeNotes = async (updatedNotes) => {
        await setNotesStorage(JSON.stringify(updatedNotes));
    };
    const writeArchive = async (updatedArchive) => {
        await setArchiveStorage(JSON.stringify(updatedArchive));
    };

    React.useEffect(() => {
        readNotes();
    }, []);
    React.useEffect(() => {
        readArchive();
    }, []);

    React.useEffect(() => {
        writeNotes(notes);
    }, [notes]);
    React.useEffect(() => {
        writeArchive(archive);
    }, [archive]);

    const clearAsyncStorage = async () => {
        AsyncStorage.clear();
    };

    return (
        <NavigationContainer theme={MyTheme}>
            <View style={styles.container}>
                <StatusBar style='light' />
                <View style={styles.wrapper}>
                    <DrawerNavigator
                        notes={notes}
                        setNotes={setNotes}
                        archive={archive}
                        setArchive={setArchive}
                    />
                </View>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorApp.backgroundMain,
    },
    wrapper: {
        flex: 1,
    },
});
