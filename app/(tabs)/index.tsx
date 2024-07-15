import Home from "@/components/home/Home";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import img from "../../assets/images/Dota2.png";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {

  const insets = useSafeAreaInsets();



  return (
    <>
      <SafeAreaProvider>
        <View
          style={{
            backgroundColor: "black",
            paddingHorizontal: 10,
            paddingTop: insets.top
          }}
        >
          <StatusBar style="light" />
          <View style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
            <Image
              source={img}
              style={{ width: 70, height: 70, marginLeft:5}}
            />
            <Text style={{color:"white", marginTop:5, fontSize:25, marginRight:10}}> Heroes </Text>
          </View>
          <Home />
        </View>
      </SafeAreaProvider>
    </>
  );
}
