import { View, Text,SafeAreaView,TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";

const SignUp = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginLeft: 25, marginRight: 25 }}>
      {/* nav bar*/}
      <View style=
        {{
          flexDirection:"row",
          alignItems:"center"
        }}>
        <AntDesign style={{marginRight:10}} name="arrowleft" size={24} color="black" />
        <Text style=
          {{
            fontSize:24,
            fontWeight:"bold",
          }}>
          Create new account
        </Text>
      </View>
      {/**forms */}
      <View style=
        {{
          marginTop: 150,
        }}>
        {/**name and text input */}
        <View style=
          {{
            marginBottom:20,
          }}>
          <Text style=
            {{
              fontSize:16,
              fontWeight:"bold",
              color:"#7C7C7C",
              
            }}>
            Full name
          </Text>
          <TextInput
            style={{ 
              paddingTop:10,
              paddingBottom:10,
              borderBottomWidth:1,
              borderBottomColor:"#F2F2F2"
            }}          
            placeholder='enter your name'
          />
        </View>

        {/**email and text input */}
        <View style=
          {{
            marginBottom:20,
          }}>
          <Text style=
            {{
              fontSize:16,
              fontWeight:"bold",
              color:"#7C7C7C",
              
            }}>
            Email address
          </Text>
          <TextInput
            style={{ 
              paddingTop:10,
              paddingBottom:10,
              borderBottomWidth:1,
              borderBottomColor:"#F2F2F2"
            }}          
            placeholder='name@example.com'
          />
        </View>
        {/**password and text input */}
        <View style=
          {{
            marginBottom:20,
          }}>
          <Text style=
            {{
              fontSize:16,
              fontWeight:"bold",
              color:"#7C7C7C",
              
            }}>
            Create password
          </Text>
          <TextInput
            style={{ 
              paddingTop:10,
              paddingBottom:10,
              borderBottomWidth:1,
              borderBottomColor:"#F2F2F2"
            }}          
            placeholder='enter your password'
          />
        </View>
        {/**repeat password and text input */}
        <View>
          <Text style=
            {{
              fontSize:16,
              fontWeight:"bold",
              color:"#7C7C7C",
              
            }}>
            Repeat password
          </Text>
          <TextInput
            style={{ 
              paddingTop:10,
              paddingBottom:10,
              borderBottomWidth:1,
              borderBottomColor:"#F2F2F2"
            }}
            placeholder='repeat new password'
          />
        </View>
      </View>
        {/**Button Section */}
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 60,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0DCDAA",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Sign Up</Text>
        </TouchableOpacity>            
    </SafeAreaView>
  )
}

export default SignUp