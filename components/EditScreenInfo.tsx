import React, { useState } from 'react';
import { TextInput, SafeAreaView, StyleSheet, useColorScheme, Platform  } from 'react-native';
import numWords from 'num-words';
import Colors from './customColor'; // Ensure this path is correct
import { Text, View } from './Themed'; // Use your custom Themed components here

export default function App() {
  const [number, setNumber] = useState('');
  const [word, setWord] = useState('');
  const scheme = useColorScheme(); // Get the current color scheme ('light' or 'dark')

  const convertToWords = (numInput: string) => {
    setNumber(numInput);
    if (numInput.length > 8) {
      setWord("Number too large");
      return;
    }
    const num = parseInt(numInput);
    try {
      if (!isNaN(num)) {
        const wordConverted = numWords(num);
        const capitalizedWord = wordConverted.charAt(0).toUpperCase() + wordConverted.slice(1);
        setWord(capitalizedWord);
      } else {
        setWord("Invalid");
      }
    } catch (error) {
      console.error(error);
      setWord("Error converting number");
    }
  };

  const textInputStyles = StyleSheet.flatten([
    styles.input,
    {
      color: scheme === 'dark' ? Colors.dark.text : Colors.light.text,
      borderColor: scheme === 'dark' ? Colors.dark.border : Colors.light.border,
    }
  ]);

  return (
    <SafeAreaView style={scheme === 'dark' ? styles.safeAreaDark : styles.safeAreaLight}>
      <Text style={scheme === 'dark' ? styles.textDark : styles.textLight}>{word} Only</Text>
      <View style={scheme === 'dark' ? styles.containerDark : styles.containerLight}>
        <TextInput
          style={textInputStyles}
          onChangeText={convertToWords}
          value={number}
          keyboardType="numeric"
          placeholder="Enter a number to convert to words"
          placeholderTextColor={scheme === 'dark' ? Colors.dark.placeholder : Colors.light.placeholder}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaDark: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeAreaLight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDark: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderColor: Platform.OS === 'web' ? '#333' : undefined,
    color: Platform.OS === 'web' ? '#fff' : undefined,
  },
  textDark: {
    marginTop: 20,
    fontSize: 20,
  },
  textLight: {
    marginTop: 20,
    fontSize: 20,
  },
});
