import * as React from 'react';
import { useState } from 'react';
import {
  Modal,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Border, FontSize, Color, FontFamily, Padding} from '../GlobalStyles';
import HabitTracker from './HabitTracker';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import GridComponent from "./GridComponent";


const Homepage = () => {
  const navigation = useNavigation();
  const [showHabitTracker, setShowHabitTracker] = useState(false);
  


  return (
    <>
      <Text style={[styles.clearSpace, styles.clearSpaceFlexBox]}>
        Clear Space
      </Text>
      <View style={{height: 300, overflow: 'hidden'}}>
        <ScrollView
          horizontal={true} // Enable horizontal scrolling
          showsHorizontalScrollIndicator={false} // Optional: Hide the horizontal scroll indicator
          contentContainerStyle={styles.scrollViewContent} // Styles for the content container
        >
          {/* View 1 */}
          <View style={[styles.groupChild, styles.groupChildPosition]}>
            <Pressable onPress={() => navigation.navigate("MorningIntro")}>
              <Image
                style={styles.morningAndNight1}
                resizeMode="cover"
                source={require('../assets/morning-and-night-1.png')}
              />
              <Text style={[styles.monthlyRecap, styles.clearSpaceFlexBox]}>Morning Log</Text>
            </Pressable>
          </View>

          {/* View 2 */}
          <View style={[styles.groupChild, styles.groupChildPosition]}>
            <Pressable onPress={() => navigation.navigate("Morning")}>
              <Image
                style={styles.morningAndNight1}
                resizeMode="cover"
                source={require('../assets/morning-and-night-2.png')}
              />
              <Text style={[styles.monthlyRecap, styles.clearSpaceFlexBox]}>Evening Log</Text>
            </Pressable>
          </View>

          {/* View 3 */}
          <View style={[styles.groupChild, styles.groupChildPosition]}>
            <Pressable onPress={() => navigation.navigate("Weekly")}>
              <Image
                style={styles.morningAndNight1}
                resizeMode="cover"
                source={require('../assets/monthlyy-1.png')}
              />
              <Text style={[styles.monthlyRecap, styles.clearSpaceFlexBox]}>Weekly Recap</Text>
            </Pressable>
          </View>

          {/* View 4 */}
          <View style={[styles.groupChild, styles.groupChildPosition]}>
            <Pressable onPress={() => navigation.navigate("Monthly")}>
              <Image
                style={styles.morningAndNight1}
                resizeMode="cover"
                source={require('../assets/monthlyy-2.png')}
              />
              <Text style={[styles.monthlyRecap, styles.clearSpaceFlexBox]}>Monthly Recap</Text>
            </Pressable>
          </View>
          
        </ScrollView>

      </View>

    {/* this is the habit tracker hideview  */}
  
      <View>
        <View style={styles.cardContainer}>
          <Pressable onPress={() => setShowHabitTracker(true)}>
            <View style={styles.textContainer}>
              <Text style={styles.habitTitle}>Habit</Text>
              <Text style={styles.trackerTitle}>tracker</Text>
            </View>
            <Image
                source={require('../assets/plant-1.png')} // Replace with your actual image path
                style={styles.plantImage}
                resizeMode="contain"
            />
          </Pressable>
        </View>

        <Modal
          animationType="slide" // You can customize this as needed
          transparent={true} // Set to true if you want to see the background
          visible={showHabitTracker}
        >
          <Pressable 
            style={styles.fullScreen} 
            onPress={() => setShowHabitTracker(false)}
            onPressIn={(event) => event.stopPropagation()}
          >
            <View style={styles.contentContainer} onStartShouldSetResponder={() => true}>
              <HabitTracker />
            </View>
          </Pressable>
          
        </Modal>

      </View>

    
      



        {/* // <View style={[styles.groupChild, styles.groupChildPosition]} >
        //   <Pressable
        //     style={[styles.groupChild, styles.groupChildPosition]}
        //     onPress={() => navigation.navigate("Morning")}
        //   />

        //   <Image
        //     style={styles.morningAndNight1}
        //     resizeMode="cover"
        //     source={require('../assets/morning-and-night-1.png')}
        //   />

        //   <Text
        //     style={[
        //       styles.monthlyRecap,
        //       styles.clearSpaceFlexBox,
        //     ]}>{`Morning Log`}</Text>
        // </View> 
         */}
  
    </>
  );
};  

