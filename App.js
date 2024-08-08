import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./Storage/store";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function App() {

  const Drawer = createDrawerNavigator();

  function CategoryOverview(){
    return (
      <Drawer.Navigator initialRouteName='Category' >
        <Drawer.Screen name='Kategoriler' component={Category} ></Drawer.Screen>

      </Drawer.Navigator>
    )
  }



  return (
    <>
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Hello My Galaxy</Text>
          <StatusBar style="auto" />
        </View>
      </Provider>
    </>
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
