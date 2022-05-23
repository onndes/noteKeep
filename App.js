// import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage, {
    useAsyncStorage,
} from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import getColorApp from "./utils/colorApp";
import HomeScreen from "./src/components/HomeScreen/HomeScreen";
import AddPostScreen from "./src/components/AddPostScreen/AddPostScreen";
import DrawerMenu from "./src/components/DrawerMenu/DrawerMenu";

import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();
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
                    <Stack.Navigator
                        id='Stack'
                        screenOptions={{
                            headerShown: false,
                            backgroundColor: colorApp.backgroundMain,
                        }}>
                        <Stack.Screen name='Home'>
                            {(props) => (
                                <HomeScreen
                                    {...props}
                                    notes={notes}
                                    setNotes={setNotes}
                                />
                            )}
                        </Stack.Screen>
                        <Stack.Screen name='AddPost'>
                            {(props) => (
                                <AddPostScreen
                                    {...props}
                                    setNotes={setNotes}
                                    notes={notes}
                                />
                            )}
                        </Stack.Screen>
                    </Stack.Navigator>
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
