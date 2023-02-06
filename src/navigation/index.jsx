import { NavigationContainer } from "@react-navigation/native";

import ItemListNavigator  from "./itemList";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <ItemListNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;