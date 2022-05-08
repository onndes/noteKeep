import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import IconArrow from "../../common/IconJsx/IconArrow";

export default function NavPanel({ navigation }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate("Home")}>
                <IconArrow color='white' />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
});
