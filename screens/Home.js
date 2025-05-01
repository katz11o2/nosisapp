import React, {useState} from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';

import { DMSans_400Regular, DMSans_600SemiBold } from '@expo-google-fonts/dm-sans';
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, TextInput, ImageBackground, } from "react-native";


export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: " #F4EDE7",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#F4EDE7",
				}}>
				<View 
					style={{
						marginBottom: 23,
					}}>
					<View 
						style={{
							backgroundColor: "#1D1D1DBD",
							marginBottom: 1,
						}}>
					
<TouchableOpacity 
  style={{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(189, 189, 189, 0.4)",
    borderRadius: 10,
    width: 340,             // reduced by 30px
    height: 36,
    flexShrink: 0,
    marginTop: 36,
	marginBottom: 7,
    paddingHorizontal: 8,
    marginLeft: 10,         // moved 20px to the right
  }} 
  onPress={() => alert('Pressed!')}
>
  <Image
    source={require('../assets/icon textformat.size.png')}
    style={{
      width: 19,
      height: 14,
      marginRight: 88,
	  marginLeft: 2,
      tintColor: '#FFFFFF',
    }}
  />

  <Image
    source={require('../assets/icon.jpg')}
    style={{
      width: 13,
      height: 18,
      marginRight: 1,
	  right:4,
	  marginTop: 2,
      tintColor: '#FFFFFF',
      resizeMode: 'contain',
      backgroundColor: 'transparent',
    }}
  />

  <Text 
    style={{
      color: '#FFFFFF',
      fontFamily: 'SF Pro Text',
      fontSize: 16,
      fontStyle: 'normal',
	  marginTop: 6,
      fontWeight: '400',
      lineHeight: 16,
	  marginRight: 15,
      flex: 1,
    }}>
    nosisapp.com
  </Text>

  <Image
    source={require('../assets/icons8.png')}
    style={{
      width: 17,
      height: 17,
      marginRight: 2,
      tintColor: '#FFFFFF',
      transform: [{ rotate: '58deg' }],
    }}
  />
</TouchableOpacity>


					</View>
					<View  
  style={{
    flexDirection: "row",                // display: flex (default)
    alignItems: "center",                // align-items: center;
    justifyContent: "space-between",     // justify-content: space-between;
    height: 64,                          // height: 64px;
    paddingTop: 14,                      // padding: 14px 16px;
    paddingBottom: 14,
    paddingHorizontal: 16,
    alignSelf: "stretch",                // align-self: stretch;

    backgroundColor: "#F3F0EC",
    borderColor: "#E5E5E566",
    borderBottomWidth: 1,
    shadowColor: "#0000000D",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 3,
  }}>
  
  <View 
    style={{
      flexDirection: "row",
      alignItems: "center",
      marginRight: 74,
    }}>
    <Image
      source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84f1ded9-7d78-4d94-92fd-7eb661d927ad"}} 
      resizeMode = {"stretch"}
      style={{
        width: 24,
        height: 15.761,
        marginRight: 8,
      }}
    />
    <Text 
      style={{
        color: "#01383D",
        fontFamily: "Poppins",      // from earlier request
        fontSize: 20,
        fontWeight: "700",
		marginBottom:3,
        lineHeight: 28,
      }}>
      {"Home"}
    </Text>
  </View>
  <Header/>
 
</View>


				</View>
        
				<Text 
  style={{
    color: "#000",
    fontFamily: "DMSans_600SemiBold", // Use the correct custom font name
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "600", // should match the font variant you loaded
    lineHeight: 28,
    marginTop: 4,
    marginBottom: 17,
    marginHorizontal: 16,
  }}>
  {"Continue Reading"}
</Text>



<ScrollView 
  horizontal 
  showsHorizontalScrollIndicator={false} 
  contentContainerStyle={{ paddingLeft: 12, paddingRight: 16, marginBottom: 36 }}>
  {[...Array(3)].map((_, index) => (
    <View 
      key={index}
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        padding: 16,
        marginRight: 16,
      }}>
      <Image
        source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d15c7e98-4c3c-4927-95a3-6c787a182d19"}} 
        resizeMode = {"stretch"}
        style={{
          borderRadius: 8,
          width: 96,
          height: 144,
          marginRight: 16,
        }}
      />
      <View 
        style={{
          alignItems: "flex-start",
        }}>
        <View 
          style={{
            marginBottom: 9,
          }}>
          <Text 
            style={{
              color: "#000000",
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 5,
              width: 148,
            }}>
            {"The Power of Your\nSubconscious Mind"}
          </Text>
          <Text 
            style={{
              color: "#737373",
              fontSize: 12,
              marginBottom: 1,
              marginRight: 71,
            }}>
            {"Joseph Murphy"}
          </Text>
        </View>
        <View 
          style={{
            alignItems: "flex-start",
            marginBottom: 9,
          }}>
          <View 
            style={{
              alignItems: "flex-start",
              backgroundColor: "#01383D1A",
              borderRadius: 33554400,
              paddingRight: 52,
              marginBottom: 8,
            }}>
            <View 
              style={{
                width: 104,
                height: 6,
                backgroundColor: "#01383D",
              }}>
            </View>
          </View>
          <View 
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}>
            <Text 
              style={{
                color: "#737373",
                fontSize: 10,
                marginBottom: 1,
                marginRight: 11,
              }}>
              {"67% Complete"}
            </Text>
            <Image
              source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b317cfdf-f1e7-435d-ab91-35b02a6243a7"}} 
              resizeMode = {"stretch"}
              style={{
                width: 14,
                height: 14,
                marginRight: 4,
              }}
            />
            <Text 
              style={{
                color: "#737373",
                fontSize: 10,
              }}>
              {"15 mins"}
            </Text>
          </View>
        </View>
        <TouchableOpacity 
          style={{
            backgroundColor: "#FDFCFC",
            borderColor: "#2C5A5E",
            borderRadius: 8,
            borderWidth: 1,
            paddingVertical: 8,
            paddingHorizontal: 12,
          }} onPress={()=>alert('Pressed!')}>
          <Text 
            style={{
              color: "#01383D",
              fontSize: 12,
              fontWeight: "bold",
            }}>
            {"Continue Reading"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  ))}
