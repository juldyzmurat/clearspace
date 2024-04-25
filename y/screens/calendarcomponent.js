import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Color, Border } from "../GlobalStyles";

const CalendarComponent = () => {
    const [currentMonth, setCurrentMonth] = useState([]);
    const [filledDays, setFilledDays] = useState({});

    useEffect(() => {
        const loadData = async () => {
            try {
                const today = new Date();
                const month = today.getMonth() + 1; // JavaScript months are 0-indexed
                const year = today.getFullYear();
                const userEmail = "zxu4@case.edu"; // Retrieve the user's email

                const response = await fetch(`http://10.0.2.2:5050/habittracker?email=${userEmail}&month=${month}&year=${year}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setCurrentMonth(data.currentMonth || []); // Update the current month with the fetched data or an empty array if none
                setFilledDays(data.filledDays || {}); // Assuming data.filledDays is the object that holds which days are filled
            } catch (error) {
                console.error('Failed to load habit tracker data:', error);
                // Handle errors here
            }
        };

        loadData();
    }, []);


    const toggleDay = async (day) => {
        const today = new Date();
        const dateToCheck = new Date(today.getFullYear(), today.getMonth(), day);
        if (dateToCheck > today) {
            return; // Prevent filling days after today
        }
        
        const updatedFilledDays = { ...filledDays, [day]: !filledDays[day] };
        setFilledDays(updatedFilledDays);
        
        // Update the server with the new state
        try {
            const month = today.getMonth() + 1;
            const year = today.getFullYear();
            const userEmail = "zxu4@case.edu";
    
            await fetch(`http://10.0.2.2:5050/habittracker/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: userEmail, month, year, filledDays: updatedFilledDays }),
            });
        } catch (error) {
            console.error('Failed to update habit tracker data:', error);
            // Optionally revert the UI to the previous state if the server update fails
            setFilledDays(filledDays);
        }
    };

    return (
        <View style={styles.calendarContainer}>
            {currentMonth.map((day, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.dayCell,
                        {
                            backgroundColor: day && filledDays[day] ? Color.colorSnow : 'transparent',
                            borderColor: day ? Color.colorWhite : 'transparent'
                        }
                    ]}
                    onPress={() => day && toggleDay(day)}
                    disabled={!day}
                >
                    <Text>{day}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    calendarContainer: {
        flexDirection: 'row', // Align children in a row
        flexWrap: 'wrap', // Allow wrapping to next line
        padding: 10,
        backgroundColor: 'transparent',
        left: 7,
        top: 160,
        width: (7 * (42 + 2 * 5)) + (2 * 10), // 7 cells, 42 width each, 5 margin on each side, 10 padding on container sides
    },
    dayCell: {
        height: 42, // Height of the cell
        width: 42, // Width of the cell
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        borderWidth: 1, // Width of the border
        borderColor: Color.colorWhite, // Color of the border
        borderRadius: Border.br_5xs, // Border radius
        margin: 5, // Margin around each cell
    },

});

export default CalendarComponent;
