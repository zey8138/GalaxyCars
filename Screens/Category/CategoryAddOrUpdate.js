import { View, Text } from "react-native";

function CategoryAddOrUpdate({ route, navigation }) {
  const categoryId = route.params?.categoryId;
  console.log("categoryId");
  console.log(categoryId);
  return (
    <View>
      <Text> Category Add Or Update </Text>
    </View>
  );
}
export default CategoryAddOrUpdate;
