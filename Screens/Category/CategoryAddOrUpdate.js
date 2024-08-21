import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import {
  useCreateCategoryMutation,
  useGetCategoryByIdQuery,
  useUpdateCategoryMutation,
} from "../../Apis/categoryApi";
import { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

function CategoryAddOrUpdate({ route, navigation }) {
  const Navigation = useNavigation();
  const categoryId = route.params?.categoryId;
  const { data, isLoading } = useGetCategoryByIdQuery(categoryId);
  const [UpdateCategory] = useUpdateCategoryMutation();
  const [CreateCategory] = useCreateCategoryMutation();
  const [categoryModel, setCategoryModel] = useState({
    categoryName: "",
    categoryDescription: "",
  });
  useEffect(() => {
    if (data) {
      setCategoryModel({
        categoryName: data.categoryName,
        categoryDescription: data.categoryDescription,
      });
    }
  }, [data]);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setCategoryModel((currentInputValue) => {
      return {
        ...currentInputValue,
        [inputIdentifier]: enteredValue,
      };
    });
    console.log("Input change handler");
    console.log(categoryModel);
  }

  //   public string CategoryName { get; set; }
  //   public string CategoryDescription { get; set; }

  const addOrUpdateCategory = async () => {
    var response;
    if (categoryId !== undefined) {
      console.log("setCategoryModel");
      console.log(categoryModel);

      const categoryUpdateModel = {
        categoryId: categoryId,
        categoryModel: {
          categoryName: categoryModel.categoryName,
          categoryDescription: categoryModel.categoryDescription,
        },
      };

      response = await UpdateCategory(categoryUpdateModel);
      Navigation.goBack();
    } else {
      response = await CreateCategory(categoryModel);
      Navigation.goBack();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Category Name"
          defaultValue={data ? data.categoryName : ""}
          onChangeText={(value) => inputChangeHandler("categoryName", value)}
        ></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Category Description"
          defaultValue={data ? data.categoryDescription : ""}
          onChangeText={(value) =>
            inputChangeHandler("categoryDescription", value)
          }
        ></TextInput>
      </View>
      <Button title="Save" onPress={addOrUpdateCategory}></Button>
    </View>
  );
}
export default CategoryAddOrUpdate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 30,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 16,
  },
});
