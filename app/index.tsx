import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
      }}
    >
      <ImageBackground 
      source={require('../assets/images/pokedex_background.jpg')}
      style={styles.backgroundImage}
      resizeMode="stretch"
      >
        {/* <Text>Edit app/index.tsx to edit this screen.</Text> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%', // Ensures the image stretches to the width of the container
    height: '100%', // Ensures the image stretches to the height of the container
  },
});
