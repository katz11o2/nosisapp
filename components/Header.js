import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  Animated,
} from 'react-native';

const Header = ({ textInput1 = '', onChangeTextInput1 }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownAnim = useState(new Animated.Value(0))[0]; // For dropdown fade-in/slide-in animation
  const textAnim = useState(new Animated.Value(0))[0]; // For text animation
  const imageAnim = useState(new Animated.Value(0))[0]; // For image animation

  const handleFocus = () => {
    setIsFocused(true);
    // Animate dropdown visibility and content
    Animated.parallel([
      Animated.timing(dropdownAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(),
      Animated.timing(textAnim, {
        toValue: 1,
        duration: 300,
        delay: 150,
        useNativeDriver: true,
      }).start(),
      Animated.timing(imageAnim, {
        toValue: 1,
        duration: 300,
        delay: 200,
        useNativeDriver: true,
      }).start(),
    ]);
  };

  const handleBlur = () => {
    setIsFocused(false);
    // Reset the animations
    Animated.parallel([
      Animated.timing(dropdownAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(),
      Animated.timing(textAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(),
      Animated.timing(imageAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(),
    ]);
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}
      >
        <View
          style={{
            width: 140,
            flexDirection: 'row',
            right: 14,
            height: 40,
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 8,
            paddingHorizontal: 8,
          }}
        >
          <Image
            source={{
              uri: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82ac70b5-195f-4650-8f27-1ff0925ed908',
            }}
            resizeMode="stretch"
            style={{
              width: 16,
              height: 16,
              marginLeft: 2,
              marginRight: 4,
            }}
          />
          <TextInput
            placeholder="Search for books"
            value={textInput1}
            onChangeText={onChangeTextInput1}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
              color: '#737373',
              fontSize: 10,
              width: 180,
            }}
          />
          <View style={{ width: 16, height: 16 }} />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#01383D',
            borderRadius: 24,
            padding: 10,
            shadowColor: '#0000001A',
            shadowOpacity: 0.1,
            right: 5,
            shadowOffset: { width: 0, height: 1 },
            shadowRadius: 2,
            elevation: 2,
          }}
          onPress={() => alert('Pressed!')}
        >
          <Image
            source={{
              uri: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29a87e40-3b1f-4eb2-afe7-1df516307c0b',
            }}
            resizeMode="stretch"
            style={{
              borderRadius: 24,
              width: 16,
              height: 16,
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Dropdown Boxes */}
      {isFocused && (
        <Animated.View
          style={{
            width: '100%',
            position: 'absolute',
            top: 80,
            opacity: dropdownAnim, // Dropdown animation
            transform: [
              {
                translateY: dropdownAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-20, 0], // Slide down
                }),
              },
            ],
          }}
        >
          <View
            style={{
              backgroundColor: '#FFFFFF',
              height: 40,
              marginBottom: 2,
              bottom: 25,
              width: 140,
              left: 163,
              borderRadius: 8,
              padding: 10,
              alignItems: 'center',
              elevation: 2,
            }}
          >
            <Animated.Image
              source={{
                uri: 'data:image/png;base64,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',
              }}
              style={{
                width: 20,
                height: 20,
                bottom: 1,
                right: 50,
                opacity: imageAnim, // Image fade-in animation
                transform: [
                  {
                    translateY: imageAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [10, 0], // Subtle vertical slide
                    }),
                  },
                ],
              }}
            />
            <Animated.Text
              style={{
                left: 14,
                bottom: 22,
                fontSize: 12,
                textAlign: 'center',
                fontWeight: 'bold',
                opacity: textAnim, // Text fade-in animation
                transform: [
                  {
                    translateY: textAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [10, 0], // Subtle vertical slide
                    }),
                  },
                ],
              }}
            >
              48 Laws of Power
            </Animated.Text>
            <Animated.Text
              style={{
                left: 14,
                bottom: 22,
                fontSize: 10,
                textAlign: 'center',
                color: '#737373',
                opacity: textAnim, // Text fade-in animation
                transform: [
                  {
                    translateY: textAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [10, 0], // Subtle vertical slide
                    }),
                  },
                ],
              }}
            >
              Robert Greene
            </Animated.Text>
          </View>
        </Animated.View>
      )}
    </>
  );
};

export default Header;
