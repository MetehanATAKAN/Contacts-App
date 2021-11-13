import React from 'react'
import {contactSelector} from "../../redux/slices/contactSlice" ;
import {useSelector} from "react-redux";
import Item from './Item';
import  "../../App.css"
function List() {
    const state = useSelector(contactSelector.selectAll);
   
    return (
        <ul className="contacts-list">
           {
               state.map(item=>
                <Item key={item.id} item={item}/>
                )
           }
        </ul>
    )
}

export default List
