import React,{useState} from 'react'
import {addContact,deleteAllContact} from "../../redux/slices/contactSlice";
import {useDispatch} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";
import  "../../App.css";

function Form() {
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const dispatch = useDispatch();

    const handleSubmit=(e)=> {
        e.preventDefault();
        if(!name || !phone) {
            return false
        }

        dispatch(addContact({id:nanoid(),name,phone_number:phone}));
        setname("");
        setphone("");
    }

    const handleDelete=()=> {
        if(window.confirm( "Are your sure?")){
            dispatch(deleteAllContact());
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)} />
                <input placeholder="Phone" value={phone} onChange={(e)=>setphone(e.target.value)} />
                <div className="form-buttons">
                    <button type="submit">ADD</button>
                    <button onClick={()=>handleDelete()} className="delete-all" type="reset">DELETE ALL</button>
                </div>
                
            </form>
            <div className="form-property">
                <span>NAME</span>
                <span>PHONE NUMBER</span>
                <span>DELETE CONTACT</span>
            </div>
        </div>
    )
}

export default Form
