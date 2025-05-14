import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>SWASH</Text>
        <Text style={styles.tagline}>Premium Laundry Club</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to Swash</Text>
        <Text style={styles.subtitle}>
          The premium app-based laundry club for modern urban life
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 40, // Reduced from 80 since we're using SafeAreaView
  },
  logoText: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#2D9CDB",
  },
  tagline: {
    fontSize: 16,
    color: "#4F4F4F",
    marginTop: 8,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#4F4F4F",
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 24,
  },
  buttonContainer: {
    marginBottom: 30, // Reduced from 50 since we're using SafeAreaView
  },
  button: {
    backgroundColor: "#2D9CDB",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default WelcomeScreen;
