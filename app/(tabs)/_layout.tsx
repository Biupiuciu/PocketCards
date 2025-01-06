import { Tabs } from "expo-router";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Platform, Text } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            // position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              size={28}
              color={focused ? "#8772CD" : "#E2E2E2"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#8772CD" : "#E2E2E2",
                fontSize: 10,
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: "Cards",
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "card" : "card-outline"}
              size={28}
              color={focused ? "#8772CD" : "#E2E2E2"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#8772CD" : "#E2E2E2",
                fontSize: 10,
              }}
            >
              Cards
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
