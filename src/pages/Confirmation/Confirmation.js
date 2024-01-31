import React from 'react'
import { useNavigate } from 'react-router-dom'

const Confirmation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Confirmation</h1>
      <button onClick={()=>navigate("/")}>Ana Menüye Dön</button>
     
    </div>
  )
}

export default Confirmation
