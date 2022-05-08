import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, StyleSheet, View } from "react-native";
import getColorApp from "./assets/colorApp";
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

export default function App() {
    return (
        <NavigationContainer theme={MyTheme}>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={getColorApp().backgroundMain}
                    barStyle='light-content'
                />
                <View style={styles.wrapper}>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                            backgroundColor: getColorApp().backgroundMain,
                        }}>
                        <Stack.Screen name='Home' component={HomeScreen} />
                        <Stack.Screen
                            name='AddPost'
                            component={AddPostScreen}
                        />
                    </Stack.Navigator>
                </View>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: getColorApp().backgroundMain,
    },
    wrapper: {
        flex: 1,
        paddingTop: 15,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
});

