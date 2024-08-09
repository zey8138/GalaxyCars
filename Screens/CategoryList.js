import { Text, View, StyleSheet, FlatList } from "react-native";
import { useGetAllCategoryQuery } from "../Apis/categoryApi";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  const { data, isLoading } = useGetAllCategoryQuery();
  console.log(data);

  if (isLoading) {
    return (
      <View>
        <Text> Loading... </Text>
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CategoryItem item={item}></CategoryItem>}
      ></FlatList>
      <Text> Loading </Text>
    </>
  );
}

export default CategoryList;
