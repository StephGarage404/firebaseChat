import { View, Text } from "react-native";
import React from "react";
import {Slot} from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function _layout(){
    return (
        <GluestackUIProvider config={config}>
            <Slot />
        </GluestackUIProvider>
    )   
}