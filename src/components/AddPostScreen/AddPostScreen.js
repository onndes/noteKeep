import React from "react";
import { View, StyleSheet, Text } from "react-native";
import NavPanel from "./NavPanel";

export default function AddPostScreen({ navigation }) {
    return (
        <>
            <NavPanel navigation={navigation} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
