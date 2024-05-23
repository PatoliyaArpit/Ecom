import { createSlice } from "@reduxjs/toolkit";

// Load initial state from local storage if available
const initialState = {
  log: JSON.parse(localStorage.getItem("log")) || [],
  final: JSON.parse(localStorage.getItem("final")) || [],
  // api: JSON.parse(localStorage.getItem("api")) || [],
  api:[],
  crud:[],
  Cart:[],
};
const savedCart = localStorage.getItem("Cart");
if (savedCart) {
  initialState.Cart = JSON.parse(savedCart);
}

export const slice = createSlice({
  name: "log",
  initialState,
  reducers: {
    add: (state, action) => {
      state.log = [...state.log, { ...action.payload }]; 
      localStorage.setItem("log", JSON.stringify(state.log));
    },
    fadd: (state, action) => {
      state.final = [...state.final, { ...action.payload }]; 
      localStorage.setItem("final", JSON.stringify(state.final));
    },
    Removefadd:(state,action)=>{ 
      state.final=[]
      window.localStorage.removeItem('final')
    },
    apishow: (state, action) => {
      action.payload.forEach((val) => {
        const exists = state.api.some((item) => item.Id === val.Id);
        if (!exists) {
          state.api.push(val); 
        } else {
          
        }
      });
    },
    crudshow:(state,action)=>{
      state.crud.push({...action.payload});
    },
    remove:(state,action)=>{
      state.crud=state.crud.filter((x)=>x.id !==action.payload);
    },
    update: (state, action) => {
      const { id,newData } = action.payload; 
      const index = state.crud.findIndex(item => item.id === id); 
      if (index !== -1) {
        state.crud[index] = {...state.crud[index],...newData }; 
      }
    },
    addcart:(state,action)=>{
      const itemid=action.payload.Id;
      const existingItemIndex=state.Cart.findIndex(
        (item)=>item.Id===itemid
      );
      if(existingItemIndex!==-1){
        state.Cart[existingItemIndex].quantity += 1;
      }
      else{
        state.Cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("Cart", JSON.stringify(state.Cart));
      
    } ,
    updatecart:(state,action)=>{
      state.Cart = action.payload;
    },
    removecart:(state,action)=>{
      state.Cart= state.Cart.filter((x)=>x.Id!==action.payload.Id)
     localStorage.setItem("Cart", JSON.stringify(state.Cart));
     console.log(action)
    }


  },
});

export default slice.reducer;
export const { add, fadd, apishow,crudshow,remove ,update,addcart,updatecart,removecart,Removefadd}=slice.actions;
