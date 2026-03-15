import { View, Text, Button, StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function HomeScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#222" : "#fff" }]}>
      <Text style={{ color: isDark ? "#fff" : "#000" }}>
        Current Theme: {theme}
      </Text>

      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
