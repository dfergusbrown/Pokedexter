import { SpeechContext, SpeechContextComponent } from "@/contexts/SpeechContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Stack } from "expo-router";
import { useContext, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const getSpeechContext = () => useContext(SpeechContext)

export default function Layout() {
  // const [ttsEnabled, setTtsEnabled] = useState(true)

  return (
    <SpeechContextComponent>
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
    </SpeechContextComponent>
  );
}
