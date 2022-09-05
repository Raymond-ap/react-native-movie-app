import { TailwindProvider } from "tailwindcss-react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Onboarding, HomeScreen } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Group
            screenOptions={{
              presentation: "modal",
              animation: "slide_from_bottom",
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
