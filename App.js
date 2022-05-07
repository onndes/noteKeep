import { StyleSheet, Text, View, StatusBar } from "react-native";
import getColorApp from "./assets/colorApp";
import SearchPanel from "./src/components/SearchPanel/SearchPanel";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={getColorApp().backgroundMain}
                barStyle='light-content'
            />

            <View style={styles.wrapper}>
                <SearchPanel />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: getColorApp().backgroundMain,
    },
    wrapper: {
        paddingTop: 15,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
});

