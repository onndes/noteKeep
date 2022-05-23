import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import getColorApp from "../../../utils/colorApp";
import AddPostScreen from "../AddPostScreen/AddPostScreen";
import HomeScreen from "../HomeScreen/HomeScreen";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function DrawerMenu({ notes, setNotes }) {
    return (
        <Drawer.Navigator
            id='Drawer'
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: getColorApp().backgroundDrawerMenu,
                    width: 240,
                },
            }}>
            <Stack.Screen name='Home'>
                {(props) => (
                    <HomeScreen {...props} notes={notes} setNotes={setNotes} />
                )}
            </Stack.Screen>
            <Drawer.Screen name='AddPost'>
                {(props) => (
                    <AddPostScreen
                        {...props}
                        setNotes={setNotes}
                        notes={notes}
                    />
                )}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
}
