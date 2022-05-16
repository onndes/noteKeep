import React from "react";

import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import ButtonAddNote from "./ButtonAddNote";
import SearchPanel from "./SearchPanel";
import NotesList from "./NotesList";
import OptionsPanel from "./OptionsPanel";
import getColorApp from "../../../utils/colorApp";
import { View } from "react-native";

export default function HomeScreen({ navigation }) {
    const [selectedNotes, setSelectedNotes] = React.useState([]);

    const { setItem: setItemToggleAppBar } = useAsyncStorage("toggleAppBar");

    React.useEffect(() => {
        if (!selectedNotes.length) {
            handleSetItemToggleAppBar();
        }
    }, [selectedNotes]);

    const handleSetItemToggleAppBar = async () => {
        await setItemToggleAppBar("backgroundAction");
    };

    return (
        <>
            {!selectedNotes.length ? (
                <View style={{ paddingRight: 15, paddingLeft: 15 }}>
                    <SearchPanel />
                </View>
            ) : (
                <OptionsPanel setSelectedNotes={setSelectedNotes} />
            )}
            <View style={{ paddingRight: 15, paddingLeft: 15 }}>
                <NotesList
                    selectedNotes={selectedNotes}
                    setSelectedNotes={setSelectedNotes}
                />
            </View>
            <ButtonAddNote navigation={navigation} />
        </>
    );
}
