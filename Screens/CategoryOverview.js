import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryList from "../Screens/CategoryList";
import Vehicles from "./VehicleScreens/Vehicles";
import VehicleDetail from "./VehicleScreens/VehicleDetail";
import MyTabs from "./Category/MyTabs";

export default function CategoryOverview() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Category List"
        component={CategoryList}
      ></Stack.Screen>
      <Stack.Screen name="Vehicles" component={Vehicles}></Stack.Screen>
      <Stack.Screen
        name="VehicleDetail"
        component={VehicleDetail}
      ></Stack.Screen>
      <Stack.Screen name="MyTabs" component={MyTabs}></Stack.Screen>
    </Stack.Navigator>
  );
}
