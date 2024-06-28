import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Index from "./index";
import SearchScreen from "./SearchScreen";
import { BlurView } from "expo-blur";
import { Stack } from "expo-router";
import { ImageBackground, View, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="SearchTabs" />
    </Stack>
  );
}