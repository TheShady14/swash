import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, User!</Text>
          <Text style={styles.subGreeting}>Welcome to Swash</Text>
        </View>

        <View style={styles.nextPickupCard}>
          <Text style={styles.cardTitle}>Next Pickup</Text>
          <View style={styles.pickupDetails}>
            <Text style={styles.pickupDate}>Wednesday, May 15</Text>
            <Text style={styles.pickupTime}>2:00 PM - 4:00 PM</Text>
          </View>
          <TouchableOpacity style={styles.rescheduleButton}>
            <Text style={styles.rescheduleButtonText}>Reschedule</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subscriptionCard}>
          <Text style={styles.cardTitle}>Your Subscription</Text>
          <Text style={styles.planName}>Premium Weekly Plan</Text>
          <Text style={styles.planDetails}>1 wash per week</Text>
          <TouchableOpacity style={styles.viewDetailsButton}>
            <Text style={styles.viewDetailsButtonText}>View Details</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIcon}>
              <Text>📅</Text>
            </View>
            <Text style={styles.actionText}>Schedule Pickup</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIcon}>
              <Text>🧺</Text>
            </View>
            <Text style={styles.actionText}>Laundry Contents</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIcon}>
              <Text>🔍</Text>
            </View>
            <Text style={styles.actionText}>Track Order</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIcon}>
              <Text>🎁</Text>
            </View>
            <Text style={styles.actionText}>Perks</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#2D9CDB",
    padding: 20,
    paddingTop: 20, // Reduced from 60 since we're using SafeAreaView
    paddingBottom: 30,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subGreeting: {
    fontSize: 16,
    color: "#FFFFFF",
    opacity: 0.8,
  },
  nextPickupCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 12,
  },
  pickupDetails: {
    marginBottom: 16,
  },
  pickupDate: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
  },
  pickupTime: {
    fontSize: 14,
    color: "#4F4F4F",
    marginTop: 4,
  },
  rescheduleButton: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  rescheduleButtonText: {
    color: "#2D9CDB",
    fontWeight: "600",
  },
  subscriptionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    margin: 16,
    marginTop: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  planName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
  },
  planDetails: {
    fontSize: 14,
    color: "#4F4F4F",
    marginTop: 4,
    marginBottom: 16,
  },
  viewDetailsButton: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  viewDetailsButtonText: {
    color: "#2D9CDB",
    fontWeight: "600",
  },
  actionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },
  actionButton: {
    backgroundColor: "#FFFFFF",
    width: "48%",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  actionText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333333",
  },
});

export default HomeScreen;
