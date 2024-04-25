import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import GridComponent from "./GridComponent";
import CalendarComponent from "./calendarcomponent";
import { CanceledError } from "axios";

const HabitTracker = () => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.habitTrackerChild} />
      <Text style={styles.habitMorningStretchContainer}>
        <View style={styles.habitMorningStretchContainer1}>
          <Text style={styles.habit}>Habit</Text>
          <Text style={styles.morningStretch}>morning stretch</Text>
        </View>
      </Text>
      <View/>
      {/* <View style={styles.gridContainerStyle}>
        <GridComponent totalSquares={31} />
      </View> */}
      <CalendarComponent />
    </View>
    
  );
};

const styles = StyleSheet.create({

  gridContainerStyle: {
    position: 'relative',
    top: 175,
    left:22,
    backgroundColor: 'transparent', 
  },

  parentContainer: {
    position: 'absolute', 
    left:15, 
    top: 360,
    elevation: 5, // Adds elevation shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.25, // Shadow opacity for iOS
    shadowRadius: 3.84, // Shadow radius for iOS
  },

  habitTrackerChild: {
    top: 40,
    left: 16,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSilver_200,
    width: 370,
    height: 400,
    position: "absolute",
    zIndex: 0,
    
  },
  habit: {
    fontSize: FontSize.size_36xl,
    fontFamily: FontFamily.ubuntuRegular,
    fontFamily: FontFamily.ubuntuBoldItalic,
    color:Color.colorDarkslategray,
  },
  morningStretch: {
    fontSize: FontSize.size_11xl,
    fontStyle: "italic",
    fontWeight: "700",
    fontFamily: FontFamily.ubuntuBoldItalic,
    color:Color.colorDarkslategray,
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
  
  habitTracker: {
    top: 40,
    left: 16,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSilver_200,
    width: 332,
    height: 370,
    position: "absolute",
  },
});

export default HabitTracker;
