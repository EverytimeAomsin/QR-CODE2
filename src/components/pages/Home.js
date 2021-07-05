import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../../css/home.css'

const Home = () => {
  const [menus, setUser] = useState([]);

  useEffect(() => {
    document.title = "QR-Home";
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/Menus");
    setUser(result.data.reverse());
  };



  return (
    <div >
      <div>
        {menus.map((menu) => (
                 <div className="column">
                 <div className="content card" >
                 <Link   to={`/${menu.id}`} ><img className="img-fluid "  src={menu.img} /></Link>
                   <Link  to={`/${menu.id}`} style={{textDecoration:"none"}}><h2 >{menu.MenuName}</h2></Link>
                   <Link  to={`/${menu.id}`} style={{textDecoration:"none"}}><p>{menu.Description}</p></Link>
                 </div>
               </div>
                ))}
      </div>
   </div>
  );
};

export default Home;
