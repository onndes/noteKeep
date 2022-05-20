import React from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, StyleSheet, View } from "react-native";
import getColorApp from "./utils/colorApp";

import AddPostScreen from "./src/components/AddPostScreen/AddPostScreen";
import HomeScreen from "./src/components/HomeScreen/HomeScreen";

const Stack = createNativeStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "rgb(255, 45, 85)",
        background: getColorApp().backgroundMain,
    },
};

const colorApp = getColorApp();

export default function App() {
    const [notes, setNotes] = React.useState([]);

    const [colorAppBar, setColorAppBar] = React.useState(
        colorApp.backgroundMain,
    );

    const { getItem: getNotesStorage, setItem: setNotesStorage } =
        useAsyncStorage("notes");
    const { getItem: getColorAppBar } = useAsyncStorage("colorAppBar");

    const readColorAppBar = async () => {
        const color = await getColorAppBar();
        setColorAppBar(color);
    };

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

    React.useEffect(() => {
        const timerReadColorAppBar = setInterval(() => {
            readColorAppBar();
        }, 100);
        return () => {
            clearInterval(timerReadColorAppBar);
        };
    }, []);

    return (
        <NavigationContainer theme={MyTheme}>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={colorAppBar}
                    barStyle='light-content'
                />

                <View style={styles.wrapper}>
                    <Stack.Navigator
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
