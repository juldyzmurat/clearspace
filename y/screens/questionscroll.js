import React, { useState } from 'react';
import {ScrollView, TextInput } from 'react-native';
import { Text, StyleSheet, View, Pressable, Image, Dimensions } from "react-native";
import {Border, FontSize, Color, FontFamily, Padding} from '../GlobalStyles';
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get('window').width;
let questions = []

const QuestionView = ({ timeOfDay }) => {

    if (timeOfDay === "morning") {
        console.log('morning');
        questions = [
            "What am I grateful for today?",
            "What is one thing I'm looking forward to today?",
            "What is one personal strength I can utilize today?",
            "How do I want to feel at the end of today?",
            "What is one small step I can take today to improve my emotional well-being?"
        ];
    } else if (timeOfDay === "evening") {
        questions = [
            "In what way did I move closer to my goals today?",
            "How did I contribute to my own happiness today?",
            "What could I have done differently today for a better outcome?",
            "What am I looking forward to tomorrow?",
            "How do I plan to rest and recharge tonight?"
        ];
    }

    const images = {
        morning: require('../assets/morning-intro.png'),
        evening: require('../assets/evening-intro.png'),
    };

    const imageSource = images[timeOfDay];
    console.log(imageSource);

    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDone, setIsDone] = useState(false);
    const [enterPressed, setEnterPressed] = useState(false);
    const [answers, setAnswers] = useState({});
    const [inputValue, setInputValue] = useState("");
    const userEmail = 'zxu4@case.edu'


    const handleAnswer = (text) => {
        setAnswers(prev => ({ ...prev, [`a${currentIndex + 1}`]: text }));
    };

    const sendDataToServer = async (data) => {
        try {
            const response = await fetch('http://10.0.2.2:5050/record/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            try {
                const jsonResponse = await response.json();
                console.log(jsonResponse); // Handle the response based on your API
            } catch (parseError) {
                console.error('Failed to parse JSON:', parseError);
            }
        } catch (error) {
            console.error('Failed to send data:', error);
        }
    };
    

    const submitResponses = () => {
        const response = {
            date: new Date().toISOString().split('T')[0], // Format: YYYY-MM-DD
            moreve: timeOfDay,
            email: userEmail,
            ...answers
        };
        console.log(response); // For debugging, replace this with your API call
        sendDataToServer(response);
    };


    // Determine swipe direction based on touch start/end points
    let touchStartX = 0;
    let touchEndX = 0;

    const handleDoneClick = () => {
        setIsDone(!isDone); // Toggle the isDone state
        const timeoutId = setTimeout(() => {
            submitResponses();
            navigation.navigate("Homepage");
        }, 100); // 1000 milliseconds = 1 second delay

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    };

    const handleTouchStart = (e) => {
        touchStartX = e.nativeEvent.pageX;
    };

    const handleTouchEnd = () => {
        // Determine if swipe was to the left
        if (touchStartX - touchEndX > 50) { // Adjust threshold as necessary
            // Show next question
            setCurrentIndex(prevIndex => {
                // Only increment the index if it's less than the last question's index
                if (prevIndex < questions.length - 1) {
                    return prevIndex + 1;
                } else {
                    // If it's the last question, keep the index the same
                    return prevIndex;
                }
            });
            setInputValue("");
            changePosition();
            
        }
    };

    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(150);
    const changePosition = () => {
        if (positionX < 200) {
            setPositionX((prevPositionX) => prevPositionX + 50); 
        }
        if (positionY >= 45) {
            setPositionY((prevPositionY) => prevPositionY - 35); 
        }
    };

    return (
        
        <View 
            style={styles.container}
            onTouchStart={handleTouchStart}
            onTouchEnd={(e) => {
                touchEndX = e.nativeEvent.pageX;
                handleTouchEnd();
            }}
        >
            <View style={styles.containerimage}>
                <Image
                    source={imageSource} // Replace with your image URL
                    style={[styles.movingImage, { left: positionX, top: positionY }]}
                />
            </View>
            <Text style={[styles.whatAmI, styles.whatTypo]}>
                {questions[currentIndex]}
            </Text>
            <TextInput
                style={styles.frameItem}
                mode="flat"
                value={inputValue}
                onChangeText={setInputValue}
                // multiline={true}
                theme={{ colors: { background: "#d9d9d9" } }}
                // onSubmitEditing={() => setEnterPressed(true)}
                onSubmitEditing={(event) => {
                    handleAnswer(event.nativeEvent.text);  // Pass the final text to handleAnswer
                    setEnterPressed(true);
                }}
                 // If you want to allow multiple lines
            />

            {currentIndex === questions.length - 1 && enterPressed && (
                <Pressable 
                    style={[styles.doneButton, isDone && styles.doneButtonClicked]} 
                    onPress={handleDoneClick}
                >
                    <Text style={styles.doneButtonText}>✓</Text>
                </Pressable>
            )}
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
            fontSize: FontSize.size_11xl,
            backgroundColor: Color.colorGainsboro,
            width: 350,
            height: 350,
            borderRadius: Border.br_41xl,
            alignContent: 'center',
            overflow:'scroll'
        },
        whatTypo: {
            // Styles for Text components
            fontSize: FontSize.size_11xl,
            color: Color.colorDarkslategray,
            fontFamily: FontFamily.ubuntuRegular,
            width: 323, // Ensure Text has a defined width in a horizontal ScrollView,
            height: 150,
            textAlignVertical:'bottom',
            overflow:'hidden'
        },

        doneButton: {
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: Color.colorDarkslategray, // Change as needed
            borderRadius: 25, // Circular button
            bottom: 10,
            position: 'absolute',
        },

        doneButtonClicked: {
            backgroundColor: Color.colorSilver_200, // Change to your preferred color when clicked
        },
        doneButtonText: {
            fontSize: 36,
            fontFamily:"Lora-Regular",
            color: Color.colorDarkslategray, // Text color, change as needed
        },
        containerimage: {
            width: 350, // Set your desired dimensions for the container
            height: 200,
            position: 'relative',
            backgroundColor: Color.colorSlategray,
            overflow: 'hidden', // Allows the image to overflow the bounds of the container
        },
        movingImage: {
            position: 'absolute', // Positioned absolutely within the parent container
            width: 150, // Set your desired dimensions for the image
            height: 150,
        },
    });
    
export default QuestionView;
