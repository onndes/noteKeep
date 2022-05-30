import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import getColorApp from "../../../utils/colorApp";
import NotesList from "../HomeScreen/NotesList";
import OptionsPanel from "../HomeScreen/OptionsPanel";
import SearchPanel from "./SearchPanel";
import image from "../../common/oldBooks.jpg";
const colorApp = getColorApp();

export default function ArchiveScreen({
    navigation,
    archive,
    setArchive,
    notes,
    setNotes,
}) {
    const [selectedNotesIds, setSelectedNotesIds] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={image} style={styles.bg}></ImageBackground>
            {!selectedNotesIds.length ? (
                <SearchPanel
                    navigation={navigation}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    selectedNotesIds={selectedNotesIds}
                    setSelectedNotesIds={setSelectedNotesIds}
                    archive={archive}
                    setArchive={setArchive}
                />
            ) : (
                <OptionsPanel
                    selectedNotesIds={selectedNotesIds}
                    setSelectedNotesIds={setSelectedNotesIds}
                    notes={archive}
                    setNotes={setArchive}
                    isOption={{ delete: true, getOutArchive: true }}
                    isArchive
                    archive={notes}
                    setArchive={setNotes}
                />
            )}
            {archive && !!archive.length ? (
                <View style={{ flex: 1 }}>
                    <NotesList
                        notes={archive}
                        setNotes={setArchive}
                        selectedNotesIds={selectedNotesIds}
                        setSelectedNotesIds={setSelectedNotesIds}
                        navigation={navigation}
                        searchValue={searchValue}
                    />
                </View>
            ) : (
                <Text style={styles.archiveEmptyText}>Архив пуст</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: `rgba(0, 0, 0, 1)`,
        zIndex: -2,
        elevation: -1,
        opacity: 0.2,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        zIndex: -2,
        elevation: -2,
        opacity: 0.1,
    },
    archiveEmptyText: {
        color: colorApp.lightTwo,
        fontSize: 18,
        paddingHorizontal: 12,
    },
});
