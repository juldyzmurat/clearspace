import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const HabitTracker = () => {
  return (
    <View style={styles.habitTracker}>
      <View style={styles.habitTrackerChild} />
      <Text style={styles.habitMorningStretchContainer}>
        <Text style={styles.habitMorningStretchContainer1}>
          <Text style={styles.habit}>{`Habit
`}</Text>
          <Text style={styles.morningStretch}>morning stretch</Text>
        </Text>
      </Text>
      <View style={[styles.habitTrackerItem, styles.habitChildLayout4]} />
      <View style={[styles.habitTrackerInner, styles.habitChildLayout4]} />
      <View style={[styles.rectangleView, styles.habitChildLayout4]} />
      <View style={[styles.habitTrackerChild1, styles.habitChildLayout4]} />
      <View style={[styles.habitTrackerChild2, styles.habitChildLayout4]} />
      <View style={[styles.habitTrackerChild3, styles.habitChildLayout4]} />
      <View style={[styles.habitTrackerChild4, styles.habitChildLayout4]} />
      <View style={[styles.habitTrackerChild5, styles.habitChildLayout3]} />
      <View style={[styles.habitTrackerChild6, styles.habitChildLayout3]} />
      <View style={[styles.habitTrackerChild7, styles.habitChildLayout3]} />
      <View style={[styles.habitTrackerChild8, styles.habitChildLayout3]} />
      <View style={[styles.habitTrackerChild9, styles.habitChildLayout3]} />
      <View style={[styles.habitTrackerChild10, styles.habitChildLayout2]} />
      <View style={[styles.habitTrackerChild11, styles.habitChildLayout2]} />
      <View style={[styles.habitTrackerChild12, styles.habitChildLayout1]} />
      <View style={[styles.habitTrackerChild13, styles.habitChildLayout1]} />
      <View style={[styles.habitTrackerChild14, styles.habitChildLayout1]} />
      <View style={[styles.habitTrackerChild15, styles.habitChildLayout1]} />
      <View style={[styles.habitTrackerChild16, styles.habitChildLayout1]} />
      <View style={[styles.habitTrackerChild17, styles.habitChildLayout1]} />
      <View style={[styles.habitTrackerChild18, styles.habitChildLayout1]} />
      <View style={[styles.habitTrackerChild19, styles.habitChildLayout]} />
      <View style={[styles.habitTrackerChild20, styles.habitChildLayout]} />
      <View style={[styles.habitTrackerChild21, styles.habitChildLayout]} />
      <View style={[styles.habitTrackerChild22, styles.habitChildLayout]} />
      <View style={[styles.habitTrackerChild23, styles.habitChildLayout]} />
      <View style={[styles.habitTrackerChild24, styles.habitChildLayout]} />
      <View style={[styles.habitTrackerChild25, styles.habitChildLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  habitChildLayout4: {
    height: 42,
    width: 42,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    top: 179,
    position: "absolute",
  },
  habitChildLayout3: {
    top: 226,
    height: 42,
    width: 42,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  habitChildLayout2: {
    backgroundColor: Color.colorSnow,
    top: 226,
    height: 42,
    width: 42,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  habitChildLayout1: {
    top: 273,
    backgroundColor: Color.colorSnow,
    height: 42,
    width: 42,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  habitChildLayout: {
    top: 320,
    backgroundColor: Color.colorSnow,
    height: 42,
    width: 42,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  habitTrackerChild: {
    top: 40,
    left: 16,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSilver_200,
    width: 332,
    height: 370,
    position: "absolute",
  },
  habit: {
    fontSize: FontSize.size_36xl,
    fontFamily: FontFamily.ubuntuRegular,
  },
  morningStretch: {
    fontSize: FontSize.size_11xl,
    fontStyle: "italic",
    fontWeight: "700",
    fontFamily: FontFamily.ubuntuBoldItalic,
  },
  habitMorningStretchContainer1: {
    width: "100%",
  },
  habitMorningStretchContainer: {
    top: 51,
    left: 27,
    color: Color.colorDarkslategray,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 321,
    height: 120,
    position: "absolute",
  },
  habitTrackerItem: {
    backgroundColor: Color.colorSlategray,
    left: 21,
  },
  habitTrackerInner: {
    backgroundColor: Color.colorSilver_100,
    left: 68,
  },
  rectangleView: {
    left: 115,
    backgroundColor: Color.colorSlategray,
  },
  habitTrackerChild1: {
    left: 162,
    backgroundColor: Color.colorSlategray,
  },
  habitTrackerChild2: {
    left: 209,
    backgroundColor: Color.colorSlategray,
  },
  habitTrackerChild3: {
    left: 256,
    backgroundColor: Color.colorSilver_100,
  },
  habitTrackerChild4: {
    left: 303,
    backgroundColor: Color.colorSilver_100,
  },
  habitTrackerChild5: {
    backgroundColor: Color.colorSilver_100,
    left: 21,
  },
  habitTrackerChild6: {
    left: 68,
    backgroundColor: Color.colorSlategray,
  },
  habitTrackerChild7: {
    left: 115,
    backgroundColor: Color.colorSlategray,
  },
  habitTrackerChild8: {
    left: 162,
    backgroundColor: Color.colorSlategray,
  },
  habitTrackerChild9: {
    left: 209,
    backgroundColor: Color.colorSilver_100,
  },
  habitTrackerChild10: {
    left: 256,
  },
  habitTrackerChild11: {
    left: 303,
  },
  habitTrackerChild12: {
    left: 21,
  },
  habitTrackerChild13: {
    left: 68,
  },
  habitTrackerChild14: {
    left: 115,
  },
  habitTrackerChild15: {
    left: 162,
  },
  habitTrackerChild16: {
    left: 209,
  },
  habitTrackerChild17: {
    left: 256,
  },
  habitTrackerChild18: {
    left: 303,
  },
  habitTrackerChild19: {
    left: 21,
  },
  habitTrackerChild20: {
    left: 68,
  },
  habitTrackerChild21: {
    left: 115,
  },
  habitTrackerChild22: {
    left: 162,
  },
  habitTrackerChild23: {
    left: 209,
  },
  habitTrackerChild24: {
    left: 256,
  },
  habitTrackerChild25: {
    left: 303,
  },
  habitTracker: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 450,
    overflow: "hidden",
    width: "100%",
  },
});

export default HabitTracker;
