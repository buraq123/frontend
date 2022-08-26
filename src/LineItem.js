import { Link } from "react-router-dom"
import { useState } from "react";

const LineItem = (props) =>{

    
    return(
        <div >
            <label>VAT</label>
            <input
             id="vat"
             name="vat"
             onChange={e => props.item(e,props.data.id)}
             ></input>
            <label>quantity</label>
            <input  
            id="quantity"
            name="quantity"
            
            onChange={ e => props.item(e,props.data.id)}>    
            </input>
            <label>price</label>
            <input
             id="price"
             name="price"
            
             onChange={e => props.item(e,props.data.id)}></input>
            <label>description</label>
            <input 
             id="description"
             name="description" 
            onChange={e => props.item(e,props.data.id)}>
            </input>
        </div>
    )
}

export default LineItem;