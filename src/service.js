import httpCommon from './http-common';
import htppclient from './http-common';

const getClients = () =>{
   return htppclient.get(`/tenant/1/getclients`);
}

const getOneClient = id => {
    return htppclient.get(`/clients/${id}`);
}

const updateClient =(id,data) =>{
    return htppclient.post(`/clients/${id}`, data)
}

const createClient = data =>{
    return htppclient.post(`/tenant/1/clients`, data);
}

const createInvoice = data =>{
    return htppclient.post(`/invoices`, data)
}


export default {getClients,getOneClient,updateClient,createClient,createInvoice}
