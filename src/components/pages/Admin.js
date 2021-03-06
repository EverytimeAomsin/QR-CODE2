import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../../css/home.css'
import '../../css/admin2.css'

const Home = () => {
  const [menus, setMenu] = useState([]);

  useEffect(() => {
    document.title = "QR-Admin";
    loadMenus();
  }, []);

  const loadMenus = async () => {
    const result = await axios.get("http://localhost:3003/Menus");
    setMenu(result.data.reverse());
  };
  const deleteMenu = async id => {
    await axios.delete(`http://localhost:3003/Menus/${id}`);
    loadMenus();
  };


  return (
    <div >
      <Link style={{ marginBottom: '3px', textDecoration: "none" }}
        class="btn btn-outline-primary mr-1"
        to={`/`}
      ><button className="button button1" style={{ marginTop: '15px' }}>กลับหน้าแรก</button></Link>
      <Link style={{ marginBottom: '3px', textDecoration: "none" }}
        class="btn btn-outline-primary mr-1"
        to={`/AddMenu`}
      ><button className="button button1" style={{ marginTop: '15px'}}>เพิ่มเมนู</button></Link>
      <div>
        {menus.map((menu) => (
          <div className="column">
            <div className="content card" >
              <Link to={`/${menu.id}`} ><img className="img-fluid " src={menu.Qr} /></Link>
              <Link to={`/${menu.id}`} style={{ textDecoration: "none",color: 'black' }}><h2 >{menu.MenuName}</h2></Link>
              <Link to={`/${menu.id}`} style={{ textDecoration: "none",color: 'black' }}><p>{menu.Description}</p></Link>
              <Link style={{ marginBottom: '3px', textDecoration: "none" }}
                class="btn btn-outline-primary mr-1"
                to={`/AddMenu/${menu.id}`}
              >
                <button class="button button1" style={{ marginTop: '15px' }}>Edit</button>
              </Link>
              <Link
               
                onClick={() => deleteMenu(menu.id)}
              >
                <button class="button button3">Delete</button>
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
