import React from "react";
import { View, Text, Image } from "react-native";

const Footer = () => {
  return (
    <View 
      style={{
        flexDirection: "row",
        width: 412,
        alignItems: "flex-start",
        paddingBottom: 1,
        backgroundColor: "#FDFCFC",
      }}
    >
      <View 
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 13,
          paddingBottom: 12,
          paddingHorizontal: 51,
          right: 24,
        }}
      >
        <Image
          source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92d9143c-c929-47ee-a89a-227f0c0f5202" }}
          resizeMode="stretch"
          style={{
            width: 20,
            height: 20,
            flexShrink: 0,
            marginBottom: 4,
          }}
        />
        <Text 
          style={{
            color: "#01272B",
            fontFamily: "DM Sans",
            fontSize: 12,
            fontWeight: "600",
          }}
        >
          Home
        </Text>
      </View>

      <View 
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 13,
          paddingBottom: 12,
          right: 35,
          paddingHorizontal: 46,
        }}
      >
        <Image
          source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06c002ba-dd1f-460a-ab5e-91a908bae905" }}
          resizeMode="stretch"
          style={{
            width: 20,
            height: 20,
            flexShrink: 0,
            marginBottom: 4,
          }}
        />
        <Text 
          style={{
            color: "#01272B",
            fontFamily: "DM Sans",
            fontSize: 12,
            fontWeight: "600",
          }}
        >
          Explore
        </Text>
      </View>

      <View 
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 13,
          paddingBottom: 12,
          right: 35,
          paddingHorizontal: 47,
        }}
      >
        <Image
          source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be12fbae-f689-4acf-a833-fe8c8135c92f" }}
          resizeMode="stretch"
          style={{
            width: 20,
            height: 20,
            flexShrink: 0,
            marginBottom: 4,
          }}
        />
        <Text 
          style={{
            color: "#01272B",
            fontFamily: "DM Sans",
            fontSize: 12,
            fontWeight: "600",
          }}
        >
          Library
        </Text>
      </View>
    </View>
  );
};

export default Footer;