const styles = StyleSheet.create({

  fullScreen: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
  },
  contentContainer: {
    backgroundColor: 'white', 
    width: '50%',
  },

  scrollViewContent: {
    height:350,
    alignItems: 'center', 
    paddingVertical: 10, 
  },

  homepageScrollViewContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

  },
  homepageLayout: {
    maxWidth: '100%',
    overflow: 'hidden',

  },
  clearSpaceFlexBox: {
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    position: 'absolute',
    

  },
  groupChildPosition: {
    borderRadius: Border.br_xl,
    top: 0,
    width: 200,
    left: 10,
    margin: 10,
    position: 'relative',
    
  },
  groupLayout: {
    width: 232,
    top: 51,
  },
  groupViewPosition: {
    left: 16,
    position: 'relative',
  },
  iconPosition: {
    top: 6,
    position: 'absolute',
  },
  clearSpace: {
    top: 20,
    left: 20,
    fontSize: FontSize.size_xl,
    width: 224,
    height: 49,
    zIndex: 0,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.ubuntuRegular,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
  },
  groupChild: {
    backgroundColor: Color.colorDarkslategray,
    height: 200,
  },
  monthlyy1Icon: {
    top: 60,
    left: 85,
    width: 147,
    height: 169,
    position: 'absolute',
  },
  monthlyRecap: {
    top: 17,
    left: 18,
    fontFamily: FontFamily.loraRegular,
    color: Color.colorWhite,
    width: 164,
    height: 85,
    fontSize: FontSize.size_11xl,
  },
  rectangleParent: {
    left: 676,
    height: 231,
    width: 200,
    top: 51,
    position: 'absolute',
  },
  monthlyy2Icon: {
    top: 60,
    left: 85,
    width: 147,
    height: 169,
    position: 'absolute',
  },
  rectangleGroup: {
    left: 456,
    height: 230,
    position: 'absolute',
  },
  morningAndNight2: {
    top: 60,
    left: 85,
    width: 147,
    height: 169,
    position: 'absolute',
  },
  rectangleContainer: {
    left: 236,
    width: 214,
    height: 218,
    top: 51,
    position: 'absolute',
  },
  morningAndNight1: {
    top: 60,
    left: 85,
    width: 147,
    height: 169,
    position: 'absolute',
  },
  groupView: {
    height: 229,
    width: 232,
    top: 51,
  },
  groupParent: {
    height: 280,
    maxHeight: 280,
    zIndex: 1,
    left: 0,
    top: 69,
    position: 'absolute',
    width: '100%',
  },
  rectangleView: {
    backgroundColor: Color.colorSilver_200,
    height: 370,
  },
  growth1Icon: {
    left: 64,
    borderTopLeftRadius: Border.br_146xl_5,
    borderBottomRightRadius: Border.br_146xl_5,
    borderBottomLeftRadius: 107,
    width: 280,
    height: 378,
  },
  habit: {
    fontSize: FontSize.size_36xl,
  },
  tracker: {
    fontSize: FontSize.size_11xl,
  },
  // habitTrackerTxtContainer: {
  //   width: '100%',
  // },
  // habitTracker: {
  //   top: 11,
  //   left: 11,
  //   width: 208,
  //   height: 90,
  //   color: Color.colorDarkslategray,
  //   fontFamily: FontFamily.ubuntuRegular,
  //   alignItems: 'center',
  //   display: 'flex',
  //   textAlign: 'left',
  // },
  rectangleParent1: {
    top: 389,
    width: 344,
    height: 384,
    zIndex: 2,
  },
  groupIcon: {
    left: 41,
    width: 38,
    height: 22,
  },
  groupIcon1: {
    height: '100%',
    width: '37.97%',
    top: '0%',
    right: '62.03%',
    bottom: '0%',
    left: '0%',
    maxHeight: '100%',
    position: 'absolute',
  },
  groupContainer: {
    top: 24,
    left: 264,
    width: 79,
    height: 28,
    zIndex: 3,
    position: 'absolute',

  },
  homepage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    // padding: Padding.p_3xs,
    padding: Padding.p_3xs,
    width: '100%',
  },
  cardContainer: {
    backgroundColor: '#C6B7AB', // This is the color of the card background
    borderRadius: 20, // Adjust as needed
    padding: 20, // Adjust as needed
    alignItems: 'center', // Centers content horizontally
    justifyContent: 'center', // Centers content vertically
    width: 250, // Set the width of the card
    height: 400, // Set the height of the card
    elevation: 5, // Adds elevation shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.25, // Shadow opacity for iOS
    shadowRadius: 3.84, // Shadow radius for iOS
    top: 100,
    left:30,
  },

  habitTitle: {
    color: '#404F5B',
    fontSize: 48, // Bigger font size for "Habit"
    fontFamily: 'Ubuntu-Regular',
    fontWeight: 'bold',
  },
  trackerTitle: {
    color: '#404F5B',
    fontSize: 36, // Smaller font size for "tracker"
    fontFamily: 'Ubuntu-Regular',
    fontWeight: 'bold',
  },

  plantImage:{
    height:350,
    width:350,
    left:115,
    top:-30,
  },

  textContainer: {
    alignItems: 'left',
    marginBottom: 20,
    top:50,
    left:80,
  },

  
});

export default Homepage;
