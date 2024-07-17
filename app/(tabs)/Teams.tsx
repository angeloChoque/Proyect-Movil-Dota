import React from "react";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import img from "../../assets/images/Dota2.png";
import Teams from "@/components/teams/Teams";

export default function Items() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <SafeAreaProvider>
        <View
          style={{
            backgroundColor: "black",
            paddingHorizontal: 10,
            paddingTop: insets.top,
          }}
        >
          <StatusBar style="light" />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              source={img}
              style={{
                width: 70,
                height: 70,
                marginLeft: 5,
                marginTop: 5,
              }}
            />
            <Text
              style={{
                color: "white",
                marginTop: 8,
                fontSize: 25,
                marginRight: 10,
              }}
            >
              Teams
            </Text>
          </View>
          <Teams/>
        </View>
      </SafeAreaProvider>
    </>
  );
}

