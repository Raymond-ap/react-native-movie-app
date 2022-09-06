import { TailwindProvider } from "tailwindcss-react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Onboarding, HomeScreen } from "./screens";
import { AuthProvider } from "./hooks/useAuth";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator
            initialRouteName="Onboarding"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Group></Stack.Group>
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    </TailwindProvider>
  );
}
