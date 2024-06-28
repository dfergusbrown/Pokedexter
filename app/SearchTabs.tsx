import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./SearchScreen";
import { Text, View } from "react-native";
import PokemonDetail from "./PokemonDetail";

const Tab = createBottomTabNavigator();

export default function SearchTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: "absolute", backgroundColor: "#d11d38" },
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "yellow",
        // tabBarBackground: () => (
        //   <BlurView tint="light" intensity={100} />
        // ),
      }}
    >
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="PokemonDetail" component={PokemonDetail}/>
    </Tab.Navigator>
  );
}
