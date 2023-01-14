import {useState} from 'react';
function Formulaire() {
    const [inputs, setInputs] = useState({});
  
      const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Nom :",inputs.fullName);
        console.log("requir :",inputs.requir);
    }
    
    const handleChange = (event) => {
      const name = event.target.name;
      const value = name === "image" ? event.target.files[0].name : event.target.value;
      setInputs(values => ({...values, [name]: value}))
       }

    return ( 
<>
<form onSubmit={(event)=>handleSubmit(event)}>
<div>Nom  
<input name="fullName" type="text" value={inputs.fullName} 
onChange={(e)=>handleChange(e)} />
</div>
<div>System Requirements  
<input name="requir" type="text" value={inputs.requir} 
onChange={(e)=>handleChange(e)} />
</div>

<div>type  
<input name="typee" type="text" value={inputs.typee} className="form-control"
onChange={(e)=>handleChange(e)} />
</div>

<div>Image  
<input name="image" type="file" 
onChange={(e)=>handleChange(e)} />
</div>

<div>
{inputs.fullName?<p>name : {inputs.fullName}</p>:null} 
{inputs.requir?<p>System Requirements : {inputs.requir}</p>:null} 
{inputs.image?<p><img src={inputs.image} alt="" width="80" /></p>:null} 
</div>

<div><input type="submit" value="Valider" /></div>
</form>
</>
     );
}

export default Formulaire;