import { Link } from "react-router-dom"
import { useState } from "react";
import  'bootstrap/dist/css/bootstrap.min.css';
import "./Form.css"
const LineItem = (props) =>{

    
    return(
        <div className="lineItem">

                <div>  
                    
                    <input
                    id="description"
                    name="description" 
                    onChange={e => props.item(e,props.data.id)}>
                    </input>
                </div>  


            <div > 
                <input
                id="vat"
                name="vat"
                onChange={e => props.item(e,props.data.id)}
                ></input>
            </div> 

            <div >   
               
                <input  
                id="quantity"
                name="quantity"
                onChange={ e => props.item(e,props.data.id)}>    
                </input>
            </div> 

            <div > 
               
                <input
                id="price"
                name="price"
                
                onChange={e => props.item(e,props.data.id)}></input>
            </div> 

            
    </div>
    )
}

export default LineItem;