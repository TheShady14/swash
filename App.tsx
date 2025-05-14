import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ErrorBoundary from "./src/components/ErrorBoundary";

// Screens
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SignInScreen from "./src/screens/SignInScreen";
import HomeScreen from "./src/screens/HomeScreen";

// Define the root stack parameter list
export type RootStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

// Suppress the specific error
const originalConsoleError = console.error;
console.error = (...args) => {
  const errorMessage =
    typeof args[0] === "string" ? args[0] : String(args[0] || "");
  if (errorMessage.includes("topInsetsChange")) {
    // Ignore this specific error
    return;
  }
  originalConsoleError(...args);
};

const App = () => {
  return (
    <ErrorBoundary>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Welcome"
              screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: "white" },
                animationEnabled: false, // Disable animations to avoid inset issues
              }}
            >
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
};

export default App;
