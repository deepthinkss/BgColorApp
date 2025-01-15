import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App() {
  const [cardColor, setCardColor] = useState("#6A1B4D");

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setCardColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.title}>BGChanger</Text>
        <View style={[styles.card, { backgroundColor: cardColor }]}>
          <Text style={styles.cardText}>Card Color: {cardColor}</Text>
        </View>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    width: 310,
    height: 550,
    borderRadius: 12,
    elevation: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  cardText: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  actionBtn: {
    borderRadius: 18,
    backgroundColor: "#E40A0E",
    paddingVertical: 10,
    paddingHorizontal: 40,
   

  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
});

export default App;
