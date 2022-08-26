import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import service from "./service";
import 'bootstrap/dist/css/bootstrap.css'

const Clients =() =>{
  
const [clients,setClients] = useState([]);


useEffect(()=>{
  service.getClients()
  .then(response =>{
    console.log("Dsada",response.data);
    setClients(response.data);
  })
  
},[])

  return(
    
    <div>
      <h3>List of client</h3>
      
      <table border="2" cellPadding="10" class="table table-dark table-hover">
      <tbody>
        <tr>
          <td>Name</td>
          <td>Number</td>
          <td>Update</td>
        </tr>
        {
          clients.map(client =>(
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.number}</td>
              <td>
                <Link to={`/clients/${client.id}`} class="btn btn-info" >Update</Link>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table> 
      <Link to={`/tenant/1/getclient`} class="btn btn-primary">Create</Link>
      <Link to={`/invoices`} class="btn btn-primary">Invoice</Link>

    </div>
  );
 }

export default Clients;