</ScrollView>

				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						paddingVertical: 2,
						marginBottom: 12,
						marginHorizontal: 16,
					}}>
					

					<View 
						style={{
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
  style={{
    color: "#000", // Black color
	fontFamily: "DMSans_600SemiBold", 
    fontSize: 24, // Font size of 24px
    fontStyle: "normal", // Normal font style
    fontWeight: "600", // Font weight of 600
    lineHeight: 28, // Line height of 28px
    marginTop: 4, // Margin top of 4px
    marginBottom: 10, // Margin bottom of 17px
  }}
>
  {"Readers' Choice"}
</Text>

<View 
						style={{
							flexDirection: "row",
              left:67,
							alignItems: "flex-start",
						}}>
						<TouchableOpacity 
							style={{
								backgroundColor: "#FFFFFF",
								borderRadius: 33554400,
								padding: 8,
								marginRight: 8,
								shadowColor: "#0000001A",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}} onPress={()=>alert('Pressed!')}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ad6bde8-7da2-43f2-b9c1-8182a20577cb"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 33554400,
									width: 16,
									height: 16,
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								backgroundColor: "#FFFFFF",
								borderRadius: 33554400,
								padding: 8,
								shadowColor: "#0000001A",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}} onPress={()=>alert('Pressed!')}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23472944-f8a0-44f5-9ae8-5dc981ba08d9"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 33554400,
									width: 16,
									height: 16,
								}}
							/>
						</TouchableOpacity>
					</View>
					</View>
				</View>
				<ScrollView 
  horizontal 
  showsHorizontalScrollIndicator={false} 
  style={{ marginBottom: 36 }}
