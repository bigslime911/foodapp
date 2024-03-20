import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignIn from '../screens/SignIn';

const Stack = createNativeStackNavigator();

function RootNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='welcome' component={WelcomeScreen}/>
                <Stack.Screen name='signin' component={SignIn}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
