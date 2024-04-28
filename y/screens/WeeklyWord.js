import React from 'react';
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { ProgressCircle } from 'react-native-svg-charts'; // Make sure to install react-native-svg-charts
import {Border, FontSize, Color, FontFamily, Padding} from '../GlobalStyles';
import {useNavigation} from '@react-navigation/native';


const WeeklyRecapScreen = () => {
  // Dummy data for demo
  const morningJournalCompletion = 3; // e.g., 3 out of 7 days completed
  const eveningJournalCompletion = 4; // e.g., 4 out of 7 days completed
  const habitsCompletion = 5; // e.g., 5 out of 7 days completed
  const quoteOfTheWeek = "Be yourself; everyone else is already taken. - Oscar Wilde";
  const navigation = useNavigation();


  const ProgressComponent = ({ title, progress }) => (
    <View style={styles.progressComponentContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.progressCircleContainer}>
        <ProgressCircle
          style={styles.progressCircle}
          progress={progress / 7}
          progressColor={'#e6e6e6'}
          strokeWidth={8}
          backgroundColor="transparent" // You can set the background color for the incomplete part
        />
        <Text style={styles.progressText}>{`${progress}/7`}</Text>
      </View>
    </View>
  );



    

    return (
      <View style={[styles.morningIntro, styles.iconLayout]}>
        <Text style={[styles.clearSpace, styles.clearSpaceFlexBox]}>
          Clear Space
        </Text>
        
        <View style={styles.groupParent}>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/group-5.png")}
          />
          <Pressable
            style={styles.group}
            onPress={() => navigation.navigate("Homepage")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/group.png")}
            />
          </Pressable>
        </View>

        <View style={styles.mainContentContainer}>
          <View style={[styles.quoteContainer]}>
            <Text style={styles.title}>                              Quote of the{"\n"}                                    Week</Text>
              <Text style={styles.quote}>{quoteOfTheWeek}</Text>
          </View>
          <View style={[styles.progressComponentContainer, styles.habitsEntry]}>
              <ProgressComponent
                  title="Habits of the Week"
                  progress={habitsCompletion}
              />
          </View>
          <View style={[styles.progressComponentContainer, styles.morningEntry]}>
              <ProgressComponent
                  title="Morning Entry"
                  progress={morningJournalCompletion}
              />
          </View>
          <View style={[styles.progressComponentContainer, styles.eveningEntry]}>
              <ProgressComponent
                  title="Evening Entry"
                  progress={eveningJournalCompletion}
              />
          </View>
      </View>
        
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    mainContentContainer: {
      top:70,
      flex: 1,
      flexDirection: 'row',  // Change to row for horizontal starting layout
      flexWrap: 'wrap',  // Enable wrapping
      alignItems: 'center',  // Align items to the start of the cross axis
      justifyContent: 'center',  // Align items to the start of the main axis
    },
    progressComponentContainer: {
      width: '40%', // Each takes half of the container's width
      height: '40%', // Each takes half of the container's height
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: Border.br_xl,
      padding: 10,
      margin:10,
    },
    quoteContainer: {
      width: '40%', // Half of the container's width
      height: '40%', // Half of the container's height
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: Border.br_xl,
      backgroundColor: Color.colorSilver_100,
      padding:10,
      margin:10,
    },

    iconLayout: {
      overflow: "hidden",
      width: "100%",
    },
    clearSpaceFlexBox: {
      alignItems: "center",
      display: "flex",
      color: Color.colorDarkslategray,
    },

    clearSpace: {
      top: 20,
      left: 20,
      fontSize: FontSize.size_xl,
      fontFamily: FontFamily.ubuntuRegular,
      textAlign: "left",
      width: 224,
      height: 49,
      zIndex: 0,
      position: "absolute",
    },
    groupChild: {
      top: 6,
      left: 41,
      width: 38,
      height: 22,
      position: "absolute",
    },
    icon: {
      maxWidth: "100%",
      maxHeight: "100%",
      height: "100%",
    },
    group: {
      left: "0%",
      top: "0%",
      right: "62.03%",
      bottom: "0%",
      width: "37.97%",
      height: "100%",
      position: "absolute",
    },
    groupParent: {
      top: 24,
      left: 264,
      width: 79,
      height: 28,
      zIndex: 2,
      position: "absolute",
    },
    morningIntro: {
      backgroundColor: Color.colorWhite,
      flex: 1,
      height: 800,
      padding:Padding.p_3xs,
      alignContent:"center",
    },
    progressCircle: {
      height: 100, // Set the height of the circle
    },
    progressText: {
      fontSize: 18,
      marginTop: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      width: '300%', // Use full width available in the container
      align:'center',
    },
    quote: {
      fontSize: 16,
      fontStyle: 'italic',
      textAlign: 'center',
    },
    progressCircleContainer: {
      position: 'relative', // Allows absolute positioning of the text over the circle
      alignItems: 'center',
      justifyContent: 'center',
    },
    progressCircle: {
      height: 100, // Adjust size as needed
      width: 100, // Ensure the width is the same as the height to make a circle
    },
    progressText: {
      position: 'absolute', // Position text over the circle
      fontSize: 18,
    },
    morningEntry: {
      backgroundColor: Color.colorSlategray,
    },
    eveningEntry: {
      backgroundColor: Color.colorDarkslategray,
    },
    habitsEntry: {
      backgroundColor: Color.colorSilver_200,
    },
  });

export default WeeklyRecapScreen;
