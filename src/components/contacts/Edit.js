import React from 'react'
import EditForm from './EditForm'
import {useSelector} from "react-redux" 
import {contactSelector} from "../../redux/slices/contactSlice"
import {useParams,Redirect} from "react-router-dom"

function Edit() {
    
    let {id}=useParams();
    const state = useSelector((state)=>contactSelector.selectById(state,id));
    console.log(state);
    if(!state){
      return  <Redirect to={"/"}/>
    }
    return (
        <div>
            <h1>EDİT CONTACT</h1>
            <EditForm contact={state}/>
        </div>
    )
}

export default Edit
