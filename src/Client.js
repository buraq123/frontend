import { useEffect, useState } from "react";
import { useParams } from "react-router";
import service from "./service";

const Client = () => {
const {id} = useParams();

const [client,setClient] = useState('');
const [name,setName] = useState();
const [address,setAddress] = useState();
const [postcode,setPostcode] = useState();
const [city,setCity] = useState();


useEffect(()=>{
    service.getOneClient(id)
    .then(response=>{
        console.log("client",response.data)
        setClient(response.data)
        setName(response.data.name)
        setAddress(response.data.address)
        setPostcode(response.data.postCode)
        setCity(response.data.city)

    })

   
},[id])



const updateClient = (e) =>{
    e.preventDefault();
    const newclient = {
        ...client,
        name : name,
        address : address,
        postCode : postcode,
        city : city
    }
    
    service.updateClient(id,newclient)
    .then(response=>{
        console.log("sdadsaasds");    
    })

}
console.log(name)

return(
    <form >
    <div class="form-group">

    <label>Name :</label>   
    <input 
        class="form-control"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
    />

    <label>Address :</label>   
    <input 
       class="form-control"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
    />

    <label>PostCode :</label>  
    <input 
       class="form-control"
        id="postcode"
        value={postcode}
        onChange={(e) => setPostcode(e.target.value)}
    />

    <label>City:</label>          
    <input 
        class="form-control"
        id="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
    />
    </div>
    <button onClick={updateClient} class="btn btn-success" >submit</button>
    </form>
)


}

export default Client;