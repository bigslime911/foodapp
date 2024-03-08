import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const WelcomeScreen = () => {
  return (
    <View 
      style=
      {{
        flex:1,
        alignItems:"center",
        
      }}>
      {/* Welcome And Image Section */}
      <View 
          style=
          {{
            marginTop: 150,
            alignItems: "center",
            marginBottom:100,

          }}>
          <View style={{alignItems:"center",marginBottom:50}}>
          <Text 
          style=
          {{
          fontSize:35,
          fontWeight:"bold",

          }}>
          Welcome!
        </Text>
        <Text style={{color:"#7C7C7C"}}>
          Sign in or create a new account
        </Text>
          </View>


        <Image source={require("./assets/Frame.png")} />
      </View>

      {/**Sign In and Sign Up Section */}
      <View style={{margin:20,}}>
        {/*Sign in button*/}
        <TouchableOpacity style={{backgroundColor: "#0DCDAA",padding:10,width:317,borderRadius:10,alignItems:"center"}}>
          <Text style={{color:"#fff",}}>
            Sign In
          </Text>
        </TouchableOpacity>
        {/* Sign up button*/}
          <TouchableOpacity style={{borderWidth:1,borderColor:"#7C7C7C",marginTop:10,marginBottom:20,alignItems:"center",padding:10,width:317,borderRadius:10}}>
            <Text style={{color:"#7C7C7C"}}>
              No account yet? <Text style={{color:"#0DCDAA"}}>sign up</Text>
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default WelcomeScreen