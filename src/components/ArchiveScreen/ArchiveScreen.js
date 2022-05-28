import React from "react";
import { View, StyleSheet, Text } from "react-native";
import getColorApp from "../../../utils/colorApp";
import NotesList from "../HomeScreen/NotesList";
import SearchPanel from "./SearchPanel";

const colorApp = getColorApp();

export default function ArchiveScreen({ navigation, archive, setArchive }) {
    const [selectedNotesIds, setSelectedNotesIds] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");

    return (
        <>
            <SearchPanel navigation={navigation} searchValue={searchValue} />
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
        </>
    );
}

const styles = StyleSheet.create({
    archiveEmptyText: {
        color: colorApp.lightTwo,
        fontSize: 18,
        paddingHorizontal: 12,
    },
});
