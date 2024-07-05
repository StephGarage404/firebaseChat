import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-web";
import { Center } from "@gluestack-ui/config/build/theme";

export default function StartPage() {
  return (
    <Center >
      <ActivityIndicator size="large" color="gray" />
    </Center>
  );
}
