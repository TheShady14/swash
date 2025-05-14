import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Define the root stack parameter list
export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

// Create simple screen components
const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome to Swash</Text>
      <Text style={styles.subtitle}>Premium Laundry Club</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>You're now in the app!</Text>
    </View>
  );
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

// Main App component
const App = () => {
  return (
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
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2D9CDB",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: "center",
    color: "#4F4F4F",
  },
  button: {
    backgroundColor: "#2D9CDB",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default App;
