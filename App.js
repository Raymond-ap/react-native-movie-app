import { TailwindProvider } from "tailwindcss-react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Onboarding, HomeScreen, MovieDeatil } from "./screens";
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
            <Stack.Group>
              <Stack.Screen
                screenOptions={{
                  animation: "slide_from_right",
                  animationTypeForReplace: "pop",
                }}
                name="MovieDeatil"
                component={MovieDeatil}
              />
            </Stack.Group>
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    </TailwindProvider>
  );
}
