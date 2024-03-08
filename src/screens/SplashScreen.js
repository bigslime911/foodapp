import { View, Text } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View 
        style=
            {{
                flex:1,
                backgroundColor: "#0DCDAA",
                justifyContent: "center",
                alignItems:"center"
            }}>
      <Text 
        style=
        {{
          color: "#fff",
          fontWeight: "bold",
          fontSize: "30px",
          lineHeight: "86.51px",
          fontFamily: "Skai"


        }}>
          Flut
      </Text>
    </View>
  )
}

export default SplashScreen