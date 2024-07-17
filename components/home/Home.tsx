import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { useEffect, useState } from "react";

interface Hero {
  name: string;
  id: string;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
  roles: string[];
  img: string;
  icon: string;
  base_str: number;
  base_agi: number;
  base_int: number;
  str_gain: number;
  agi_gain: number;
  int_gain: number;
}

export default function Home() {
  const [info, setInfo] = useState<Hero[]>([]);

  const IMG_URL = "https://cdn.cloudflare.steamstatic.com";

  const getBackgroundColor = (attribute: string) => {
    switch (attribute) {
      case "str":
        return "rgba(255, 0, 0, 0.2)";
      case "agi":
        return "rgba(0, 255, 0, 0.2)";
      case "int":
        return "rgba(0, 0, 255, 0.2)";
      default:
        return "rgba(128, 128, 128, 0.2)";
    }
  };

  useEffect(() => {
    const HeroData = () => {
      fetch("https://api.opendota.com/api/heroStats")
        .then((response) => {
          return response.json();
        })
        .then((data: Hero[]) => {
          setInfo(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    HeroData();
  }, []);

  return (
    <>
      <View style={{ marginBottom:150}} >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={{ color: "white", fontSize: 20, marginBottom: 10 }}>
            Total Heroes:<Text> {info.length}</Text>
          </Text>
          {info.map((hero) => {
            return (
              <View
                key={hero.id}
                style={[
                  styles.heroContainer,
                  { backgroundColor: getBackgroundColor(hero.primary_attr) },
                ]}
              >
                <Text style={styles.nameHero}>{hero.localized_name}</Text>
                <View style={styles.containerImg}>
                  <Image
                    source={{ uri: `${IMG_URL}${hero.img}` }}
                    style={styles.heroImage}
                  />
                  <View style={styles.circleContainer}>
                    <View style={styles.boxHability}>
                      <View
                        style={[styles.circle, { backgroundColor: "red" }]}
                      />
                      <Text style={styles.habilityText}>
                        {hero.base_str} + {hero.str_gain}
                      </Text>
                    </View>
                    <View style={styles.boxHability}>
                      <View
                        style={[styles.circle, { backgroundColor: "green" }]}
                      />
                      <Text style={styles.habilityText}>
                        {hero.base_agi} + {hero.agi_gain}
                      </Text>
                    </View>
                    <View style={styles.boxHability}>
                      <View
                        style={[styles.circle, { backgroundColor: "blue" }]}
                      />
                      <Text style={styles.habilityText}>
                        {hero.base_int} + {hero.int_gain}{" "}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.heroText}>
                    <Text style={styles.boldText}>Atribute:</Text>{" "}
                    {hero.primary_attr}
                  </Text>
                  <Text style={styles.heroText}>
                    <Text style={styles.boldText}>Atack:</Text>{" "}
                    {hero.attack_type}
                  </Text>
                  <Text style={styles.heroText}>
                    <Text style={styles.boldText}>Roles:</Text>{" "}
                    {hero.roles.join(", ")}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
  },
  heroContainer: {
    marginVertical: 10,
    padding: 8,
    borderRadius: 10,
    width: "100%",
  },
  heroText: {
    color: "white",
  },
  habilityText: {
    color: "white",
    marginLeft: 10,
  },
  nameHero: {
    color: "white",
    fontSize: 25,
    marginTop: 10,
  },
  boldText: {
    fontWeight: "bold",
    color: "#FFD700",
  },
  containerImg: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  heroImage: {
    width: 120,
    height: 80,
    marginVertical: 10,
  },
  circleContainer: {
    flexDirection: "column",
    marginLeft: 15,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 10,
    marginBottom: 6,
    marginTop: 3,
    marginLeft: 10,
  },
  boxHability: {
    flexDirection: "row",
  },
  textContainer: {
    marginVertical: 10,
  },
});
