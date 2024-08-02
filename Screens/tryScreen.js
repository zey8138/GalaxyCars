import { Text, StyleSheet, View } from "react-native";
import { useGetAllCategoryQuery } from "../Apis/categoryApi";

function TryScreen() {
  const { data, isLoading } = useGetAllCategoryQuery(null);

  console.log("data");
  console.log(data);

  return (
    <>
      <Text></Text>
    </>
  );
}

export default TryScreen;
