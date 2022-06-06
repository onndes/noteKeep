// import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage, {
    useAsyncStorage,
} from "@react-native-async-storage/async-storage";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";

import getColorApp from "./utils/colorApp";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import CustomDrawer from "./src/components/DrawerMenu/CustomDrawer";
import customScreenOptions from "./src/components/DrawerMenu/customScreenOptions";
import IconBulb from "./src/common/IconJsx/IconBulb";
import IconArchive from "./src/common/IconJsx/IconArchive";
import ArchiveScreen from "./src/screens/ArchiveScreen/ArchiveScreen";
import AddPostScreen from "./src/screens/AddPostScreen/AddPostScreen";

const Drawer = createDrawerNavigator();

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
                    <Drawer.Navigator
                        id='Stack'
                        drawerContent={(props) => <CustomDrawer {...props} />}
                        screenOptions={customScreenOptions}>
                        <Drawer.Screen
                            name='Home'
                            options={{
                                drawerLabel: "Заметки",
                                drawerIcon: ({ color }) => (
                                    <IconBulb fill={color} />
                                ),
                            }}>
                            {(props) => (
                                <HomeScreen
                                    {...props}
                                    notes={notes}
                                    setNotes={setNotes}
                                    archive={archive}
                                    setArchive={setArchive}
                                />
                            )}
                        </Drawer.Screen>
                        <Drawer.Screen
                            name='AddPost'
                            options={{
                                drawerItemStyle: {
                                    height: 0,
                                    padding: 0,
                                    margin: 0,
                                },
                                drawerLabel: () => null,
                                drawerIcon: () => null,
                                title: null,
                            }}>
                            {(props) => (
                                <AddPostScreen
                                    {...props}
                                    setNotes={setNotes}
                                    notes={notes}
                                    archive={archive}
                                    setArchive={setArchive}
                                />
                            )}
                        </Drawer.Screen>
                        <Drawer.Screen
                            name='Archive'
                            options={{
                                drawerLabel: "Архив",
                                drawerIcon: ({ color }) => (
                                    <IconArchive fill={color} />
                                ),
                            }}>
                            {(props) => (
                                <ArchiveScreen
                                    {...props}
                                    archive={archive}
                                    setArchive={setArchive}
                                    setNotes={setNotes}
                                    notes={notes}
                                />
                            )}
                        </Drawer.Screen>
                    </Drawer.Navigator>
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
