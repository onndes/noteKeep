// import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, View } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";

import getColorApp from "./utils/colorApp";
import HomeScreen from "./src/components/HomeScreen/HomeScreen";
import CustomDrawer from "./src/components/DrawerMenu/CustomDrawer";
import customScreenOptions from "./src/components/DrawerMenu/customScreenOptions";
import IconBulb from "./src/common/IconJsx/IconBulb";
import IconArchive from "./src/common/IconJsx/IconArchive";
import ArchiveScreen from "./src/components/ArchiveScreen/ArchiveScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPostScreen from "./src/components/AddPostScreen/AddPostScreen";

const Drawer = createDrawerNavigator();

const colorApp = getColorApp();
const Stack = createNativeStackNavigator();
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
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const { getItem: getNotesStorage, setItem: setNotesStorage } =
        useAsyncStorage("notes");

    const readNotes = async () => {
        const notesJson = await getNotesStorage();
        const notes = notesJson ? JSON.parse(notesJson) : [];
        setNotes(notes);
    };

    const writeNotes = async (updatedNotes) => {
        await setNotesStorage(JSON.stringify(updatedNotes));
    };

    React.useEffect(() => {
        readNotes();
    }, []);

    React.useEffect(() => {
        writeNotes(notes);
    }, [notes]);

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
                                    openDrawer={openDrawer}
                                    setOpenDrawer={setOpenDrawer}
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
