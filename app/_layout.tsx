import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="SearchTabs" />
      </Stack>
    </GestureHandlerRootView>
  );
}
