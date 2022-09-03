import { useEffect, useState } from "react"
import service from "./service";
import LineItem from "./LineItem";
import "./Form.css"
import  'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


const CreateInvoice = () => {

    const [clients,setClients] = useState([]);

    const [date,setDate] = useState();
    const [clientID,setClientID] = useState();
    const [lineItems,setLineItems] = useState([]);
    const [address,setAddress] = useState();
    const [postcode,setPostcode] = useState();
    const [city,setCity] = useState();

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


    useEffect(()=>{
        service.getOneClient(clientID)
        .then(response =>{
            console.log(response.data);
            setAddress(response.data.address)
            setCity(response.data.city)
            setPostcode(response.data.postCode)

        },[])
    })

    

   

    
    return(
        <form className="form">
           
        
            <div className="dateandclient">
                <div className="date">
                <label>Date :</label>
                <input type="date" onChange={(e) => setDate(e.target.value)}></input>
                </div>

                <div className="client">
                <label>Client :</label>
                <select name="clients"   onChange={(e) => setClientID(e.target.value)}>
                <option value="" disabled selected>Select your option</option>
                {
                    clients.map(client =>{
                        return <option key={client.id}  value={client.id}>{client.name}</option>
                    })
                }
                </select>

                <label>{address}</label>
                <label>{postcode}</label>
                <label>{city}</label>
                

                </div>
            </div>

                 
        <div className="lineitemform">
            {lineItems.length >0 &&
            <div className="labels">
            <label id="descriptionl" >Description</label>
            <label  id="quantityl">Quantity</label>
            <label id="pricel">Price</label>
            <label id="vatl" >VAT </label>
            </div>}

            {
                lineItems.map((lineItem,id) =>{
                return <div >  
                        <LineItem key={id} item={handler} data={lineItem}/>
                         </div>
                        })
            }
        <div className="buttons">
        <button onClick={clickHandle} class="btn btn-success"  id="newitembutton">
            <i class="bi bi-plus"></i>
            Add new Item </button>
        </div>

        </div>

            <button onClick={(e) => sendInvoice(e)} class="btn btn-primary" id="submit">Submit</button>
        </form>

    )
}

export default CreateInvoice;