import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoryManage from "./Category/CategoryManage";
import VehicleManage from "./VehicleScreens/VehicleManage"; 
import Home from "./Home";

function HomePage() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="CategoryManage" component={CategoryManage} />
      <Tab.Screen name="VehicleManage" component={VehicleManage} />
    </Tab.Navigator>
  );
}

export default HomePage;
