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

const Morning = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.morning, styles.iconLayout]}>
      <Text style={styles.clearSpace}>Clear Space</Text>
      <View style={styles.groupParent}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-51.png")}
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
      <ScrollView
        style={styles.rectangleParent}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.frameChild} />
        <TextInput
          style={[styles.frameItem, styles.frameChildLayout]}
          mode="flat"
          theme={{ colors: { background: "#d9d9d9" } }}
        />
        <Text style={[styles.whatAmI, styles.whatTypo]}>
          What am I grateful for today?
        </Text>
        <Text style={[styles.whatIsOne, styles.whatTypo]}>
          What is one thing I'm looking forward to today?
        </Text>
        <TextInput
          style={[styles.frameInner, styles.frameChildLayout]}
          mode="flat"
          theme={{ colors: { background: "#d9d9d9" } }}
        />
        <Text style={[styles.whatIsOne1, styles.whatTypo]}>
          What is one personal strength I can utilize today?
        </Text>
        <TextInput
          style={[styles.rectangleTextinput, styles.frameChildLayout]}
          mode="flat"
          theme={{ colors: { background: "#d9d9d9" } }}
        />
        <Text style={[styles.howDoI, styles.whatTypo]}>
          How do I want to feel at the end of today? What can I do to feel that
          way?
        </Text>
        <TextInput
          style={[styles.frameChild1, styles.frameChildLayout]}
          mode="outlined"
          theme={{ colors: { background: "#d9d9d9" } }}
        />
        <Text style={[styles.whatIsOne2, styles.whatTypo]}>
          What is one small step I can take today to improve my emotional
          well-being?
        </Text>
        <TextInput
          style={[styles.frameChild2, styles.frameChildLayout]}
          mode="outlined"
          theme={{ colors: { background: "#d9d9d9" } }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  frameChildLayout: {
    height: 272,
    width: 323,
    borderRadius: Border.br_41xl,
    top: 181,
    position: "absolute",
  },
  whatTypo: {
    height: 167,
    width: 324,
    alignItems: "flex-end",
    fontSize: FontSize.size_11xl,
    top: 0,
    display: "flex",
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.ubuntuRegular,
    position: "absolute",
  },
  clearSpace: {
    top: 20,
    fontSize: FontSize.size_xl,
    alignItems: "center",
    width: 224,
    height: 49,
    zIndex: 0,
    display: "flex",
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.ubuntuRegular,
    left: 20,
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
    zIndex: 1,
    position: "absolute",
  },
  frameChild: {
    width: 1870,
    left: 0,
    top: 0,
    height: 453,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  frameItem: {
    backgroundColor: Color.colorGainsboro,
    width: 323,
    borderRadius: Border.br_41xl,
    top: 181,
    left: 0,
  },
  whatAmI: {
    left: 2,
  },
  whatIsOne: {
    left: 380,
  },
  frameInner: {
    left: 378,
    backgroundColor: Color.colorGainsboro,
    width: 323,
    borderRadius: Border.br_41xl,
    top: 181,
  },
  whatIsOne1: {
    left: 758,
  },
  rectangleTextinput: {
    left: 756,
    backgroundColor: Color.colorGainsboro,
    width: 323,
    borderRadius: Border.br_41xl,
    top: 181,
  },
  howDoI: {
    left: 1136,
  },
  frameChild1: {
    left: 1134,
    width: 323,
    borderRadius: Border.br_41xl,
    top: 181,
  },
  whatIsOne2: {
    left: 1514,
  },
  frameChild2: {
    left: 1512,
    width: 323,
    borderRadius: Border.br_41xl,
    top: 181,
  },
  rectangleParent: {
    top: 142,
    maxHeight: 453,
    zIndex: 2,
    height: 453,
    left: 20,
    position: "absolute",
    width: "100%",
  },
  morning: {
    flex: 1,
    height: 800,
    padding: Padding.p_3xs,
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default Morning;