>
  
  {/* Original View */}
  <View  
    style={{
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 36,
      marginLeft: 16,
    }}>
    {/* First Item */}
    <View 
      style={{
        alignItems: "flex-start",
        marginRight: 16,
      }}>
      <Image
        source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/264cd32e-a651-4cd3-afea-77c0c35675ab"}} 
        resizeMode = {"stretch"}
        style={{
          borderRadius: 10,
          width: 140,
          height: 210,
          marginBottom: 8,
        }}
      />
      <View >
        <Text 
          style={{
            color: "#000000",
            fontSize: 14,
            fontWeight: "bold",
            marginBottom: 5,
            marginRight: 14,
            width: 126,
          }}>
          {"What I Talk About\nWhen I Talk About…"}
        </Text>
        <Text 
          style={{
            color: "#737373",
            fontSize: 12,
            marginBottom: 5,
            marginRight: 50,
          }}>
          {"Haruki Murakami"}
        </Text>
        <Text 
          style={{
            color: "#737373",
            fontSize: 10,
            marginBottom: 1,
            marginRight: 108,
          }}>
          {"0 mins"}
        </Text>
      </View>
    </View>

    {/* Second Item */}
    <View 
      style={{
        alignItems: "flex-start",
        marginRight: 16,
      }}>
      <Image
        source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c332106-d87c-43f5-9e0a-7d4674169bf0"}} 
        resizeMode = {"stretch"}
        style={{
          borderRadius: 10,
          width: 140,
          height: 210,
          marginBottom: 8,
        }}
      />
      <View >
        <Text 
          style={{
            color: "#000000",
            fontSize: 14,
            fontWeight: "bold",
            marginBottom: 5,
            marginRight: 14,
            width: 126,
          }}>
          {"What I Talk About\nWhen I Talk About…"}
        </Text>
        <Text 
          style={{
            color: "#737373",
            fontSize: 12,
            marginBottom: 5,
            marginRight: 50,
          }}>
          {"Haruki Murakami"}
        </Text>
        <Text 
          style={{
            color: "#737373",
            fontSize: 10,
            marginBottom: 1,
            marginRight: 108,
          }}>
          {"0 mins"}
        </Text>
      </View>
    </View>

    {/* Third Item */}
    <View >
      <Image
        source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e8d2f33-4345-44f6-a470-b4471654e4c1"}} 
        resizeMode = {"stretch"}
        style={{
          borderRadius: 10,
          width: 140,
          height: 210,
          marginBottom: 8,
        }}
      />
      <Text 
        style={{
          color: "#000000",
          fontSize: 14,
          fontWeight: "bold",
          marginBottom: 5,
        }}>
        {"What I Talk About\nWhen I Talk About…"}
      </Text>
      <Text 
        style={{
          color: "#737373",
          fontSize: 12,
          marginBottom: 5,
        }}>
        {"Haruki Murakami"}
      </Text>
      <Text 
        style={{
          color: "#737373",
          fontSize: 10,
          marginBottom: 1,
        }}>
        {"0 mins"}
      </Text>
    </View>
  </View>

  {/* Duplicate the content three more times */}
  {[...Array(3)].map((_, index) => (
    <View  
      key={index}
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 36,
        marginLeft: 16,
      }}>
      {/* First Item */}
      <View 
        style={{
          alignItems: "flex-start",
          marginRight: 16,
        }}>
        <Image
          source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/264cd32e-a651-4cd3-afea-77c0c35675ab"}} 
          resizeMode = {"stretch"}
          style={{
            borderRadius: 10,
            width: 140,
            height: 210,
            marginBottom: 8,
          }}
        />
        <View >
          <Text 
            style={{
              color: "#000000",
              fontSize: 14,
              fontWeight: "bold",
              marginBottom: 5,
              marginRight: 14,
              width: 126,
            }}>
            {"What I Talk About\nWhen I Talk About…"}
          </Text>
          <Text 
            style={{
              color: "#737373",
              fontSize: 12,
              marginBottom: 5,
              marginRight: 50,
            }}>
            {"Haruki Murakami"}
          </Text>
          <Text 
            style={{
              color: "#737373",
              fontSize: 10,
              marginBottom: 1,
              marginRight: 108,
            }}>
            {"0 mins"}
          </Text>
        </View>
      </View>

      {/* Second Item */}
      <View 
        style={{
          alignItems: "flex-start",
          marginRight: 16,
        }}>
        <Image
          source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c332106-d87c-43f5-9e0a-7d4674169bf0"}} 
          resizeMode = {"stretch"}
          style={{
            borderRadius: 10,
            width: 140,
            height: 210,
            marginBottom: 8,
          }}
        />
        <View >
          <Text 
            style={{
              color: "#000000",
              fontSize: 14,
              fontWeight: "bold",
              marginBottom: 5,
              marginRight: 14,
              width: 126,
            }}>
            {"What I Talk About\nWhen I Talk About…"}
          </Text>
          <Text 
            style={{
              color: "#737373",
              fontSize: 12,
              marginBottom: 5,
              marginRight: 50,
            }}>
            {"Haruki Murakami"}
          </Text>
          <Text 
            style={{
              color: "#737373",
              fontSize: 10,
              marginBottom: 1,
              marginRight: 108,
            }}>
            {"0 mins"}
          </Text>
        </View>
      </View>

      {/* Third Item */}
      <View >
        <Image
          source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e8d2f33-4345-44f6-a470-b4471654e4c1"}} 
          resizeMode = {"stretch"}
          style={{
            borderRadius: 10,
            width: 140,
            height: 210,
            marginBottom: 8,
          }}
        />
        <Text 
          style={{
            color: "#000000",
            fontSize: 14,
            fontWeight: "bold",
            marginBottom: 5,
          }}>
          {"What I Talk About\nWhen I Talk About…"}
        </Text>
        <Text 
          style={{
            color: "#737373",
            fontSize: 12,
            marginBottom: 5,
          }}>
          {"Haruki Murakami"}
        </Text>
        <Text 
          style={{
            color: "#737373",
            fontSize: 10,
            marginBottom: 1,
          }}>
          {"0 mins"}
        </Text>
      </View>
    </View>
  ))}
</ScrollView>

<Text 
  style={{
    color: "#000",
	fontFamily: "DMSans_600SemiBold",  
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 28,
    bottom: 40,
    marginBottom: 0,
    marginHorizontal: 16,
  }}
>
  {"Categories"}
</Text>

				<View 
					style={{
						flexDirection: "row",
						alignItems: "flex-start",
						marginBottom: 12,
						marginLeft: 16,
					}}>
					<TouchableOpacity
  style={{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E5E5E5",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 25,
    marginRight: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  }}
  onPress={() => alert('Pressed!')}
>
  <Image
    source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37e4a84e-5822-4f92-9fce-e5822c8582f0",
    }}
    resizeMode="stretch"
    style={{
      width: 20,
      height: 19.961,
      flexShrink: 0,
      marginRight: 8,
    }}
  />
  <Text
    style={{
      color: "#01383D",
      fontSize: 14,
      fontWeight: "500",
      fontFamily: "DM Sans",
      lineHeight: 24,
    }}
  >
    Start-up & Entrepreneurship
  </Text>
</TouchableOpacity>

<TouchableOpacity
  style={{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E5E5E5",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  }}
  onPress={() => alert("Pressed!")}
>
  <Image
    source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/739d4529-c93b-4391-a76b-c10b74112474",
    }}
    resizeMode="stretch"
    style={{
      width: 20,
      height: 19.961,
      flexShrink: 0,
      marginRight: 8,
    }}
  />
  <Text
    style={{
      color: "#01383D",
      fontSize: 14,
      fontWeight: "500",
      fontFamily: "DM Sans",
      lineHeight: 24,
    }}
  >
    Philosophy
  </Text>
</TouchableOpacity>

				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "flex-start",
						marginBottom: 12,
						marginLeft: 16,
					}}>
			<TouchableOpacity
  style={{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E5E5E5",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
    marginRight: 12,
  }}
  onPress={() => alert("Pressed!")}
>
  <Image
    source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38b2b405-9cbc-4481-bf09-e276bcca832b",
    }}
    resizeMode="stretch"
    style={{
      width: 20,
      height: 20,
      flexShrink: 0,
      marginRight: 8,
    }}
  />
  <Text
    style={{
      color: "#01383D",
      fontSize: 14,
      fontWeight: "500",
      fontFamily: "DM Sans",
      lineHeight: 24,
    }}
  >
    Productivity
  </Text>
