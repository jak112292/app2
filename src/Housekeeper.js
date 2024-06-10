import React from 'react'
import { useState} from 'react'
import { toast } from 'react-toastify';
import Chart from './chart';



const Housekeeper = () => {

  const [name,setName]=useState('')
  const [value,setValue]=useState('')
  const [data,setData]=useState([])


  const handlesubmit = (e) => {
    e.preventDefault();
    let chartobj={name,value};
    //console.log(chartobj);
    fetch("http://localhost:8000/stock",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(chartobj)
    }).then((res)=>{
            return res.json()
    }).then((res)=>{
        toast.success('Added.')
        setData(prev=>{
            const dataTemp = [...prev]
            dataTemp.push(res)
    return dataTemp
        })
    }) .catch((err)=>{
            toast.error('Failed :'+err.message);
        });
}
  
  return (
    <div>
    <h1>Inventory</h1>
   <center> <Chart onload={data={data}}/></center>
    <div className='=offset-lg-3 col-lg-6'>
       <form className="container"  onSubmit={handlesubmit} style={{marginTop:'200px', marginLeft:'50%'}} >
          <div className="card" >

             <div className='card-header'>
             <h1>Add Module</h1>
             </div>
           
             <div className='card-body'>
                 <div className='=row'>
                     <div className='col-lg-6'>
                         <div className='form-group'>
                             <label>Name</label>
                             <input value={name} onChange={e=>setName(e.target.value)}type='text'className='form-control'></input>
                         </div>
                     </div>
                 
                     <div className='col-lg-6'>
                         <div className='form-group'>
                             <label>Value</label>
                             <input value={value} onChange={e=>setValue(e.target.value)}type='number'className='form-control'></input>
                         </div>
                     </div>
                 
                 </div>
             </div>

             <div className='card-footer'>
                <button type='submit' className="btn btn-primary">Add</button>  
             </div>
          </div>
       </form>
    </div>

    
 </div>
  )
}

export default Housekeeper