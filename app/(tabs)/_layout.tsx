import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon"; 
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tabIconSelected,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background, 
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Heroes",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={focused ? Colors[colorScheme ?? "light"].tabIconSelected : Colors[colorScheme ?? "light"].tabIconDefault}
            />
          ),
        }}
      />
            <Tabs.Screen
        name="Teams"
        options={{
          title: "Teams",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "albums" : "albums-outline"}
              color={focused ? Colors[colorScheme ?? "light"].tabIconSelected : Colors[colorScheme ?? "light"].tabIconDefault}
            />
          ),
        }}
      />
    </Tabs>
  );
}
