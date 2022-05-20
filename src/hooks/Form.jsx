import { fromJSON } from "postcss";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import validateUser from "./validateUser";
const Axios = require("axios")

export default function Form() {
  //Form default implementation export function for testing form  
  let [error,setErrors]= useState([])
  const {handleSubmit,formState:{errors}, reset ,register,setError,onChange} = useForm({
    defaultValues: {
      email:"",
      password:"",
    }
  });
  const url="http://localhost:3001/api/user"
  const onsubmit = data => {
    
    setError(validateUser(url,data))
    
    
};

  return (
    <div className="formContainerSignIn">
      <div className="containerForm h-[350px]">
        <div className="avatar"></div>
        <h1 className="titleForm">Sign in</h1>
        <div className={errors!==""?"errors":"success"}>
          <p>{error.text}</p>
        </div>
      <form onSubmit={handleSubmit(onsubmit)} className="mt-1.5 myForm" id="formulario">
    
    <div className="flex flex-col justify-start p-2 w-full h-[75px] ">
    <input type="email" name="email" placeholder="Ingrese su Email..." className="p-3 w-56 h-[45px] mb-3 rounded "
    {...register("email",{
      required:{
        value:"true",
        message:"El campo es Requerido"
      },
      pattern:{
        value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message:"El formato no es Correcto"
      }
    })}  />
    {errors.email && <span className={errors.email ? "text-orange" : ""}>{errors.email.message}</span>}
    </div>
    <div className="flex flex-col justify-start p-2 w-full h-[75px] ">
    <input type="password" name="password" placeholder="Ingrese su contraseña..." className="p-3 w-56 h-[45px] mb-3 rounded"
    {...register("password",
    {
     required:{
       value:"true",
       message:"La contraseña es requerida"
     },
     minLength:{
       value:6,
       message:"La contraseña debe tener al menos 6 caracteres"
     }
   })}  />
    </div>
   {errors.password && <span className={errors.password ? "text-green":""}>{errors.password.message}</span>}
    <button type="submit" className="p-2 rounded bg-blue w-3/5">Enviar</button>
   </form>
      </div>
    </div>
  );
}