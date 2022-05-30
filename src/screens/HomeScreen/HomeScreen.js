import React from "react";
import { View } from "react-native";

import ButtonAddNote from "./ButtonAddNote";
import NotesList from "../../components/NoteList/NotesList";
import OptionsPanel from "../../components/OptionsPanel/OptionsPanel";
import HomeSearchPanel from "./HomeSearchPanel";

export default function HomeScreen({
    navigation,
    notes,
    setNotes,
    archive,
    setArchive,
}) {
    const [selectedNotesIds, setSelectedNotesIds] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");

    return (
        <>
            {!selectedNotesIds.length ? (
                <View style={{ paddingRight: 15, paddingLeft: 15 }}>
                    <HomeSearchPanel
                        navigation={navigation}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                </View>
            ) : (
                <OptionsPanel
                    items={notes}
                    setItems={setNotes}
                    selectedItemsIds={selectedNotesIds}
                    setSelectedItemsIds={setSelectedNotesIds}
                    secondItems={archive}
                    setSecondItems={setArchive}
                    isOptions={{ archive: true, delete: true, copy: true }}
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
