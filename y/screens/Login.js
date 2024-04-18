import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";



const Login = () => {
  const navigation = useNavigation();

  

  return (
    <View style={styles.login}>
      <View style={styles.loginChild} />
      <View style={[styles.loginItem, styles.loginShadowBox]} />
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <View style={[styles.loginInner, styles.loginShadowBox]} />
      <Text style={[styles.password, styles.emailTypo]}>Password</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.loginShadowBox]}
        onPress={() => navigation.navigate("Homepage")}
      />
      <Text
        style={[styles.loginYourFeelingsContainer, styles.clearSpaceFlexBox]}
      >
        <Text style={styles.loginYourFeelingsContainer1}>
          <Text style={styles.login1}>Login</Text>
          <Text style={styles.yourFeelings}> your feelings</Text>
        </Text>
      </Text>
      <Image
        style={styles.efff57fa8460d2aecd864712809b90Icon}
        resizeMode="cover"
        source={require("../assets/efff57fa8460d2aecd864712809b9038-1.png")}
      />
      <Text style={[styles.clearSpace, styles.clearSpaceFlexBox]}>{`Clear 
Space`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({


  loginShadowBox: {
    height: 72,
    width: 294,
    borderBottomLeftRadius: Border.br_181xl,
    borderTopLeftRadius: Border.br_181xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  emailTypo: {
    height: 87,
    width: 162,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: "Lora-SemiBoldItalic",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  clearSpaceFlexBox: {
    height: 83,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  loginChild: {
    top: 0,
    left: 0,
    borderBottomRightRadius: 120,
    backgroundColor: Color.colorDarkslategray,
    width: 360,
    height: 372,
    zIndex: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  loginItem: {
    top: 442,
    left: 67,
    zIndex: 1,
    backgroundColor: Color.colorSlategray,
    height: 72,
    width: 294,
    borderBottomLeftRadius: Border.br_181xl,
    borderTopLeftRadius: Border.br_181xl,
  },
  email: {
    top: 434,
    zIndex: 2,
    left: 91,
    height: 87,
    width: 162,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  loginInner: {
    top: 542,
    left: 66,
    zIndex: 3,
    backgroundColor: Color.colorSlategray,
    height: 72,
    width: 294,
    borderBottomLeftRadius: Border.br_181xl,
    borderTopLeftRadius: Border.br_181xl,
  },
  password: {
    top: 534,
    left: 90,
    zIndex: 4,
  },
  rectanglePressable: {
    top: 663,
    left: 294,
    backgroundColor: Color.colorSilver_200,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    zIndex: 5,
    height: 72,
    width: 294,
    borderBottomLeftRadius: Border.br_181xl,
    borderTopLeftRadius: Border.br_181xl,
  },
  login1: {
    fontWeight: "600",
    fontFamily: FontFamily.loraSemiBold,
  },
  yourFeelings: {
    fontFamily: FontFamily.loraRegular,
  },
  loginYourFeelingsContainer1: {
    width: "100%",
  },
  loginYourFeelingsContainer: {
    top: 657,
    width: 250,
    zIndex: 6,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    height: 83,
    left: 91,
  },
  efff57fa8460d2aecd864712809b90Icon: {
    top: 73,
    left: 83,
    width: 297,
    height: 385,
    zIndex: 7,
    position: "absolute",
  },
  clearSpace: {
    top: 240,
    left: 19,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.ubuntuRegular,
    color: "#efeeea",
    width: 224,
    zIndex: 8,
  },
  login: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    padding: Padding.p_3xs,
    width: "100%",
  },
});

export default Login;
