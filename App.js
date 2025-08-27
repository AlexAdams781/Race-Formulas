import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./scenes/Home";
import SetupPosition from "./scenes/SetupPosition";
import Learn from "./scenes/Learn";
import Customize from "./scenes/Customize";
import Quiz from "./scenes/Quiz";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SetupPosition"
          component={SetupPosition}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Learn"
          component={Learn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Customize"
          component={Customize}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