</TouchableOpacity>

<TouchableOpacity
  style={{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E5E5E5",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
    marginRight: 12,
  }}
  onPress={() => alert("Pressed!")}
>
  <Image
    source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/523fd7f7-6b21-4282-81a9-db5a388603dd",
	 
							
	}}
    resizeMode="stretch"
    style={{
      width: 20,
      height: 20,
      flexShrink: 0,
      marginRight: 8,
    }}
  />
  <Text
    style={{
      color: "#01383D",
      fontSize: 14,
      fontWeight: "500",
      fontFamily: "DM Sans",
      lineHeight: 24,
    }}
  >
    Sprituality

  </Text>
</TouchableOpacity>


<TouchableOpacity
  style={{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E5E5E5",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 25,
    shadowColor: "#0000001A",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  }}
  onPress={() => alert("Pressed!")}
>
  <Image
    source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/724771ce-07bd-46a7-b312-1b3eeec5c3b4",
    }}
    resizeMode="stretch"
    style={{
      width: 20,
      height: 19.961,
      flexShrink: 0,
      marginRight: 8,
    }}
  />
  <Text
    style={{
      color: "#01383D",
      fontFamily: "DM Sans",
      fontSize: 14,
      fontWeight: "500",
      lineHeight: 24,
    }}
  >
    Business
  </Text>
</TouchableOpacity>
			

				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "flex-start",
						marginBottom: 44,
						marginLeft: 16,
					}}>
					<TouchableOpacity
  style={{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E5E5E5",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 20,
    shadowColor: "#0000001A",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  }}
  onPress={() => alert("Pressed!")}
>
  <Image
    source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/587fe3ac-6df5-49f3-b243-5315b2a8850a",
    }}
    resizeMode="stretch"
    style={{
      width: 20,
      height: 19.961, // Keeping the size as per the given prop
      flexShrink: 0,
      marginRight: 8,
    }}
  />
  <Text
    style={{
      color: "#01383D", // Green color for the text
      fontFamily: "DM Sans", // Font family
      fontSize: 14,
      fontWeight: "500", // Medium font weight
      lineHeight: 24, // Line height
    }}
  >
    Biographies
  </Text>
</TouchableOpacity>


<TouchableOpacity
  style={{
    flexDirection: "row",
	left:10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E5E5E5",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 20, // Reduced by 5px
    shadowColor: "#0000001A",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  }}
  onPress={() => alert("Pressed!")}
>
  <Image
    source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe343ae0-23d3-447f-85b8-67659cb8620e",
    }}
    resizeMode="stretch"
    style={{
      width: 15, // Reduced width by 5px
      height: 19.961, // Keeping the height the same
      flexShrink: 0,
      marginRight: 8,
    }}
  />
  <Text
    style={{
      color: "#01383D", // Green color for the text
      fontFamily: "DM Sans", // Font family
      fontSize: 14,
      fontWeight: "500", // Medium font weight
      lineHeight: 24, // Line height
    }}
  >
    Health & Nutrition
  </Text>
</TouchableOpacity>

				
					<View 
						style={{
							width: 130,
							height: 40,
							left:13,
							backgroundColor: "#FFFFFF",
							borderColor: "#E5E5E5",
							borderRadius: 8,
							borderWidth: 1,
							shadowColor: "#0000001A",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 1
							},
							shadowRadius: 2,
							elevation: 2,
						}}>
					</View>
				</View>
				<View 
					style={{
						marginBottom: 36,
						marginHorizontal: 16,
					}}>
					<Text
  style={{
    color: "#000", // Black color
	fontFamily: "DMSans_600SemiBold", 
    fontSize: 24, // Font size of 24px
    fontStyle: "normal", // Normal font style
    fontWeight: "600", // Font weight of 600
    lineHeight: 28, // Line height of 28px
    marginTop: 4, // Margin top of 4px
    marginBottom: 17, // Margin bottom of 17px
  }}
>
  {"Book of the month"}
</Text>

<View 
						style={{
							flexDirection: "row",
							alignItems: "flex-start",
							backgroundColor: "#DAE4FF",
							borderRadius: 8,
							paddingLeft: 13,
							height:232,
							marginBottom: 12,

						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/783568a1-8e40-4a0d-9581-a0f1aa9c1a57"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 10,
								width: 133,
								height: 200,
								marginTop: 16,
								marginRight: 41,
							}}
						/>
						<View 
							style={{
								flex: 1,
								marginTop: 34,
							}}>
							<View >
								<ImageBackground 
									source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d843d81-4d26-45b0-9015-f627f7fa531c"}} 
									resizeMode = {'stretch'}
									imageStyle={{borderRadius: 8,}}
									style={{
										width: 400.381,
height: 226.071,

									}}
									>

<TouchableOpacity 
									style={{
										width: 66,
										flexDirection: "row",
										backgroundColor: "#01383D",
										borderRadius: 8,
										paddingVertical: 14,
										paddingHorizontal: 7,
										top:94,
										right:23,
										shadowColor: "#0000001A",
										shadowOpacity: 0.1,
										shadowOffset: {
										    width: 0,
										    height: 0.6678383350372314
										},
										shadowRadius: 1,
										
									}} onPress={()=>alert('Pressed!')}>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1aea1f0-d006-4348-9a1b-fc81babcb6c9"}} 
										resizeMode = {"stretch"}
										style={{
											width: 12,
											height: 12,
											left: 5,
										}}
									/>
									<Text 
										style={{
											color: "#F9F9F9",
											fontSize: 10,
											fontWeight: "bold",
											textAlign: "center",
											left:8,
                      bottom:1,
										}}>
										{"Read"}
									</Text>
								</TouchableOpacity>
									<TouchableOpacity
  style={{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 44,
    paddingVertical: 8,
    paddingHorizontal: 10,
	
    gap: 2,
    flexShrink: 0,
    borderRadius: 8,
	top:52,
	left:51,
    backgroundColor: "#FDFCFC",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 0.668,
    },
    shadowRadius: 2,
    elevation: 1,
  }}
  onPress={() => alert("Pressed!")}
