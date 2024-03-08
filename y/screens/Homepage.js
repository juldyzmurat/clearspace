import * as React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Border, FontSize, Color, FontFamily, Padding} from '../GlobalStyles';

const Homepage = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text style={[styles.clearSpace, styles.clearSpaceFlexBox]}>
        Clear Space
      </Text>

      <ScrollView
        horizontal={true} // Enable horizontal scrolling
        showsHorizontalScrollIndicator={false} // Optional: Hide the horizontal scroll indicator
        contentContainerStyle={styles.scrollViewContent} // Styles for the content container
      >
        {/* View 1 */}
        <View style={[styles.groupChild, styles.groupChildPosition]}>
          <Pressable onPress={() => navigation.navigate("Morning")}>
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

        {/* <View style={[styles.groupChild, styles.groupChildPosition]} >
          <Pressable
            style={[styles.groupChild, styles.groupChildPosition]}
            onPress={() => navigation.navigate("Morning")}
          />

          <Image
            style={styles.morningAndNight1}
            resizeMode="cover"
            source={require('../assets/morning-and-night-1.png')}
          />

          <Text
            style={[
              styles.monthlyRecap,
              styles.clearSpaceFlexBox,
            ]}>{`Morning Log`}</Text>
        </View> */}


      

      
      

      
  
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    height:350,
    alignItems: 'center', // Center items vertically in the container
    paddingVertical: 10, // Add some padding around
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
  habitTrackerTxtContainer: {
    width: '100%',
  },
  habitTracker: {
    top: 11,
    left: 11,
    width: 208,
    height: 90,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.ubuntuRegular,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
  },
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
});

export default Homepage;
