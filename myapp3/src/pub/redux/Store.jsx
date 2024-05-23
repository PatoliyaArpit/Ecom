import { configureStore } from "@reduxjs/toolkit";
import Slice, { apishow } from "./Slice";
const store = configureStore({
  reducer: {
    log: Slice,
    final:Slice,
    api:Slice,
    crud:Slice,
    Cart:Slice
    
  }
});
export default store;
