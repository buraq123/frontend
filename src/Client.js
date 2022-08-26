import { useEffect, useState } from "react";
import { useParams } from "react-router";
import service from "./service";

const Client = () => {
const {id} = useParams();

const [client,setClient] = useState('');
const [name,setName] = useState();
const [number,setNumber] = useState();

useEffect(()=>{
    service.getOneClient(id)
    .then(response=>{
        console.log("client",response.data)
        setClient(response.data)
        setName(response.data.name)
        setNumber(response.data.number)
    })

   
},[id])



const updateClient = (e) =>{
    e.preventDefault();
    const newclient = {
        ...client,
        name : name,
        number: number
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
     <label>Name;</label>   
    <input 
       class="form-control"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
    />

    <input 
    class="form-control"
        id="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
    />
    </div>
    <button onClick={updateClient} class="btn btn-success" >submit</button>
    </form>
)


}

export default Client;