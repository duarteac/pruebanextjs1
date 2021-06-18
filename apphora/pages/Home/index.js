import { useState } from "react";

const Home = () => {
   const [fecha1, setfecha1] = useState(new Date('2021/06/17 19:00:00'))
   const [fecha2, setfecha2] = useState(new Date())
   const [resultado, setresultado] = useState(null)
   const calcular = () =>{
    console.log ("entre", fecha1)
    console.log ("entre", fecha2)
    setresultado( Math.floor((Math.abs(fecha2-fecha1)/1000)/60))
     
    }

    return (
       <div className = 'flex flex-col p-6'>
           <label htmlFor='name' className='flex flex-col p-2'>
         <span className='pb-3'>
         Fecha 1 
         <span className='text-red-600 '> *</span>
          </span>
         <input name='name' type='text' className='border-grisBtn border-2 outline-none text-sm md:text-lg lg:text-xl focus:border-morado hover:border-morado bg-bgCards' value ={fecha1.toLocaleString()} required />
            </label>

         <label htmlFor='name' className='flex flex-col p-2'>
         <span className='pb-3'>
         Fecha 2 
        <span className='text-red-600 '> *</span>
        </span>
        <input name='name' type='text' className='border-grisBtn border-2 outline-none text-sm md:text-lg lg:text-xl focus:border-morado hover:border-morado bg-bgCards' value ={fecha2.toLocaleString()} required />
        </label>
       <div>
           resultado = {resultado}
        </div> 
       <button className = "rounded-lg  bg-verdeAzul  bg-white focus:outline-none px-4 py-2 shadow-md hover:bg-white hover:text-verdeAzul hover:shadow-2xl hover:border-verdeAzul border-2  text-white lg:text-xl text-lg font-medium" onClick= {(e)=> calcular()}>
        calcular
        </button> 

       </div> 

    );
} ; 


    export default Home 