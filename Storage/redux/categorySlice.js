import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _categories: [],
  get categories() {
    return this._categories;
  },
  set categories(value) {
    this._categories = value;
  },
  categoryId: "",
};

export const categorieslice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    getAllcategories: (state, action) => {
      state.categories = aciton.payload;
    },
  },
});

export const { getAllcategories } = categorieslice.actions;

export const categoryReducer = categorieslice.reducer;
