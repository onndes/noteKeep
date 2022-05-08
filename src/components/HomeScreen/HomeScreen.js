import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ButtonAddNote from "../ButtonAddNote/ButtonAddNote";
import SearchPanel from "../SearchPanel/SearchPanel";

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
