import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function Statusbar() {
  return (
    <StatusBar style="light" translucent={false} backgroundColor={"#111827"} />
  );
}
