import { useFonts } from "expo-font";
import { Button, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { Link, router } from "expo-router";

export default function Index() {
  const navigateSearch = () => {
    router.navigate('/SearchScreen')
  }

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
        <View style={styles.button}>
          <Button title="start" onPress={() => router.navigate('/SearchScreen')}></Button>
          {/* <Pressable style={styles.button} >
            <Feather name="power" size={50} color="yellow"/>
          </Pressable> */}
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
  },
  button: {
    // backgroundColor: 'red',
    // borderRadius: 50,
    margin: 100
  }
});