>
  <Image
    source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/990cc2ec-25bf-42e2-b8d6-559e31a43a98",
    }}
    resizeMode="contain"
    style={{
      width: 14,
      height: 14,
      flexShrink: 0,
      justifyContent: "center",
      alignItems: "center",
      aspectRatio: 1,
      marginRight: 4,
    }}
  />
  <Text
    style={{
      color: "#01383D",
      textAlign: "center",
      fontFamily: "DM Sans",
      fontSize: 10,
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: 15.026,
    }}
  >
    {"Bookmark"}
  </Text>
</TouchableOpacity>

								</ImageBackground>
								
							</View>
							<Text 
								style={{
									position: "absolute",
									top: -20,
									left: -24,
									color: "#000000",
									fontSize: 18,
									fontWeight: "bold",
									width: 128,
								}}>
								{"The Blue Zones Solution "}
							</Text>
							<Text 
								style={{
									position: "absolute",
									top: 36,
									left: -24,
									color: "#737373",
									fontSize: 14,
								}}>
								{"Dan Buettner"}
							</Text>
							<Text 
								style={{
									position: "absolute",
									top: 62,
									left: -24,
									color: "#000000",
									fontSize: 14,
								}}>
								{"0 mins"}
							</Text>
						</View>

						
						
					</View>

					<View 
						style={{
							flexDirection: "row",
							alignItems: "flex-start",
							backgroundColor: "#F7E5A4",
							borderRadius: 8,
							paddingLeft: 13,
							height:232,
							marginBottom: 12,

						}}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/783568a1-8e40-4a0d-9581-a0f1aa9c1a57"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 10,
								width: 133,
								height: 200,
								marginTop: 16,
								marginRight: 41,
							}}
						/>
						<View 
							style={{
								flex: 1,
								marginTop: 34,
							}}>
							<View >
								
							<ImageBackground 
  source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d843d81-4d26-45b0-9015-f627f7fa531c" }} 
  resizeMode={'stretch'}
  imageStyle={{ borderRadius: 8, opacity: 0.6 }} // reduce image opacity
  style={{
    width: 400.381,
    height: 226.071,
   
  }}
>


<TouchableOpacity 
									style={{
										width: 66,
										flexDirection: "row",
										backgroundColor: "#01383D",
										borderRadius: 8,
										paddingVertical: 14,
										paddingHorizontal: 7,
										top:94,
										right:23,
										shadowColor: "#0000001A",
										shadowOpacity: 0.1,
										shadowOffset: {
										    width: 0,
										    height: 0.6678383350372314
										},
										shadowRadius: 1,
										
									}} onPress={()=>alert('Pressed!')}>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1aea1f0-d006-4348-9a1b-fc81babcb6c9"}} 
										resizeMode = {"stretch"}
										style={{
											width: 12,
											height: 12,
											left: 5,
										}}
									/>
									<Text 
										style={{
											color: "#F9F9F9",
											fontSize: 10,
											fontWeight: "bold",
											textAlign: "center",
											left:8,
                      bottom:1,
										}}>
										{"Read"}
									</Text>
								</TouchableOpacity>
									<TouchableOpacity
  style={{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 44,
   
    paddingVertical: 8,
    paddingHorizontal: 10,
	
    gap: 2,
    flexShrink: 0,
    borderRadius: 8,
	top:52,
	left:51,
    backgroundColor: "#FDFCFC",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 0.668,
    },
    shadowRadius: 2,
    elevation: 1,
  }}
  onPress={() => alert("Pressed!")}
>
  <Image
    source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/990cc2ec-25bf-42e2-b8d6-559e31a43a98",
    }}
    resizeMode="contain"
    style={{
      width: 14,
      height: 14,
      flexShrink: 0,
      justifyContent: "center",
      alignItems: "center",
      aspectRatio: 1,
      marginRight: 4,
    }}
  />
  <Text
    style={{
      color: "#01383D",
      textAlign: "center",
      fontFamily: "DM Sans",
      fontSize: 10,
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: 15.026,
    }}
  >
    {"Bookmark	"}
  </Text>
</TouchableOpacity>

								</ImageBackground>
								
							</View>
							<Text 
								style={{
									position: "absolute",
									top: -20,
									left: -24,
									color: "#000000",
									fontSize: 18,
									fontWeight: "bold",
									width: 128,
								}}>
								{"The Blue Zones Solution "}
							</Text>
							<Text 
								style={{
									position: "absolute",
									top: 36,
									left: -24,
									color: "#737373",
									fontSize: 14,
								}}>
								{"Dan Buettner"}
							</Text>
							<Text 
								style={{
									position: "absolute",
									top: 62,
									left: -24,
									color: "#000000",
									fontSize: 14,
								}}>
								{"0 mins"}
							</Text>
						</View>

						
						
					</View>

					
				
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						paddingVertical: 2,
						marginBottom: 12,
						marginHorizontal: 16,
					}}>
					<Text
  style={{
    color: "#000",               // Set color to black
	fontFamily: "DMSans_600SemiBold",    // Set font-family to "DM Sans"
    fontSize: 24,                 // Set font-size to 24px
    fontStyle: "normal",          // Set font-style to normal
    fontWeight: "600",            // Set font-weight to 600
    lineHeight: 28,               // Set line-height to 28px
    marginBottom: 1,              // Set margin-bottom to 1
    marginRight: 12,              // Set margin-right to 12
    flex: 1,                      // Set flex to 1
  }}
