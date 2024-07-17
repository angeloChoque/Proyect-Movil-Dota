import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

interface Team {
  team_id: number;
  name: string;
  wins: number;
  losses: number;
  logo_url: string;
}

export default function Teams() {
  const [teams, setTeams] = useState<Team[]>([]);
  const numberOfTeams = 120;

  useEffect(() => {
    const TeamData = () => {
      fetch("https://api.opendota.com/api/teams")
        .then((response) => response.json())
        .then((data: Team[]) => {
          const firstTeams = data.slice(0, numberOfTeams);
          setTeams(firstTeams);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    TeamData();
  }, []);

  return (
    <View style={{ marginBottom: 150 }}>
      <ScrollView>
        <Text style={styles.textSubtitle}>Total Teams: {numberOfTeams}</Text>
        {teams.map((team) => (
          <View key={team.team_id} style={styles.teamContainer}>
            <Image source={{ uri: team.logo_url }} style={styles.teamLogo} />
            <View style={styles.teamInfo}>
              <Text style={styles.textTeam}>{team.name}</Text>
              <View>
                <Text style={styles.textStats}>Win: {team.wins}</Text>
                <Text style={styles.textStats}>lose: {team.losses}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  teamContainer: {
    flexDirection: "row",
    marginVertical: 10,
    padding: 12,
    alignItems: "center",
    backgroundColor: "rgba(128, 128, 128, 0.2)",
    borderRadius: 10,
    width: "100%",
  },
  teamInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 15,
  },
  textTeam: {
    color: "white",
    fontSize: 16,
  },
  textSubtitle: {
    color: "white",
    fontSize: 20,
    marginVertical: 25,
  },
  textStats: {
    color: "white",
    fontSize: 14,
    marginVertical:3
  },
  teamLogo: {
    width: 50,
    height: 50,
  },
});
