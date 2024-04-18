import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";


const generateSquares = (totalSquares) => {
    const squares = [];
    const columns = 7; // Fixed number of columns
    const squareSize = 42; // Size of each square
    const gap = 10; // Gap between squares
    for (let i = 0; i < totalSquares; i++) {
        const row = Math.floor(i / columns);
        const col = i % columns;
        squares.push(
            <View
                key={i}
                style={[
                styles.habitChildLayout,
                    {
                        left: col * (squareSize + gap),
                        top: row * (squareSize + gap),
                    },
                ]}
            />
        );
    }
    return squares;
};

const GridComponent = ({ totalSquares }) => {
    return (
        <View style={styles.gridContainer}>
        {generateSquares(totalSquares)}
        </View>
    );
};

const styles = StyleSheet.create({
    gridContainer: {
        position: 'relative',
        // Adjust the container height based on the number of rows needed
        height: ((Math.ceil(31 / 7)) * (42 + 10)) - 10, // 42 is square size, 10 is gap size
        width: (7 * (42 + 10)) - 10, // 7 columns, 42 square size, 10 gap
        backgroundColor: 'transparent', // Set to any color needed or transparent
    },
    habitChildLayout: {
        top: 0, // Initial top position, will be overridden
        left: 0, // Initial left position, will be overridden
        backgroundColor: Color.colorSnow,
        height: 42,
        width: 42,
        borderWidth: 1,
        borderColor: Color.colorWhite,
        borderStyle: 'solid',
        borderRadius: Border.br_5xs,
        position: 'absolute',
    },
});

export default GridComponent;
