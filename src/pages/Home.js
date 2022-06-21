import React from 'react'
import { useNavigate } from "react-router-dom";
import BusFilter from '../components/BusFilter';
function Home() {
    let navigate = useNavigate()
  return (
    <div className="home-div">
      <div className="admin-div" onClick={()=>navigate("/addtravel")}>
        <img
          className="admin-img"
          src="https://pos.bakiyem.com/surucuimg/0C6299908F669B21AA05485DC74D8D05.jpeg"
        />
      </div>

      <div className="project-name-div">

      </div>

   <BusFilter></BusFilter>

      <div className="name-div">
        
      </div>
    </div>
  )
}

export default Home