import { View, Text, SafeAreaView, Image } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

const App = () => {
  return (
    <SafeAreaView className="flex-1 mx-5 space-y-10">
      {/**Notication Header  */}
      <View className="flex flex-row items-center justify-between">
        <View>
          <AntDesign name="left" size={24} color="black" />
        </View>

        <View>
          <Text className="text-lg font-semibold">Notification</Text>
        </View>

        <View>
          <Feather name="settings" size={24} color="black" />
        </View>
      </View>

      {/**Messages */}
      <View className="space-y-7">
        {/**Message header View  */}
        <View className="flex flex-row items-center justify-between">
          {/**Recent */}
          <View className="flex flex-row items-center space-x-1">
            <Text className="font-bold text-lg">Recent</Text>
            <View className="bg-[#FF4747] p-1 rounded-full">
              <Text className="text-white text-[10px] font-bold">4</Text>
            </View>
          </View>

          <View>
            <Text className="text-[#3F6DF6] font-semibold text-md">
              Mark All Read
            </Text>
          </View>
        </View>
        {/**End Message Header */}

        {/**Message List */}
        <View className="space-y-3">
          <View className="flex flex-row items-center space-x-2">
            <View>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1709777571247-39ad71a2d86e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                className="w-12 h-12 rounded-full"
              />
            </View>

            <View className="flex flex-row space-x-5">
              <View className="max-w-[300px] space-y-1">
                <Text className="font-bold">Kim Hayo Send You a Message</Text>
                <Text>
                  Hi mariana, are you looking for hotel in Purwokerto? You can
                  check our hotel ....
                </Text>
              </View>

              <View>
                <Text className="text-[#A7AEC1]">1 m ago</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;