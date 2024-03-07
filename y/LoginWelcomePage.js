import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "./GlobalStyles";

const LoginWelcomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginwelcomePage}>
      <View style={styles.groupParent}>
        {/* <Image
          style={[styles.frameChild, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/group-3.png")}
        /> */}
        <View style={styles.rectangleParent}>
          <Pressable
            style={[styles.groupChild, styles.groupBorder]}
            onPress={() => navigation.navigate("Homepage")}
          />
          <Text style={[styles.logInYour, styles.logInYourPosition]}>{`Log In
your feelings`}</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.email, styles.emailPosition]}>Email:</Text>
          <Text style={[styles.password, styles.emailPosition]}>Password:</Text>
        </View>
        <Text style={[styles.emotionsJournal, styles.logInYourPosition]}>
          Emotions Journal
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: "50%",
    position: "absolute",
  },
  groupBorder: {
    height: 44,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_14xl,
  },
  logInYourPosition: {
    textAlign: "center",
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  groupPosition: {
    top: "50%",
    marginLeft: -154.5,
    left: "50%",
    width: 309,
    position: "absolute",
  },
  emailPosition: {
    fontSize: FontSize.size_mini,
    marginLeft: -141.5,
    top: "50%",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    marginLeft: -142.5,
    top: 0,
    width: 284,
    height: 200,
  },
  groupChild: {
    marginLeft: -63,
    bottom: 51,
    width: 126,
    left: "50%",
    position: "absolute",
  },
  logInYour: {
    marginLeft: -130,
    fontSize: 20,
    height: 87,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    color: Color.colorBlack,
    width: 260,
    bottom: 0,
  },
  rectangleParent: {
    marginLeft: -132.5,
    height: 95,
    width: 260,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  groupItem: {
    marginTop: 37.5,
    height: 44,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_14xl,
  },
  groupInner: {
    marginTop: -63.5,
    height: 44,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_14xl,
  },
  email: {
    marginTop: -81.5,
  },
  password: {
    marginTop: 19.5,
  },
  rectangleGroup: {
    marginTop: -9,
    height: 163,
  },
  emotionsJournal: {
    marginLeft: -126.5,
    top: 207,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interRegular,
    width: 255,
    height: 43,
  },
  groupParent: {
    top: 93,
    left: 26,
    height: 632,
    width: 309,
    position: "absolute",
  },
  loginwelcomePage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default LoginWelcomePage;
