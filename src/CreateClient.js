import { useState } from "react";
import service from "./service";


const CreateClient = () =>{

    const [name,setName] = useState();
    const [number,setNumber] = useState();


    const createClient = (e) =>{
        e.preventDefault();
        const newclient = {
            name : name,
            number: number
        }
        
        service.createClient(newclient)
        .then(response=>{
            console.log("!111",number);   
        })
    
    }



    return(
        <form>
        <div>
        <input 
           
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    
        <input 
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
        />
        </div>
        <button onClick={createClient} >submit</button>
        </form>

    );
}


export default CreateClient