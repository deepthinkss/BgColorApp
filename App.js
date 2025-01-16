import React, { useState, useRef } from 'react';
import {
  Animated,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
export default App;
function App(){
  const [cardColor, setCardColor] = useState("#6A1B4D");
  const [darkMode, setDarkMode] = useState(false); // State for light/dark mode
  const cardScale = useRef(new Animated.Value(1)).current; // Card scale animation
  const buttonScale = useRef(new Animated.Value(1)).current; // Button scale animation

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setCardColor(color);

    // Trigger card animation
    Animated.sequence([
      Animated.timing(cardScale, {
        toValue: 1.1, // Increase scale
        duration: 75,
        useNativeDriver: true,
      }),
      Animated.timing(cardScale, {
        toValue: 1, // Reset to original scale
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    // Trigger button animation
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.9, // Shrink button slightly
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(buttonScale, {
        toValue: 1, // Reset to original scale
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <StatusBar
        backgroundColor={darkMode ? "#1E1E1E" : "#bcf6f7"}
        barStyle={darkMode ? "light-content" : "dark-content"}
      />
      <View
        style={[
          styles.container,
          { backgroundColor: darkMode ? "#1E1E1E" : "#bcf6f7" },
        ]}
      >
        <TouchableOpacity onPress={toggleTheme} style={styles.themeToggleBtn}>
          <Text style={styles.themeToggleText}>
            {darkMode ? " 🌞 " : " 🌚 "}
          </Text>
        </TouchableOpacity>
        <Text
          style={[styles.title, { color: darkMode ? "#FFF" : "#333" }]}
        >
          Background Changer🎨
        </Text>
        <Animated.View
          style={[
            styles.card,
            { backgroundColor: cardColor, transform: [{ scale: cardScale }] },
          ]}
        >
          <Text style={styles.cardText}>I'm a colorful card!</Text>
        </Animated.View>
        <TouchableOpacity onPress={generateColor}>
          <Animated.View
            style={[
              styles.actionBtn,
              {
                transform: [{ scale: buttonScale }],
                backgroundColor: darkMode ? "#444" : "#00b4c5",
              },
            ]}
          >
            <Text
              style={[
                styles.actionBtnTxt,
                { color: darkMode ? "#FFF" : "#000" },
              ]}
            >
              Press Me
            </Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: 300,
    height: 450,
    borderRadius: 12,
    elevation: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  cardText: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    fontStyle:"italic"
  },
  actionBtn: {
    backgroundColor: '#6200ea',
    width: 90,
    height: 50,
    borderRadius: 10, // Makes the button circular
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, 
  },
  actionBtnTxt: {
    fontSize: 14,
    fontWeight: 600,
    textTransform: "uppercase",
  },
  themeToggleBtn: {
    position: "absolute",
    top: 60,
    right: 20,
    padding: 10,
    backgroundColor: 'transparent',
    // borderRadius: 8,
    elevation: 4,
  },
  themeToggleText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
  },
});


