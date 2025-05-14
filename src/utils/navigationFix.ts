import { Platform } from "react-native";

// This is a workaround for the topInsetsChange error with Hermes
export function applyNavigationFix() {
  if (Platform.OS === "ios") {
    // Only needed for iOS
    const originalConsoleError = console.error;

    console.error = (...args) => {
      // Filter out the specific error we're trying to suppress
      const errorMessage =
        typeof args[0] === "string" ? args[0] : args[0]?.toString() || "";
      if (
        errorMessage.includes("topInsetsChange") ||
        errorMessage.includes("Unsupported top level event type")
      ) {
        // Ignore this specific error
        return;
      }

      // Pass through all other errors
      originalConsoleError(...args);
    };
  }
}
