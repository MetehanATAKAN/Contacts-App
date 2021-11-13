import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdapter=createEntityAdapter();
export const contactSelector=contactAdapter.getSelectors(state=>state.contacts);
const initialState=contactAdapter.getInitialState();

export const contactSlice=createSlice({
    name:"contacts",
    initialState,
    reducers:{
        addContact:contactAdapter.addOne,
        addContacts:contactAdapter.addMany,
        deleteContact:contactAdapter.removeOne,
        deleteAllContact:contactAdapter.removeAll,
        updateContact:contactAdapter.updateOne,
    },
})

export default contactSlice.reducer;
export const {addContact,addContacts,deleteContact,deleteAllContact,updateContact}=contactSlice.actions;