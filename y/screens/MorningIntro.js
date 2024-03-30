import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const MorningIntro = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.morningIntro, styles.iconLayout]}>
      <Text style={[styles.clearSpace, styles.clearSpaceFlexBox]}>
        Clear Space
      </Text>
      <Pressable
        style={[styles.morningIntroChild, styles.morningPosition]}
        onPress={() => navigation.navigate("Morning")}
      />
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
      <Text style={[styles.morningLog, styles.morningPosition]}>
        Morning Log
      </Text>
      <Pressable onPress={() => navigation.navigate("Morning")} style={styles.morningSun}>
        <Image
          style = {styles.thesun}
          resizeMode="cover"
          source={require("../assets/morning-intro.png")}
        />
      </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  thesun:{
    top:300,
  },

  morningSun: {
    zIndex:10,
    position: 'absolute',
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
  morningPosition: {
    width: 360,
    left: 0,
    position: "absolute",
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
  morningIntroChild: {
    top: 77,
    borderTopLeftRadius: Border.br_41xl,
    borderTopRightRadius: Border.br_41xl,
    backgroundColor: Color.colorGainsboro,
    height: 723,
    zIndex: 1,
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
  morningLog: {
    top: 170,
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
    fontFamily: "Ubuntu-Bold",
    textAlign: "center",
    justifyContent: "center",
    height: 83,
    zIndex: 3,
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkslategray,
  },
  morningIntro: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    padding:Padding.p_3xs,
    alignContent:"center",
  },
});

export default MorningIntro;
