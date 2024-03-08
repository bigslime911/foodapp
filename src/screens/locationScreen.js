import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const locationScreen = () => {
  return (
    <View 
      style=
      {{
        flex:1,
        alignItems:"center",
        
      }}>
      {/* location Image and  text  Section */}
      <View 
          style=
          {{
            marginTop: 120,
            alignItems: "center",
            marginBottom:100,

          }}>
        <Image source={require("./assets/illustration.png")} />
        <View style=
          {{
            marginTop:40
          }}>
          <Text style=
            {{
              fontWeight:"bold",
              fontSize:16,
              marginBottom:10,
              alignItems:"center",

            }}>
            Select Location
          </Text>
        </View>
        <View>
          <Text style=
            {{
              width:300,
              alignItems:"center",
              textAlign:"center",
              color:"#7C7C7C"
            }}>
            Let’s find your next event. Stay in tune with
            what’s happening in your area!
          </Text>
        </View>
      </View > 
      <View style=
        {{
          marginTop:120,
        }}>
        <TouchableOpacity style=
          {{
            
            backgroundColor:"#0DCDAA",
            width:317,
            alignItems:"center",
            borderRadius:10,
            paddingBottom:10,
            paddingTop:10,
          }}>
          <Text style=
            {{
              color: "#fff"
            }}>
            Choose city
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default locationScreen