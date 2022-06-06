import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import CustomDrawer from "./DrawerMenu/CustomDrawer";
import customScreenOptions from "./DrawerMenu/customScreenOptions";
import IconBulb from "../common/IconJsx/IconBulb";
import IconArchive from "../common/IconJsx/IconArchive";
import ArchiveScreen from "../screens/ArchiveScreen/ArchiveScreen";
import AddPostScreen from "../screens/AddPostScreen/AddPostScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({
    notes,
    setNotes,
    archive,
    setArchive,
}) {
    return (
        <Drawer.Navigator
            id='Stack'
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={customScreenOptions}>
            <Drawer.Screen
                name='Home'
                options={{
                    drawerLabel: "Заметки",
                    drawerIcon: ({ color }) => <IconBulb fill={color} />,
                }}>
                {(props) => (
                    <HomeScreen
                        {...props}
                        notes={notes}
                        setNotes={setNotes}
                        archive={archive}
                        setArchive={setArchive}
                    />
                )}
            </Drawer.Screen>
            <Drawer.Screen
                name='AddPost'
                options={{
                    drawerItemStyle: {
                        height: 0,
                        padding: 0,
                        margin: 0,
                    },
                    drawerLabel: () => null,
                    drawerIcon: () => null,
                    title: null,
                }}>
                {(props) => (
                    <AddPostScreen
                        {...props}
                        setNotes={setNotes}
                        notes={notes}
                        archive={archive}
                        setArchive={setArchive}
                    />
                )}
            </Drawer.Screen>
            <Drawer.Screen
                name='Archive'
                options={{
                    drawerLabel: "Архив",
                    drawerIcon: ({ color }) => <IconArchive fill={color} />,
                }}>
                {(props) => (
                    <ArchiveScreen
                        {...props}
                        archive={archive}
                        setArchive={setArchive}
                        setNotes={setNotes}
                        notes={notes}
                    />
                )}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
}
