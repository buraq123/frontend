import { useEffect, useState } from "react"
import service from "./service";
import LineItem from "./LineItem";

const CreateInvoice = () => {

    const [clients,setClients] = useState([]);

    const [date,setDate] = useState();
    const [clientID,setClientID] = useState();
    const [lineItems,setLineItems] = useState([]);


    useEffect(() =>{
        service.getClients()
        .then(response =>{
            setClients(response.data)
        }
        )

    },[])

    const clickHandle = (e) =>{
        e.preventDefault();
        setLineItems((lineItems) => [...lineItems,{
            id: lineItems.length,
            vat: 0,
            description:"",
            quantity:0,
            price:0
        }])
        
    }

    const handler = (e,id) =>{
       e.preventDefault();
       const values =[...lineItems];
       values[id][e.target.name] = e.target.value;
       setLineItems(values)
       console.log(lineItems)
    }

    const sendInvoice = (e) =>{
        e.preventDefault();
        console.log("fdsfs",clientID)
        const invoice ={
            date:date,
            clientId: clientID,
            lineItems:lineItems,
            }
        console.log(invoice);
        service.createInvoice(invoice)
        .then(response =>{
            console.log("dfwefwef",response.data)
        })

    }

   

    
    return(
        <form>
             {
                        lineItems.map((lineItem,id) =>{
                            return <LineItem key={id} item={handler} data={lineItem}/>
                        })
                    }
            <button onClick={clickHandle}>Add new Item </button>
            <div>
                <label>Date :</label>
                <input type="date" onChange={(e) => setDate(e.target.value)}></input>

                <label>Client :</label>
                <select name="clients"   onChange={(e) => setClientID(e.target.value)}>
                {
                    clients.map(client =>{
                        return <option key={client.id}  value={client.id}>{client.name}</option>
                    })
                }
                </select>
                <button onClick={(e) => sendInvoice(e)}>Submit</button>
            </div>
        </form>

    )
}

export default CreateInvoice;