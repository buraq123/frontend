import { BrowserRouter , Routes,Route,Router} from "react-router-dom";
import Clients from "./Clients";
import Empty from "./empty";
import Client from "./Client";
import CreateClient from "./CreateClient";
import CreateInvoice from "./CreateInvoice";

function App(){
  return(
    <BrowserRouter>
    <div>
  
      <div>
       
        <Routes>
          <Route  path="/" element={<Clients/>}></Route>
          <Route path="/clients/:id" element={<Client/>}></Route>
          <Route path="/tenant/1/getclient" element={<CreateClient/>}></Route>
          <Route path="/invoices" element={<CreateInvoice/>}></Route>
        </Routes>
       
      </div>
    </div>
    </BrowserRouter>


  )
}

export default App;