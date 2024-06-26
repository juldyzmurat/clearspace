import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  Pressable,
  View,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";
import QuestionView from "./questionscroll";

const Morning = () => {
  const navigation = useNavigation();

  return (
    <QuestionView timeOfDay="evening"/>
    
  );
};

const styles = StyleSheet.create({
});

export default Morning;
