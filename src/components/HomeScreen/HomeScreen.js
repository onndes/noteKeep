import React from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";

import ButtonAddNote from "./ButtonAddNote";
import NotesList from "./NotesList";
import OptionsPanel from "./OptionsPanel";
import SearchPanel from "./SearchPanel";
import DrawerMenu from "../DrawerMenu/DrawerMenu";

export default function HomeScreen({
    navigation,
    notes,
    setNotes,
    setOpenDrawer,
    archive,
    setArchive,
}) {
    const [selectedNotesIds, setSelectedNotesIds] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");

    return (
        <>
            {!selectedNotesIds.length ? (
                <View style={{ paddingRight: 15, paddingLeft: 15 }}>
                    <SearchPanel
                        setOpenDrawer={setOpenDrawer}
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
                    archive={archive}
                    setArchive={setArchive}
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
