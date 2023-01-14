import Axios from 'axios';
import {useState, useEffect} from 'react';
function ListUsers() {
    const [produits,setproduits]=useState();
useEffect(()=>{
Axios.get("http://localhost:3001/produits").then(res=>{
              setproduits(res.data);
            })
     },[]);
     
   return ( 
        <>
        <h1><u>list of my games Libary hope u guys enjoyed it !  </u></h1>
      <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"center"}}>
        {
          produits?  
            produits.map((prod)=>{
                return <div className="card" style={{"width": "18rem","margin":"10px"}} key={prod.id}>
                <img src={prod.imageartpetitf} className="card-img-top" alt="" height={250}/>
                <div className="card-body">
                  <h5 className="card-title">{prod.gamen}</h5>
                 

                  
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group list-group-flush text-center">{prod.type}</li>
                  <li className="list-group-item text-center  ">{prod.modes}</li>
                  <li className="list-group-item text-center">{prod.devlp}</li>
                  <li className="list-group-item text-center">{prod.prixVente} $</li>
               </ul>
               <div className=" card-footer text-center text-muted">{prod.days} ago </div>
              </div>
            })
            :null
        }
    </div>
        </>
     );
}

export default ListUsers;

