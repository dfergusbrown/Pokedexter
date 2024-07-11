import BackgroundPokedex from "@/components/BackgroundPokedex";
import { getAllPokemon } from "@/services/apiService";
import { Link, router, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Pressable,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface Pokemon {
  name: string;
  url: string;
}

const SearchScreen = () => {
  const [pokedata, setPokedata] = useState<Pokemon[]>([]);
  const [filteredResult, setFilteredResult] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await getAllPokemon();
        if (response.status === 200) {
          setPokedata(response.data.results);
          setFilteredResult(response.data.results);
          // console.log(response.data.results);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchPokemon();
  }, []);

  useEffect(() => {
    const filterPokemon = () => {
      const filteredData = pokedata.filter((item) => {
        return item.name.includes(searchTerm);
      });
      setFilteredResult(filteredData);
    };
    filterPokemon();
  }, [searchTerm]);

  const renderList: ListRenderItem<Pokemon> = ({ item }) => {
    const extractedId = item.url.split("/")[6];
    return (
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
        ]}
        onPress={() =>
          router.navigate(`/PokemonDetail/?name=${item.name}&id=${extractedId}`)
        }
      >
        <View style={styles.listItem}>
          <Text style={styles.listText}>{item.name}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <BackgroundPokedex>
      <View style={styles.inputContainer}>
        <TextInput
          value={searchTerm}
          onChangeText={setSearchTerm}
          style={styles.input}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList data={filteredResult} renderItem={renderList} />
      </View>
    </BackgroundPokedex>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: "75%",
    marginVertical: 10,
    marginLeft: -20,
    backgroundColor: "white",
    borderRadius: 5,
  },
  listItem: {
    padding: 4,
  },
  listText: {
    fontSize: 20,
  },
  inputContainer: {
    marginTop: 30,
    marginLeft: 50,
    width: "100%",
  },
  input: {
    height: 40,
    width: "75%",
    marginLeft: 15,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
});

export default SearchScreen;
