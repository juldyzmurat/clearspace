import React, { useState , useEffect} from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Button, StyleSheet, ScrollView, FlatList,Pressable} from 'react-native';
import { createClient } from 'pexels';
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const emotionColors = {
    admiration: '#FFD700',
    amusement: '#E2A76F',
    anger: '#FF0000',
    annoyance: '#E74C3C',
    approval: '#56ab2f',
    caring: '#FFC0CB',
    confusion: '#E5E4E2',
    curiosity: '#F7CA18',
    desire: '#C71585',
    disappointment: '#95A5A6',
    disapproval: '#696969',
    disgust: '#808000',
    embarrassment: '#F08080',
    excitement: '#FF4500',
    fear: '#000000',
    gratitude: '#D4AC0D',
    grief: '#34495E',
    joy: '#FFFF00',
    love: '#FF69B4',
    nervousness: '#778899',
    neutral: '#FFFFFF',
    optimism: '#2ECC71',
    pride: '#800080',
    realization: '#1ABC9C',
    relief: '#AED6F1',
    remorse: '#7F8C8D',
    sadness: '#3498DB',
    surprise: '#F1C40F',
};


// React component to display the mood and associated visuals
const MonthlyRecap = () => {
    const navigation = useNavigation();

    const [topEmotions, setTopEmotions] = useState([]);
    const [mixedcolor,setMixedColor] = useState('#FFFFFF');
    const [topHex, setTopHex] = useState([]);
    const [linktoImages, setlinktoImages] = useState([]);
    const [data, setData] = useState([]);
    

    function mixColors(colorWeights) {
        // Initialize RGB components
        let totalWeight = 0;
        let mixedRed = 0;
        let mixedGreen = 0;
        let mixedBlue = 0;
    
        // Loop through each color and its weight
        colorWeights.forEach(({ color, weight }) => {
            // Convert hex color to RGB components
            const red = parseInt(color.substring(1, 3), 16);
            const green = parseInt(color.substring(3, 5), 16);
            const blue = parseInt(color.substring(5, 7), 16);
    
            // Accumulate weighted RGB components
            totalWeight += weight;
            mixedRed += red * weight;
            mixedGreen += green * weight;
            mixedBlue += blue * weight;
        });
    
        // Normalize mixed RGB components
        mixedRed = Math.round(mixedRed / totalWeight);
        mixedGreen = Math.round(mixedGreen / totalWeight);
        mixedBlue = Math.round(mixedBlue / totalWeight);
    
        // Convert mixed RGB components to hex color code
        const mixc = `#${(mixedRed << 16 | mixedGreen << 8 | mixedBlue).toString(16).padStart(6, '0')}`;
    
        return mixc;
    }

    function createColorWeights(topEmotions) {
        return topEmotions.map(emotion => {
            return {
                color: emotionColors[emotion.label] || '#FFFFFF', // Default to white if emotion color not found
                weight: emotion.score
            };
        });
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "https://api-inference.huggingface.co/models/SamLowe/roberta-base-go_emotions",
                    {
                        headers: { Authorization: "Bearer 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" },
                        method: "POST",
                        body: JSON.stringify({inputs: "I am looking forward to accomplishing my goals this week."}),
                    }
                );
                const result = await response.json();
                const sortedEmotions = result[0].sort((a, b) => b.score - a.score).slice(0, 5);
                setTopEmotions(sortedEmotions);

                const colorWeights = createColorWeights(topEmotions);
                newColor = mixColors(colorWeights);
                setMixedColor(newColor);
                tophex = colorWeights.map(item => item.color);
                setTopHex(tophex);
                fetchImages(topHex).then(urls => {
                    const urls1 = urls.slice(3);
                    setlinktoImages(urls1);
                });
                const transformedData = sortedEmotions.map(emotion => ({
                    name: emotion.label,
                    color: emotionColors[emotion.label] || '#FFFFFF'
                }));
                setData(transformedData);
                transformedData.push({
                    name: 'Your unique color of the month',
                    color: newColor,  // Example: Black color or any other color
                });
            

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);


    const client = createClient('gtKTqgeq2v9sCm53CReGVtaUJ969DxFxTGMli0NHloJ185qVnAz1ntC7');
    const query = 'Nature';
    const colors = topHex;

    const imageUrls = [];

    const fetchImages = async () => {
        for (const color of colors) {
            try {
                const response = await client.photos.search({ query, color, page: 1, per_page: 20 });
                let addedCount = 0; // Count how many images have been added for this color
    
                if (response.photos.length > 0) {
                    for (let photo of response.photos) {
                        if (addedCount < 3 && !imageUrls.includes(photo.src.original)) { // Check if the URL is not already added and limit to 3
                            imageUrls.push(photo.src.original);
                            addedCount++;
                        }
                        if (addedCount >= 3) break; // Stop if 3 images have been added
                    }
                } else {
                    console.log(`No photos found for color: ${color}`);
                }
            } catch (error) {
                console.error(`Error fetching photos for color: ${color}`, error);
            }
        }
        return imageUrls;
    };



    return (
        <View style={styles.container}>
            <Text style={[styles.clearSpace, styles.clearSpaceFlexBox]}>
                Clear Space
            </Text>
            
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
            
            <Text style={styles.paletteText}>
                Your Color Palette of the Month
            </Text>

            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={[styles.item, { backgroundColor: item.color }]}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                contentContainerStyle={{ flexGrow: 1, marginTop:10,marginBottom:10}}
            />
            <Text style={styles.getInspiredText}>
                Get Inspired by your palette found in nature
            </Text>

            <FlatList
                data={linktoImages}
                renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={styles.image} />
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}  // Sets the number of columns to 3
                contentContainerStyle={[styles.flatListContainer, { alignItems: 'center'}]} // Centers the items if not filling the screen
            />
        </View>
    );
};

const styles = StyleSheet.create({
    paletteText: {
        color: Color.colorSlategray,        
        fontSize: 24,   
        fontFamily: FontFamily.loraSemiBold,         
        fontWeight: 'bold',       
        textAlign: 'left',
        marginTop: 50,       
    },
    getInspiredText: {
        color: Color.colorSilver_200,         
        fontSize: 24,   
        fontFamily: FontFamily.loraRegular,         
        fontWeight: 'bold',       
        textAlign: 'left',  
        fontStyle:'italic',
        marginBottom: 10, 
    },
    flatListContainer: {
        width: 350, // You might want to adjust this if needed
        height: 'auto', // Adjust based on content, or set a fixed height
        left:10,
    },
    clearSpaceFlexBox: {
        alignItems: "center",
        display: "flex",
        color: Color.colorDarkslategray,
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
        zIndex: 2,
        position: "absolute",
    },
    groupChild: {
        top: 6,
        left: 41,
        width: 38,
        height: 22,
        position: "absolute",
    },
    iconLayout: {
        overflow: "hidden",
        width: "100%",
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
    container: {
        padding: 20,
    },
    emotionItem: {
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        alignItems: 'center',
    },
    emotionText: {
        color: '#000000',
        fontSize: 16,
    },
    image: {
        width: '33%', // Each image takes up one-third of the screen width
        height: 100,
        padding: 2,
    },
    item: {
        flex: 1,
        margin: 5,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        color: 'black',
        fontSize: 16,
        fontFamily: FontFamily.loraRegular,
    }
});


export default MonthlyRecap;
