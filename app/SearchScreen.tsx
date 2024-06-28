import BackgroundPokedex from "@/components/BackgroundPokedex";
import { getAllPokemon } from "@/services/apiService";
import { useEffect, useState } from "react";
import { Text, View, FlatList, ListRenderItem } from "react-native";

interface Pokemon {
  name: string;
  url: string;
}

const SearchScreen = () => {
  const [pokedata, setPokedata] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await getAllPokemon();
      if (response.status === 200) {
        setPokedata(response.data.results);
        console.log(response.data.results);
      }
    }
    fetchPokemon();
  }, []);

  const renderList: ListRenderItem<Pokemon> = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <BackgroundPokedex>
      <View
        style={{
          flex: 1,
          width: '70%',
          marginTop: 150,
          backgroundColor: 'white'
        }}
      >
        <FlatList data={pokedata} renderItem={renderList} />
      </View>
    </BackgroundPokedex>
  );
};

export default SearchScreen;