>
  {"Featured Books"}
</Text>

<View 
						style={{
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<TouchableOpacity 
							style={{
								backgroundColor: "#FFFFFF",
								borderRadius: 33554400,
								padding: 8,
								marginRight: 8,
								shadowColor: "#0000001A",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}} onPress={()=>alert('Pressed!')}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ad6bde8-7da2-43f2-b9c1-8182a20577cb"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 33554400,
									width: 16,
									height: 16,
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								backgroundColor: "#FFFFFF",
								borderRadius: 33554400,
								padding: 8,
								shadowColor: "#0000001A",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}} onPress={()=>alert('Pressed!')}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23472944-f8a0-44f5-9ae8-5dc981ba08d9"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 33554400,
									width: 16,
									height: 16,
								}}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<ScrollView 
  horizontal 
  showsHorizontalScrollIndicator={false} 
  contentContainerStyle={{
    flexDirection: "row",
  }}
>
  {/* Original View, duplicated 3 more times */}
  {Array(4).fill().map((_, index) => (
    <View 
      key={index}
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 36,
        marginLeft: 16,
      }}
    >
      <View 
        style={{
          alignItems: "flex-start",
          marginRight: 16,
        }}
      >
        <Image
          source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10da1a1b-e316-419a-99c7-195f5c3d6cd8" }} 
          resizeMode={"stretch"}
          style={{
            borderRadius: 10,
            width: 140,
            height: 210,
            marginBottom: 8,
          }}
        />
        <View 
          style={{
            alignItems: "flex-start",
          }}
        >
          <Text 
            style={{
              color: "#000000",
              fontSize: 14,
              fontWeight: "bold",
              marginBottom: 5,
              marginRight: 14,
              width: 126,
            }}
          >
            {"What I Talk About\nWhen I Talk About…"}
          </Text>
          <Text 
            style={{
              color: "#737373",
              fontSize: 12,
              marginBottom: 5,
              marginRight: 50,
            }}
          >
            {"Haruki Murakami"}
          </Text>
          <View 
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text 
              style={{
                color: "#737373",
                fontSize: 10,
                marginRight: 6,
              }}
            >
              {"5 Parts"}
            </Text>
            <Text 
              style={{
                color: "#737373",
                fontSize: 15,
                marginRight: 7,
              }}
            >
              {"•"}
            </Text>
            <Text 
              style={{
                color: "#737373",
                fontSize: 10,
              }}
            >
              {"0 mins"}
            </Text>
          </View>
        </View>
      </View>
      <View 
        style={{
          alignItems: "flex-start",
          marginRight: 16,
        }}
      >
        <Image
          source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1699fcdc-9763-4738-99f5-2ee7b3db1652" }} 
          resizeMode={"stretch"}
          style={{
            borderRadius: 10,
            width: 140,
            height: 210,
            marginBottom: 8,
          }}
        />
        <View 
          style={{
            alignItems: "flex-start",
          }}
        >
          <Text 
            style={{
              color: "#000000",
              fontSize: 14,
              fontWeight: "bold",
              marginBottom: 5,
              marginRight: 14,
              width: 126,
            }}
          >
            {"What I Talk About\nWhen I Talk About…"}
          </Text>
          <Text 
            style={{
              color: "#737373",
              fontSize: 12,
              marginBottom: 5,
              marginRight: 50,
            }}
          >
            {"Haruki Murakami"}
          </Text>
          <View 
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text 
              style={{
                color: "#737373",
                fontSize: 10,
                marginRight: 6,
              }}
            >
              {"5 Parts"}
            </Text>
            <Text 
              style={{
                color: "#737373",
                fontSize: 15,
                marginRight: 7,
              }}
            >
              {"•"}
            </Text>
            <Text 
              style={{
                color: "#737373",
                fontSize: 10,
              }}
            >
              {"0 mins"}
            </Text>
          </View>
        </View>
      </View>
      <View 
        style={{
          alignItems: "flex-start",
        }}
      >
        <Image
          source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbaaf690-aec7-4542-850c-fee833596a31" }} 
          resizeMode={"stretch"}
          style={{
            borderRadius: 10,
            width: 140,
            height: 210,
            marginBottom: 8,
          }}
        />
        <Text 
          style={{
            color: "#000000",
            fontSize: 14,
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          {"What I Talk About\nWhen I Talk About…"}
        </Text>
        <Text 
          style={{
            color: "#737373",
            fontSize: 12,
            marginBottom: 5,
          }}
        >
          {"Haruki Murakami"}
        </Text>
        <View 
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text 
            style={{
              color: "#737373",
              fontSize: 10,
              marginRight: 6,
            }}
          >
            {"5 Parts"}
          </Text>
          <Text 
            style={{
              color: "#737373",
              fontSize: 15,
              marginRight: 7,
            }}
          >
            {"•"}
          </Text>
          <Text 
            style={{
              color: "#737373",
              fontSize: 10,
            }}
          >
            {"0 mins"}
          </Text>
        </View>
      </View>
    </View>
  ))}
