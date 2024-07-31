import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./Storage/store";
import { useGetAllCategoryQuery } from "./Apis/categoryApi";

export default function App() {
  const { data, isLoading } = useGetAllCategoryQuery(null);

  if (isLoading) {
    <text>...isLoading</text>;
  } else if (!isLoading) {
    console.log("data");
    console.log(data);
  }
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Hello My Galaxy Car Store</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
