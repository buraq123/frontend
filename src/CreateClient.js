import { useState } from "react";
import service from "./service";


const CreateClient = () =>{

    const [name,setName] = useState();
    const [address,setAddress] = useState();
    const [postcode,setPostcode] = useState();
    const [city,setCity] = useState();

    const createClient = (e) =>{
        e.preventDefault();
        const newclient = {
            name : name,
            address : address,
            postCode : postcode,
            city : city
        }
        
        service.createClient(newclient)
        .then(response=>{
            console.log(newclient);   
        })
    
    }



    return(
        <form>
        <div>
         <label>Name :</label>   
        <input 
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    
        <label>Address :</label>  
        <input 
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
        />

        <label>PostCode :</label>  
        <input 
            id="postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
        />

        <label>City :</label>
        <input 
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
        />
        </div>
        <button onClick={createClient} >submit</button>
        </form>

    );
}


export default CreateClient