</ScrollView>

<Text
  style={{
    color: "#000",
    fontFamily: "DMSans_600SemiBold", 
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 28,
    marginTop: 4,
    marginBottom: 17,
    marginHorizontal: 16,
  }}
>
  {"Curated Pathways"}
</Text>

<View style={{ padding: 16,
  bottom:30,
 }}>
      {/* Header */}
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
      }}>
        
       
      </View>

      {/* Scrollable Book List */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Book 1 */}
        <View style={{
          alignItems: "flex-start",
          paddingTop: 8,
          paddingBottom: 14,
          marginRight: 20,
        }}>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/GHideIhYHK/iolzicrp_expires_30_days.png" }}
            resizeMode="stretch"
            style={{
              width: 200,
              height: 300,
              marginBottom: 12,
            }}
          />
          <View>
            <Text style={{
              color: "#000000",
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 5,
              width: 166,
            }}>
              {"The Culture Code: The\nSecrets of Highly…"}
            </Text>
            <Text style={{
              color: "#737373",
              fontSize: 14,
              marginBottom: 5,
            }}>
              {"Daniel Coyle"}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#737373", fontSize: 15, marginRight: 4 }}>5 parts</Text>
              <Text style={{ color: "#737373", fontSize: 15, marginRight: 4 }}>•</Text>
              <Text style={{ color: "#737373", fontSize: 15 }}>17 mins</Text>
            </View>
          </View>
        </View>

        {/* Book 2 */}
        <View style={{
          alignItems: "flex-start",
          paddingVertical: 7,
          marginRight: 24,
        }}>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/GHideIhYHK/2s9fhb58_expires_30_days.png" }}
            resizeMode="stretch"
            style={{
              width: 200,
              height: 300,
              marginBottom: 12,
            }}
          />
          <Text style={{
            color: "#000000",
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 5,
            width: 186,
          }}>
            {"What I Talk About When I\nTalk About Running"}
          </Text>
          <Text style={{
            color: "#737373",
            fontSize: 14,
            marginBottom: 5,
          }}>
            {"Haruki Murakami"}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "#737373", fontSize: 15, marginRight: 7 }}>3 parts</Text>
            <Text style={{ color: "#737373", fontSize: 15, marginRight: 4 }}>•</Text>
            <Text style={{ color: "#737373", fontSize: 15 }}>12 mins</Text>
          </View>
        </View>

        {/* Book 3 */}
        <View style={{
          alignItems: "flex-start",
          paddingTop: 8,
          paddingBottom: 25,
          marginRight: 24,
        }}>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/GHideIhYHK/2yi5abrm_expires_30_days.png" }}
            resizeMode="stretch"
            style={{
              width: 200,
              height: 300,
              marginBottom: 12,
            }}
          />
          <Text style={{
            color: "#000000",
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 5,
            width: 180,
          }}>
            {"Man’s Search for Meaning"}
          </Text>
          <Text style={{
            color: "#737373",
            fontSize: 14,
            marginBottom: 5,
          }}>
            {"Viktor E. Frankl"}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#737373", fontSize: 15, marginRight: 4 }}>6 parts</Text>
            <Text style={{ color: "#737373", fontSize: 15, marginRight: 4 }}>•</Text>
            <Text style={{ color: "#737373", fontSize: 15 }}>25 mins</Text>
          </View>
        </View>

        {/* Book 4 */}
        <View style={{
          alignItems: "flex-start",
          paddingVertical: 8,
          marginRight: 24,
        }}>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/GHideIhYHK/2g6x1zxu_expires_30_days.png" }}
            resizeMode="stretch"
            style={{
              width: 200,
              height: 300,
              marginBottom: 12,
            }}
          />
          <Text style={{
            color: "#000000",
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 5,
            width: 170,
          }}>
            {"12 Rules for Life: An\nAntidote to Chaos"}
          </Text>
          <Text style={{
            color: "#737373",
            fontSize: 14,
            marginBottom: 5,
          }}>
            {"Jordan Peterson"}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#737373", fontSize: 15, marginRight: 4 }}>5 parts</Text>
            <Text style={{ color: "#737373", fontSize: 15, marginRight: 4 }}>•</Text>
            <Text style={{ color: "#737373", fontSize: 15 }}>15 mins</Text>
          </View>
        </View>

        {/* Book 5 */}
        <View style={{
          alignItems: "flex-start",
          paddingVertical: 8,
          marginRight: 24,
        }}>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/GHideIhYHK/f7k9lhwz_expires_30_days.png" }}
            resizeMode="stretch"
            style={{
              width: 200,
              height: 300,
              marginBottom: 12,
            }}
          />
          <Text style={{
            color: "#000000",
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 5,
            width: 180,
          }}>
            {"The Blue Zones Solution:\nEating "}
          </Text>
          <Text style={{
            color: "#737373",
            fontSize: 14,
            marginBottom: 5,
          }}>
            {"Dan Buettner"}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#737373", fontSize: 15, marginRight: 4 }}>5 parts</Text>
            <Text style={{ color: "#737373", fontSize: 15, marginRight: 4 }}>•</Text>
            <Text style={{ color: "#737373", fontSize: 15 }}>0 mins</Text>
          </View>
        </View>

        {/* Book 6 */}
        <View style={{
          alignItems: "center",
          paddingTop: 8,
          paddingBottom: 25,
        }}>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/GHideIhYHK/6wt3xbwf_expires_30_days.png" }}
            resizeMode="stretch"
            style={{
              width: 42,
              height: 300,
              marginBottom: 12,
            }}
          />
          <Text style={{
            color: "#000000",
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 5,
          }}>
            {"Dare to Lead"}
          </Text>
          <Text style={{
            color: "#737373",
            fontSize: 14,
            marginBottom: 5,
          }}>
            {"Brené Brown"}
          </Text>
          <Text style={{
            color: "#737373",
            fontSize: 15,
          }}>
            {"5 parts"}
          </Text>
        </View>
      </ScrollView>
    </View>
				
				<View 
					style={{
						marginBottom: 36,
						marginHorizontal: 16,
            bottom:20,
					}}>
					<Text  
  style={{
    color: "#000000",
    fontFamily: "DMSans_600SemiBold",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 28,
    marginTop: 4,
    marginBottom: 17,
  }}
