import React from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { View } from "react-native";

import ButtonAddNote from "./ButtonAddNote";
import NotesList from "./NotesList";
import OptionsPanel from "./OptionsPanel";
import getColorApp from "../../../utils/colorApp";
import SearchPanel from "./SearchPanel";

export default function HomeScreen({ navigation, notes, setNotes }) {
    const [selectedNotesIds, setSelectedNotesIds] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");

    return (
        <>
            {!selectedNotesIds.length ? (
                <View style={{ paddingRight: 15, paddingLeft: 15 }}>
                    <SearchPanel
                        navigation={navigation}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                </View>
            ) : (
                <OptionsPanel
                    notes={notes}
                    setNotes={setNotes}
                    selectedNotesIds={selectedNotesIds}
                    setSelectedNotesIds={setSelectedNotesIds}
                />
            )}
            <View style={{ flex: 1 }}>
                <NotesList
                    notes={notes}
                    setNotes={setNotes}
                    selectedNotesIds={selectedNotesIds}
                    setSelectedNotesIds={setSelectedNotesIds}
                    navigation={navigation}
                    searchValue={searchValue}
                />
            </View>
            <ButtonAddNote
                navigation={navigation}
                setSelectedNotesIds={setSelectedNotesIds}
            />
        </>
    );
}
