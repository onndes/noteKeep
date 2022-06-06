import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";

import getColorApp from "../../../utils/colorApp";
import NotesList from "../../components/NoteList/NotesList";
import OptionsPanel from "../../components/OptionsPanel/OptionsPanel";
import ArchiveOptionsPanel from "./ArchiveOptionsPanel";
import image from "../../common/oldBooks.jpg";

const colorApp = getColorApp();

export default function ArchiveScreen({
    navigation,
    archive,
    setArchive,
    notes,
    setNotes,
}) {
    const [selectedArchiveNotesIds, setSelectedArchiveNotesIds] =
        React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={image} style={styles.bg}></ImageBackground>
            {!selectedArchiveNotesIds.length ? (
                <ArchiveOptionsPanel
                    navigation={navigation}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    selectedNotesIds={selectedArchiveNotesIds}
                    setSelectedNotesIds={setSelectedArchiveNotesIds}
                    archive={archive}
                    setArchive={setArchive}
                />
            ) : (
                <OptionsPanel
                    selectedItemsIds={selectedArchiveNotesIds}
                    setSelectedItemsIds={setSelectedArchiveNotesIds}
                    items={archive}
                    setItems={setArchive}
                    isOptions={{ delete: true, getOutArchive: true }}
                    isArchive
                    secondItems={notes}
                    setSecondItems={setNotes}
                />
            )}
            {archive && !!archive.length ? (
                <View style={{ flex: 1 }}>
                    <NotesList
                        notes={archive}
                        setNotes={setArchive}
                        selectedNotesIds={selectedArchiveNotesIds}
                        setSelectedNotesIds={setSelectedArchiveNotesIds}
                        navigation={navigation}
                        searchValue={searchValue}
                        isArchive
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
