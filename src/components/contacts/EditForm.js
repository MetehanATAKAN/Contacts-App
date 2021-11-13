import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import {updateContact} from "../../redux/slices/contactSlice"
import { useHistory } from "react-router-dom";

function EditForm({contact}) {

    const [name, setname] = useState(contact.name);
    const [phone_number, setnumber] = useState(contact.phone_number);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit=(e)=> {
        e.preventDefault();

        if(!name || !phone_number) return false;
        dispatch(updateContact({
            id:contact.id,
            changes:{
                name,
                phone_number
            }
        }))
        history.push("/");
    }
    return (
        
        <div>
             <form onSubmit={handleSubmit} >
                <input placeholder="Name" value={name} 
                    onChange={(e)=>setname(e.target.value)}
                 />
                <input placeholder="Phone" value={phone_number} 
                    onChange={(e)=>setnumber(e.target.value)} 
                />
                <div className="form-buttons">
                    <button type="submit">UPDATE</button>
                </div>              
            </form>
        </div>
    )
}

export default EditForm
