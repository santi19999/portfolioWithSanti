import Axios from "axios";
const validateUser = (url,datos) => {
 
   Axios.post(url, {email:datos.email,password:datos.password}).then((response) =>{
   
       if(response.data==="ok") return {text:"Success...!"}
       else return {text:"Los datos son Incorrectos!"} 
    
   })
} 
export default validateUser