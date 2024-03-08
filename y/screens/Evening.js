import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Evening = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.evening, styles.iconLayout]}>
      <Text style={styles.clearSpace}>Clear Space</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  clearSpace: {
    top: 20,
    left: 20,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.ubuntuRegular,
    color: Color.colorDarkslategray,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
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
    zIndex: 1,
    position: "absolute",
  },
  evening: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    padding: Padding.p_3xs,
  },
});

export default Evening;
