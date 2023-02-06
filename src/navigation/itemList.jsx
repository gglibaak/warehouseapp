import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Categories, HomeScreen, Items} from '../screens/index';

const Stack = createNativeStackNavigator();

const ItemListNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen
             name="HomeScreen"
             component={HomeScreen}
             options={{
                headerShown: false,
             }} />
            <Stack.Screen name="Items" component={Items} />
        </Stack.Navigator>
    )
}


export default ItemListNavigator;