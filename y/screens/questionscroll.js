import React, { useState } from 'react';
import {ScrollView, TextInput } from 'react-native';
import { Text, StyleSheet, View, Pressable, Image, Dimensions } from "react-native";
import {Border, FontSize, Color, FontFamily, Padding} from '../GlobalStyles';
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get('window').width;
const questions = [
    "What am I grateful for today?",
    "What is one thing I'm looking forward to today?",
    "What is one personal strength I can utilize today?",
    "How do I want to feel at the end of today?",
    "What is one small step I can take today to improve my emotional well-being?"
];


const QuestionsScroll = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Determine swipe direction based on touch start/end points
    const handleTouch = () => {
      // Swipe to the right
        if (touchStart - touchEnd > 75) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
        }
      // Reset touch start and end points
        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        
        
        <View 
            style={styles.container}
            onTouchStart={(e) => setTouchStart(e.nativeEvent.pageX)}
            onTouchEnd={(e) => {
                setTouchEnd(e.nativeEvent.pageX);
                handleTouch();
            }}
        >
            <Text style={[styles.whatAmI, styles.whatTypo]}>
                {questions[currentIndex]}
            </Text>
            <TextInput
                style={styles.frameItem}
                mode="flat"
                theme={{ colors: { background: "#d9d9d9" } }}
            />
        </View>
    );
};

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: screenWidth, // Use the screenWidth to make sure it occupies full screen width
        },
        question: {
            fontSize: 24,
            textAlign: 'center',
            paddingHorizontal: 20,
        },
        frameItem: {
            // Styles for TextInput components
            backgroundColor: Color.colorGainsboro,
            width: 350,
            height: 350,
            borderRadius: Border.br_41xl,
        },
        whatTypo: {
            // Styles for Text components
            fontSize: FontSize.size_11xl,
            color: Color.colorDarkslategray,
            fontFamily: FontFamily.ubuntuRegular,
            width: 323, // Ensure Text has a defined width in a horizontal ScrollView
        },
    });
    
export default QuestionsScroll;
