import { useFonts } from "expo-font";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Index() {

  const [loaded] = useFonts({
    DeluxePaintComic: require('../assets/fonts/dpcomic/dpcomic.ttf'),
    RexliaFree: require('../assets/fonts/rexlia-free/rexliarg.otf')
  })

  if (!loaded) {
    return (
      <Text>Loading</Text>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
      source={require('../assets/images/pokedex_background.jpg')}
      style={styles.backgroundImage}
      resizeMode="stretch"
      >
        <View style={styles.grayScreen}>
          <Text style={styles.textTitle}>Pokedexter</Text>
        </View>
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
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  grayScreen: {
    height: '30%',
    width: '60%',
    marginTop: '45%',
    backgroundColor: 'silver',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontFamily: 'RexliaFree',
    fontSize: 25
  }
});