>
  {"Your Reading Journey"}
</Text>

					<View >
					<View 
  style={{
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  }}
>
  <View 
    style={{
      width: 162,
      height: 166,
      padding: 17,
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      backgroundColor: "#FFFFFF",
      borderColor: "rgba(229, 229, 229, 0.5)",
      borderRadius: 14,
      borderWidth: 1,
      marginRight: 16,
    }}
  >
    <Text 
      style={{
        color: "#000000",
        fontSize: 24,
        marginBottom: 4,
      }}
    >
      {"📚"}
    </Text>
    <Text 
      style={{
        color: "#737373",
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 4,
      }}
    >
      {"Weekly Reading\nGoal"}
    </Text>
    <Text 
      style={{
        color: "#000000",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
      }}
    >
      {"5 Books"}
    </Text>
    <Text 
      style={{
        color: "#737373",
        fontSize: 12,
      }}
    >
      {"+2 from last week"}
    </Text>
  </View>

  {/* Second card remains unchanged for now */}
  <View 
    style={{
      
      right:8,
      width:155,
      backgroundColor: "#FFFFFF",
      borderColor: "#E5E5E580",
      borderRadius: 14,
      borderWidth: 1,
      paddingTop: 49,
      paddingBottom: 37,
     
      paddingHorizontal: 17,
    }}
  >
    <Text 
      style={{
        color: "#737373",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 9,
      }}
    >
      {"Time Saved"}
    </Text>
    <Text 
      style={{
        color: "#000000",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 9,
      }}
    >
      {"3.5 hours"}
    </Text>
    <Text 
      style={{
        color: "#737373",
        fontSize: 12,
        marginBottom: 1,
      }}
    >
      {"This week"}
    </Text>
  </View>
</View>

<View 
  style={{
    flexDirection: "row",
    alignItems: "flex-start",
  }}
>
  <View 
    style={{
      width: 162,
      height: 166,
      padding: 17,
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      backgroundColor: "#FFFFFF",
      borderColor: "rgba(229, 229, 229, 0.5)",
      borderRadius: 14,
      borderWidth: 1,
      marginRight: 16,
    }}
  >
    <Image
  source={require('../assets/1.png')} // Adjust the path as needed
  style={{
    width: 24,           // same as fontSize
    height: 24,          // maintain square aspect ratio for icon
    marginBottom: 4,     // same spacing
    resizeMode: 'contain', // ensures image fits within its box
  }}
/>
    <Text 
      style={{
        color: "#737373",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 9,
      }}
    >
      {"Knowledge Gained"}
    </Text>
    <Text 
      style={{
        color: "#000000",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
      }}
    >
      {"15 Key Insights"}
    </Text>
    <Text 
      style={{
        color: "#737373",
        fontSize: 12,
      }}
    >
      {"From recent reads"}
    </Text>
  </View>

  <View 
    style={{
      width: 159,
      height: 166,
      padding: 17,
      right:8,
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      backgroundColor: "#FFFFFF",
      borderColor: "rgba(229, 229, 229, 0.5)",
      borderRadius: 14,
      borderWidth: 1,
    }}
  >
    <Text 
      style={{
        color: "#000000",
        fontSize: 24,
       
        bottom:7,
      }}
    >
      {"🔥"}
    </Text>
    <Text 
      style={{
        color: "#737373",
        fontSize: 14,
        fontWeight: "bold",
        bottom: 5,
      }}
    >
      {"Reading Streak"}
    </Text>
    <Text 
      style={{
        color: "#000000",
        fontSize: 18,
        fontWeight: "bold",
        top: 5,
      }}
    >
      {"7 Days"}
    </Text>
    <Text 
      style={{
        color: "#737373",
        fontSize: 12,
        top: 12,
      }}
    >
      {"Keep it up!"}
    </Text>
  </View>
</View>

					</View>
				</View>
				<View 
					style={{
						marginBottom: 126,
						marginLeft: 16,
					}}>
					<Text 
						style={{
							color: "#ABA3A0",
							fontSize: 40,
              fontfamily: 'Poppins',
              fontstyle: 'normal',
							fontWeight: "bold",
							marginBottom: 9,
							width: 182,
						}}>
						{"next gen.,\nlibrary."}
					</Text>
					<Text 
						style={{
							color: "#ABA3A0",
							fontSize: 12,
						}}>
						{"the world’s largest digital library."}
					</Text>
				</View>
      
        <Footer />
			</ScrollView>
		</SafeAreaView>
    
	)
}
