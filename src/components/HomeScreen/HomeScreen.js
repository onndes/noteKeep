import React from "react";

import ButtonAddNote from "./ButtonAddNote";
import SearchPanel from "./SearchPanel";
import NotesList from "./NotesList";

export default function HomeScreen({ navigation }) {
    return (
        <>
            <SearchPanel />
            <ButtonAddNote navigation={navigation} />
            <NotesList />
        </>
    );
}
