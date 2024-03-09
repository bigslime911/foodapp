import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import notification from "./src/mock/notificationMock";

const App = () => {
  return (
    <SafeAreaView className="flex-1 mx-5 ">
      <ScrollView className="space-y-10">
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
                <Text className="text-white text-[10px] font-bold">
                  {notification.length}
                </Text>
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
          {notification.map((item) => {
            return (
              <View key={item.id}>
                <View className="flex flex-row items-center space-x-3">
                  <View>
                    <Image
                      source={{ uri: item.imageUrl }}
                      className="w-12 h-12 rounded-full"
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="font-semibold">{item.title}</Text>
                    <Text className="text-gray-500">{item.message}</Text>
                  </View>
                  <View>
                    <Text className="text-gray-500">{item.time}</Text>
                  </View>
                </View>
                <View className="border-b border-gray-300 mt-5"></View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;