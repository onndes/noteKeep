import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import IconArrow from "../../common/IconJsx/IconArrow";

export default function NavPanel({ navigation: { navigate } }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigate("Home")}>
                <IconArrow color='white' />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginBottom: 16 },
});
