import React from 'react';
import {ScrollView, TextInput } from 'react-native';
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import {Border, FontSize, Color, FontFamily, Padding} from '../GlobalStyles';
import { useNavigation } from "@react-navigation/native";


const QuestionsScroll = () => {
    const navigation = useNavigation();

    return (
        <View>
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

            {/* this needs to be coded to steadily go up */}
            <View>
                <Image
                    style = {styles.littlesun}
                    resizeMode="cover"
                    source={require("../assets/morning-intro.png")}
                />
            </View>
            

            <ScrollView
                horizontal={true}
                pagingEnabled={true} // Enable paging to snap to each TextInput
                showsHorizontalScrollIndicator={false}
                style={styles.scrollViewContainer}
            >
            {/* Repeat the block for each question, adjusting the placeholder as needed */}
                <View style={styles.scrollItemContainer}>
                    <Text style={[styles.whatAmI, styles.whatTypo]}>
                        What am I grateful for today?
                    </Text>
                    <TextInput
                        style={styles.frameItem}
                        mode="flat"
                        theme={{ colors: { background: "#d9d9d9" } }}
                    />
                </View>

                <View style={styles.scrollItemContainer}>
                    <TextInput
                        style={styles.frameItem}
                        mode="flat"
                        placeholder="What is one thing I'm looking forward to today?"
                        theme={{ colors: { background: "#d9d9d9" } }}
                    />
                </View>

                <View style={styles.scrollItemContainer}>
                    <TextInput
                        style={styles.frameItem}
                        mode="flat"
                        placeholder="What is one personal strength I can utilize today?"
                        theme={{ colors: { background: "#d9d9d9" } }}
                    />
                </View>

                <View style={styles.scrollItemContainer}>
                    <TextInput
                        style={styles.frameItem}
                        mode="flat"
                        placeholder="How do I want to feel at the end of today?"
                        theme={{ colors: { background: "#d9d9d9" } }}
                    />
                </View>

                <View style={styles.scrollItemContainer}>
                    
                    <TextInput
                        style={styles.frameItem}
                        mode="flat"
                        placeholder="What is one small step I can take today to improve my emotional well-being?"
                        theme={{ colors: { background: "#d9d9d9" } }}
                    />
                </View>
            </ScrollView>

        </View>
        
);
};

const styles = StyleSheet.create({
    littlesun: {
        top: 100,
        left: -100,
        transform: [{ scale: 0.4 }]
    },
    iconLayout: {
        overflow: "hidden",
        width: "100%",
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

    groupChild: {
        top: 6,
        left: 41,
        width: 38,
        height: 22,
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
    
    scrollViewContainer: {
    // Add general styles for the ScrollView container
    // For example:
        flexGrow: 0, // Prevents the ScrollView from forcing its children to fill the parent's main axis
    },
    scrollItemContainer: {
    // Styles for the container of each TextInput
    // Adjust margins, padding, or dimensions as needed
        marginRight: 20, // Space between items
        width: 300, // Width of the container; adjust based on your design
        alignItems: 'center', // Centers the TextInput horizontally
        height: 1000,
    },
    frameItem: {
    // Styles for each TextInput
        width: 300, // Ensure the TextInput takes up the full width of its container
        height:300,
        top:150,
        backgroundColor: Color.colorGainsboro,
        padding: 10, // Padding inside the TextInput; adjust as needed
        borderRadius: Border.br_xl,
        left: 30,
    },

    whatAmI: {
        left: 2,
    },
    whatTypo: {
        height: 100,
        width: 350,
        alignItems: "flex-end",
        fontSize: FontSize.size_11xl,
        display: "flex",
        textAlign: "left",
        color: Color.colorDarkslategray,
        fontFamily: "Ubuntu-Regular",
        position: "absolute",
        zIndex:10,
        left: 20
    },



    
  // Define Border, Color, etc., according to your theme or directly in this StyleSheet
});

export default QuestionsScroll;
