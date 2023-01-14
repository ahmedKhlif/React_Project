import {useState,useEffect} from 'react';
import Axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';

function Formulaire() {
    const [inputs, setInputs] = useState({});
  const navigate =useNavigate();
  const {id}=useParams();

  useEffect(()=>{
    Axios.get(`http://localhost:3001/clients/${id}`).then(res=>{ setInputs(res.data); })
            },[]);


      const handleSubmit=(event)=>{
        event.preventDefault();
        Axios.put(`http://localhost:3001/clients/${id}`,inputs).then(res=>{
            console.log(res);
            navigate("/listeclt")
          })
    }
    
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
       }

    return ( 
<>
<form onSubmit={(event)=>handleSubmit(event)}>
<div>name  
<input name="nom" type="text" value={inputs.nom}  className="form-control"
onChange={(e)=>handleChange(e)} />
</div>
<div>requir  
<input name="requir" type="text" value={inputs.requir} className="form-control"
onChange={(e)=>handleChange(e)} />
</div>
<div>type  
<input name="typee" type="text" value={inputs.typee} className="form-control"
onChange={(e)=>handleChange(e)} />
</div>
<div>Image  
<input name="image" type="text" value={inputs.image} className="form-control"
onChange={(e)=>handleChange(e)} />
</div>
<div><input type="submit" value="update" className="btn btn-outline-warning"/></div>
</form>
</>
     );
}

export default Formulaire;