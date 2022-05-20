import React from "react";

import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import ButtonAddNote from "./ButtonAddNote";
import SearchPanel from "./SearchPanel";
import NotesList from "./NotesList";
import OptionsPanel from "./OptionsPanel";
import getColorApp from "../../../utils/colorApp";
import { View } from "react-native";

export default function HomeScreen({ navigation, notes, setNotes }) {
    const [selectedNotes, setSelectedNotes] = React.useState([]);

    const { setItem: setItemToggleAppBar } = useAsyncStorage("colorAppBar");

    React.useEffect(() => {
        if (!!selectedNotes.length) {
            handleSetItemToggleAppBar(getColorApp().backgroundAction);
        } else {
            handleSetItemToggleAppBar(getColorApp().backgroundMain);
        }
    }, [selectedNotes]);

    const handleSetItemToggleAppBar = async (color) => {
        await setItemToggleAppBar(color);
    };

    return (
        <>
            {!selectedNotes.length ? (
                <View style={{ paddingRight: 15, paddingLeft: 15 }}>
                    <SearchPanel />
                </View>
            ) : (
                <OptionsPanel
                    notes={notes}
                    setNotes={setNotes}
                    selectedNotes={selectedNotes}
                    setSelectedNotes={setSelectedNotes}
                />
            )}
            <View style={{ flex: 1 }}>
                <NotesList
                    notes={notes}
                    setNotes={setNotes}
                    selectedNotes={selectedNotes}
                    setSelectedNotes={setSelectedNotes}
                    navigation={navigation}
                />
            </View>
            <ButtonAddNote
                navigation={navigation}
                setSelectedNotes={setSelectedNotes}
            />
        </>
    );
}
