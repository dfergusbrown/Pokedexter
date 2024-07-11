import BackgroundPokedex from "@/components/BackgroundPokedex";
import { getPokemonById, getSpeciesbyId } from "@/services/apiService";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

type PokemonDetailRouteParams = {
  PokemonDetail: {
    name: string;
    id: string;
  };
};

interface Ability {
  name: string;
  url: string;
}

interface AbilityEntry {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

const PokemonDetail = () => {
  const route =
    useRoute<RouteProp<PokemonDetailRouteParams, "PokemonDetail">>();
  const { name, id } = route.params;
  const [pokemonData, setPokemonData] = useState<any>();
  const [speciesData, setSpeciesData] = useState<any>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await getPokemonById(id);
        if (response.status === 200) {
          // console.log(response.data);
          return response.data
        }
      } catch (error) {
        console.error(error);
      }
    };
    const fetchSpeciesData = async () => {
      try {
        const response = await getSpeciesbyId(id)
        if (response.status === 200) {
          console.log(response.data)
          return response.data
        }
      } catch (error) {
        console.error(error)
      }
    }
    const fetchAllData = async () => {
      const pokemonResponse = await fetchPokemonData()
      const speciesResponse = await fetchSpeciesData()
      setPokemonData(pokemonResponse)
      setSpeciesData(speciesResponse)
      setLoading(false)
    }
    fetchAllData()
  }, []);

  return (
    <BackgroundPokedex>
      {loading ? (
        <View>
          <Text>LOADING</Text>
        </View>
      ) : (
        <>
          <View style={styles.detailContainer}>
            <Image
              source={{
                // uri: `${pokemonData.sprites.front_default}`
                uri: `${pokemonData.sprites.other["home"].front_default}`,
              }}
              style={styles.sprite}
            />
          </View>
          <ScrollView>
            <Text style={{ fontSize: 30, textAlign: "right" }}>{name}</Text>
            <Text>Type: {pokemonData.types[0].type.name}</Text>
            <View>
              <Text>Abilities:{" "}</Text>
              {pokemonData.abilities.map((entry: AbilityEntry, idx: number) => (
                <Text key={idx}>{entry.ability.name}</Text>
              ))}
            </View>
            <Text>{speciesData.flavor_text_entries[0].flavor_text}</Text>
          </ScrollView>
        </>
      )}
    </BackgroundPokedex>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    height: "30%",
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginLeft: -20,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "grey",
  },
  sprite: {
    height: "100%",
    width: "70%",
    margin: 0,
    padding: 0,
  },
});

export default PokemonDetail;
