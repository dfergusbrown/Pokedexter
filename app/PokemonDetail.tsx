import BackgroundPokedex from "@/components/BackgroundPokedex";
import { getPokemonById } from "@/services/apiService";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type PokemonDetailRouteParams = {
  PokemonDetail: {
    name: string;
    id: string;
  };
};

const PokemonDetail = () => {
  const route =
    useRoute<RouteProp<PokemonDetailRouteParams, "PokemonDetail">>();
  const { name, id } = route.params;
  const [pokemonData, setPokemonData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await getPokemonById(id);
        if (response.status === 200) {
          // console.log(response.data);
          setPokemonData(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPokemonData();
  }, []);

  return (
    <BackgroundPokedex>
      {loading ? (
        <View>
          <Text>LOADING</Text>
        </View>
      ) : (
        <View style={styles.detailContainer}>
          <Image
            source={{
              uri: `${pokemonData.sprites.front_default}`
            }}
            style={styles.sprite}
          />
          <Text>{name}</Text>
        </View>
      )}
    </BackgroundPokedex>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    width: "75%",
    marginTop: 140,
    marginLeft: -20,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  sprite: {
    height: 150,
    width: 150,
  },
});

export default PokemonDetail;
