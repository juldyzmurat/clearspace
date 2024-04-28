import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Color, Border } from "../GlobalStyles";

const CalendarComponent = () => {
    const [currentMonth, setCurrentMonth] = useState([]);
    const [filledDays, setFilledDays] = useState({});
    const filledDaysRef = useRef(filledDays);

    useEffect(() => {
        filledDaysRef.current = filledDays; // Update ref whenever filledDays changes
    }, [filledDays]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const today = new Date();
                const month = today.getMonth() + 1;
                const year = today.getFullYear();
                const userEmail = "zxu4@case.edu";
                console.log(month);
                console.log(year);

                const response = await fetch(`http://10.0.2.2:5050/habittracker?email=${userEmail}&month=${month}&year=${year}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data.filledDays);
                setCurrentMonth(data.currentMonth || []);
                setFilledDays(data.filledDays || {});
            } catch (error) {
                console.error('Failed to load habit tracker data:', error);
            }
        };

        loadData();

        return () => {
            console.log(filledDaysRef.current); // Use ref here for the latest state
            if (Object.keys(filledDaysRef.current).length > 0) {
                sendFinalUpdate(); // Modify sendFinalUpdate to use filledDaysRef.current
            }
        };
    }, []);

    const sendFinalUpdate = async () => {
        console.log("sending");
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const userEmail = "zxu4@case.edu";
        try {
            await fetch(`http://10.0.2.2:5050/habittracker/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: userEmail,
                    month,
                    year,
                    filledDays: filledDaysRef.current // Use ref to access the latest state
                }),
            });
            console.log(JSON.stringify({ email: userEmail, month, year, filledDays: filledDaysRef.current }));
        } catch (error) {
            console.error('Failed to send final update for habit tracker data:', error);
        }
    };

    const toggleDay = async (day) => {
        const today = new Date();
        const dateToCheck = new Date(today.getFullYear(), today.getMonth(), day);
        if (dateToCheck > today) {
            return;
        }

        const updatedFilledDays = { ...filledDays, [day]: !filledDays[day] };
        setFilledDays(updatedFilledDays);
        console.log(filledDays);
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        backgroundColor: 'transparent',
        left: 7,
        top: 160,
        width: (7 * (42 + 2 * 5)) + (2 * 10),
    },
    dayCell: {
        height: 42,
        width: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Color.colorWhite,
        borderRadius: Border.br_5xs,
        margin: 5,
    },
});

export default CalendarComponent;
