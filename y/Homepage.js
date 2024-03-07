import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "./GlobalStyles";

const Homepage = () => {
  const navigation = useNavigation();

  return (
    <Text>Hello</Text>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 54,
    width: 222,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_14xl,
    left: 24,
    position: "absolute",
  },
  homepageBorder: {
    width: 286,
    left: 37,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_14xl,
    position: "absolute",
  },
  weeklyRecapPosition: {
    textAlign: "center",
    left: "50%",
    top: "50%",
    marginLeft: -125,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupParentPosition: {
    top: 20,
    position: "absolute",
  },
  frameChild: {
    top: 0,
  },
  frameItem: {
    top: 70,
  },
  frameInner: {
    top: 280,
  },
  rectangleView: {
    top: 350,
  },
  frameChild1: {
    top: 140,
  },
  frameChild2: {
    top: 210,
  },
  rectangleParent: {
    top: 92,
    left: 45,
    width: 269,
    height: 312,
    position: "absolute",
    overflow: "hidden",
  },
  homepageChild: {
    top: 452,
    height: 116,
  },
  homepageItem: {
    top: 604,
    height: 152,
  },
  weeklyRecap: {
    marginTop: 186,
  },
  monthlyHabit: {
    marginTop: 33,
  },
  emotionsJournal: {
    left: 30,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 212,
    height: 40,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_mini,
    top: 20,
  },
  groupChild: {
    top: 6,
    left: 41,
    width: 38,
    height: 22,
    position: "absolute",
  },
  groupIcon: {
    height: "100%",
    width: "37.97%",
    top: "0%",
    right: "62.03%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupParent: {
    left: 260,
    width: 79,
    height: 28,
  },
  homepage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Homepage;
