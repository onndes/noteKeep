import React from "react";
import { StyleSheet } from "react-native";
import ButtonAddNote from "./ButtonAddNote";
import SearchPanel from "./SearchPanel";

export default function HomeScreen({ navigation }) {
    return (
        <>
            <SearchPanel />
            <ButtonAddNote navigation={navigation} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
