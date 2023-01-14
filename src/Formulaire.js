import {useState} from 'react';
function Formulaire() {
    const[inputs,setInputs] =useState({});

    const handleChange=(event) => {
         let nomChamp=event.target.name;
let value = nomChamp==="image" ?event.target.files[0].name: event.target.value;
         setInputs(values => ({...values, [nomChamp]: value}))
   
    }

    const handleSubmit = (event) => {
         event.preventDefault();
         alert(inputs.fullName + " " + inputs.email + " "+ inputs.image)
    }

    return ( 
        <>
            <form onSubmit={(event)=>handleSubmit(event)}>
                Nom :<input 
                name="fullName"
                type="text" 
                value={inputs.fullName}
                onChange={(event)=>handleChange(event)}
                />
                 requir :<input 
                name="requir" 
                type="text" 
                value={inputs.requir}
                onChange={(event)=>handleChange(event)}
                />

                type :<input 
                name="typee" 
                type="text" 
                value={inputs.typee}
                onChange={(event)=>handleChange(event)}
                />
                Numserie:<input
                name="numserie"
                type="text"
                onChange={(event)=>handleChange(event)}
                />

                Image : 
                <input type="file"
                       name="image"
                       onChange={(event)=>handleChange(event)}
                    />
                <input type="submit" value="valider" className="btn btn-primary"/>    
            </form>
       { inputs.fullName?<p>Le nom est {inputs.fullName}</p>:null}
       {inputs.requir? <p>L'requir est {inputs.requir}</p>:null}
        <p><img src={inputs.image}width="70" alt=""/></p>
        </>
     );
}

export default Formulaire;