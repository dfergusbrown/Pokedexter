import React, { ReactNode } from "react";
import { ImageBackground, View, Text, Button, StyleSheet } from "react-native";

interface BackgroundPokedexProps {
  children: ReactNode;
}

const BackgroundPokedex: React.FC<BackgroundPokedexProps> = ({ children }) => {
  const lightColors = ["red", "yellow", "green"];

  return (
    <ImageBackground
      source={require("../assets/images/pokedex_background.jpg")}
      style={{
        flex: 1,
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
      resizeMode="stretch"
    >
      <View style={styles.container}>
        <View style={styles.whiteBorder}>
          <View style={styles.blueLight}></View>
        </View>
        {lightColors.map((color, idx) => (
          <View
            key={idx}
            style={{
              backgroundColor: color,
              height: 20,
              width: 20,
              borderRadius: 50,
              borderWidth: 2,
              margin: 5,
              marginTop: 25,
            }}
          ></View>
        ))}
      </View>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
    flexDirection: "row",
  },
  whiteBorder: {
    backgroundColor: "white",
    height: 70,
    width: 70,
    borderRadius: 50,
    margin: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  blueLight: {
    backgroundColor: "#53b1fe",
    height: "80%",
    width: "80%",
    borderRadius: 50,
    borderWidth: 1,
  },
});

export default BackgroundPokedex;
