
//1
import React, {useState, useEffect} from 'react'


//2
const MiApi = () => {
 
  const [ ciudad, setCiudad ] = useState([])
  const [ search, setSearch ] = useState("")

  //3
  const URL = 'https://api.gael.cloud/general/public/clima'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setCiudad(data)
  }   
   //4
  const searcher = (e) => {
      setSearch(e.target.value)   
  }
   

   //5 
   const results = !search ? ciudad : ciudad.filter((dato)=> dato.Estacion.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])
  
  //6
  return (
    <div>
        <input value={search} onChange={searcher} type="text" placeholder='Buscar' className='form-control'/>
        
        
        
        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='bg-curso text-white'>
                    <th>CIUDAD</th>
                    <th>TIEMPO</th>
                </tr>
            </thead>
            <tbody>
                { results.map( (ciudad) => (
                    <tr key={ciudad.id}>
                        <td>{ciudad.Estacion}</td>
                        <td>{ciudad.Estado}</td>
                    </tr>                    
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default MiApi