import {useState} from 'react';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Formulaire() {
    const [inputs, setInputs] = useState({});
  const navigate =useNavigate();
  
      const handleSubmit=(event)=>{
        event.preventDefault();
        Axios.post("http://localhost:3001/clients",inputs).then(res=>{
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
<div>Name  
<input required name="nom" placeholder="type here name of game !" type="text" value={inputs.nom}  className="form-control"
onChange={(e)=>handleChange(e)} />
</div>
<div> System Requirements  
<input required name="requir" placeholder=" type here System Requirements ! " type="text" value={inputs.requir} className="form-control"
onChange={(e)=>handleChange(e)} />
</div>

<div>type  
<input required name="typee" placeholder=" type here the types of game ! " type="text" value={inputs.typee} className="form-control"
onChange={(e)=>handleChange(e)} />
</div>


<div>price
<input required name="numserie" placeholder=" type here the price of game ! " type="text" value={inputs.numserie}  className="form-control"
onChange={(e)=>handleChange(e)} />
</div>
<div>Image  
<input required name="image" placeholder=" type here the URL of  the image_game ! " type="text" value={inputs.image} className="form-control"
onChange={(e)=>handleChange(e)} />
</div>
<div><input  required type="submit" value="Valider" className="btn btn-info"/></div>
</form>
</>
     );
}

export default Formulaire;