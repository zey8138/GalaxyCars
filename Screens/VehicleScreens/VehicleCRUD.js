import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import VehicleManage from "./VehicleManage";
import VehicleAddOrUpdate from "./VehicleAddOrUpdate";

function VehicleCRUD() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="VehicleManage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="VehicleManage"
        component={VehicleManage}
      ></Stack.Screen>
      <Stack.Screen
        name="AddOrUpdate"
        component={VehicleAddOrUpdate}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default VehicleCRUD;
