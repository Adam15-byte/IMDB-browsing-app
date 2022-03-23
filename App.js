import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PopularScreen from "./src/screens/PopularScreen";
import { COLORS } from "./src/consts/colors";
import { BackgroundProvider } from "./src/context/Background";
import Navigation from "./Navigation";

export default function App() {
  return (
    <BackgroundProvider>
      <Navigation />
      <StatusBar style="auto" />
    </BackgroundProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
