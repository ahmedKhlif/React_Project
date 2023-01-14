import Axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
function ListUsers() {
    const [clients,setclients]=useState();
useEffect(()=>{
Axios.get("http://localhost:3001/clients").then(res=>{
              setclients(res.data);
            })
     },[clients]);

const deleteClt=(id)=>{
    Axios.delete(`http://localhost:3001/clients/${id}`)
       }
   return ( 
        <>
        <h1><u>My Whishlist !</u></h1>
     <table className="table table-dark">
     <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Recommended System Requirements</th>
          <th>Type</th>
          <th>Price</th>
          <th>delete</th>
          <th>Modify</th>

        </tr>
      </thead>
      
      <tbody>
        {
          clients?  
            clients.map((clt)=>{
                return <tr key={clt.id}>
                   <td><img src= {clt.image} alt="" width="70"/></td>
                  <td>{clt.nom}</td>
                  <td> {clt.requir}</td>
                  <td> {clt.typee}</td>
                  <td> {clt.numserie}</td>
<td> <button className='btn btn-danger' onClick={() => deleteClt(clt.id)}>delete</button></td>
<td> <Link to={`/updateclt/${clt.id}`} ><button className='btn btn-primary'>Modify</button></Link></td>
                  </tr>
            })
            :null
        }
        </tbody>
    </table>
        </>
     );
}

export default ListUsers;

