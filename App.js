import { TailwindProvider } from "tailwindcss-react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { Onboarding, HomeScreen, MovieDeatil, ListingScreen } from "./screens";
import { AuthProvider } from "./hooks/useAuth";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer theme={DarkTheme} className="bg-black flex-1">
        <AuthProvider>
          <Stack.Navigator
            initialRouteName="Onboarding"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Listing" component={ListingScreen} />
            <Stack.Group>
              <Stack.Screen
                screenOptions={{
                  animation: "slide_from_right",
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
