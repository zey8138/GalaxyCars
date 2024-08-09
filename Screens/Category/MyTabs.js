import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function MyTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="CategoryManage" component={CategoryManage} />
    </Tab.Navigator>
  );
}

export default MyTabs;
